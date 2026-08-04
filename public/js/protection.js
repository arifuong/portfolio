(function () {
  'use strict';

  if (window.__portfolioProtection) return;

  var FORM_SELECTOR = 'input, textarea, select, [contenteditable="true"], [role="textbox"]';

  function isEditable(el) {
    return el && typeof el.closest === 'function' && el.closest(FORM_SELECTOR);
  }

  document.addEventListener('contextmenu', function (e) {
    if (isEditable(e.target)) return;
    e.preventDefault();
    e.stopPropagation();
  }, true);

  document.addEventListener('dragstart', function (e) {
    var t = e.target;
    if (t && (t.tagName === 'IMG' || t.tagName === 'A')) {
      e.preventDefault();
      return false;
    }
  }, true);

  document.addEventListener('drop', function (e) {
    if (e.target && e.target.tagName === 'IMG') {
      e.preventDefault();
      return false;
    }
  }, true);

  document.addEventListener('selectstart', function (e) {
    if (e.target && e.target.tagName === 'IMG') {
      e.preventDefault();
      return false;
    }
  }, true);

  document.addEventListener('copy', function (e) {
    var sel = window.getSelection();
    if (!sel || sel.isCollapsed) return;
    if (sel.toString().trim()) return;
    var imgs = document.querySelectorAll('img');
    for (var i = 0; i < imgs.length; i++) {
      if (sel.containsNode(imgs[i], true)) {
        e.preventDefault();
        return;
      }
    }
  }, true);

  function isProtectedCombo(e) {
    if (e.key === 'F12') return true;
    if (!(e.metaKey || e.ctrlKey)) return false;
    var shift = e.shiftKey;
    switch ((e.key || '').toLowerCase()) {
      case 's':
      case 'u':
        return true;
      case 'i':
      case 'j':
      case 'c':
        return shift;
      default:
        return false;
    }
  }

  document.addEventListener('keydown', function (e) {
    if (isProtectedCombo(e)) {
      e.preventDefault();
      e.stopPropagation();
      return false;
    }
  }, true);

  var PROTECTED = new WeakSet();

  function protectImage(img) {
    if (img.dataset.protect === 'off') return;
    if (PROTECTED.has(img)) return;
    if (img.src && img.src.indexOf('data:') === 0) return;

    PROTECTED.add(img);
    img.setAttribute('draggable', 'false');

    var parent = img.parentNode;
    if (!parent || !parent.parentNode) return;

    var style = window.getComputedStyle(parent);
    if (style.position === 'static') {
      parent.style.position = 'relative';
    }

    if (!parent.querySelector('.media-shield')) {
      var shield = document.createElement('div');
      shield.className = 'media-shield';
      shield.setAttribute('aria-hidden', 'true');
      parent.insertBefore(shield, img);

      shield.addEventListener('click', function (ev) {
        var target = img.closest('a') || img;
        target.dispatchEvent(new MouseEvent('click', {
          bubbles: true,
          cancelable: true,
          view: window
        }));
      });
    }

    if (img.hasAttribute('data-watermark') && !parent.querySelector('.media-watermark')) {
      var wm = document.createElement('span');
      wm.className = 'media-watermark';
      wm.setAttribute('aria-hidden', 'true');
      wm.textContent = '© Mohamad Arifin Hasbi';
      parent.insertBefore(wm, img);
    }
  }

  var scheduled = false;

  function scan() {
    if (scheduled) return;
    scheduled = true;
    (window.requestAnimationFrame || function (fn) { setTimeout(fn, 0); })(function () {
      scheduled = false;
      var imgs = document.querySelectorAll('img');
      for (var i = 0; i < imgs.length; i++) {
        protectImage(imgs[i]);
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', scan);
  } else {
    scan();
  }

  if ('MutationObserver' in window) {
    var observer = new MutationObserver(function () { scan(); });
    observer.observe(document.documentElement, { childList: true, subtree: true });
  }

  window.__portfolioProtection = { scan: scan };
})();