/**
 * main.js — Client-side Multilingual Engine & UI Controller
 */

(function () {
  const STORAGE_KEY = 'portfolio_lang';
  const DEFAULT_LANG = 'id';

  /**
   * Get currently active language from localStorage or default
   */
  function getCurrentLang() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved === 'en' ? 'en' : DEFAULT_LANG;
    } catch (e) {
      return DEFAULT_LANG;
    }
  }

  /**
   * Update HTML document lang, title, and meta description
   */
  function updateDocumentMeta(lang) {
    const dict = window.translations ? window.translations[lang] : null;
    if (!dict) return;

    // Update html lang attribute
    document.documentElement.lang = lang;

    // Update page title
    if (dict.metaTitle) {
      document.title = dict.metaTitle;
    }

    // Update meta description
    const metaDescEl = document.querySelector('meta[name="description"]');
    if (metaDescEl && dict.metaDesc) {
      metaDescEl.setAttribute('content', dict.metaDesc);
    }
  }

  /**
   * Update active UI state for language switcher buttons
   */
  function updateSwitcherUI(lang) {
    const switcherBtns = document.querySelectorAll('.lang-switcher-btn');
    switcherBtns.forEach((btn) => {
      const btnLang = btn.getAttribute('data-lang');
      const isCurrent = btnLang === lang;
      
      btn.setAttribute('aria-pressed', isCurrent ? 'true' : 'false');

      if (isCurrent) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });
  }

  /**
   * Helper function to perform DOM text/attr replacement
   */
  function doTranslateDOM(dict, elements) {
    elements.forEach((el) => {
      // data-i18n -> textContent
      const i18nKey = el.getAttribute('data-i18n');
      if (i18nKey && dict[i18nKey] !== undefined) {
        el.textContent = dict[i18nKey];
      }

      // data-i18n-placeholder -> placeholder
      const placeholderKey = el.getAttribute('data-i18n-placeholder');
      if (placeholderKey && dict[placeholderKey] !== undefined) {
        el.setAttribute('placeholder', dict[placeholderKey]);
      }

      // data-i18n-aria -> aria-label
      const ariaKey = el.getAttribute('data-i18n-aria');
      if (ariaKey && dict[ariaKey] !== undefined) {
        el.setAttribute('aria-label', dict[ariaKey]);
      }

      // data-i18n-title -> title attribute
      const titleKey = el.getAttribute('data-i18n-title');
      if (titleKey && dict[titleKey] !== undefined) {
        el.setAttribute('title', dict[titleKey]);
      }
    });
  }

  /**
   * Translate all DOM elements with data-i18n attributes
   */
  function applyTranslations(lang, withAnimation = false) {
    const dict = window.translations ? window.translations[lang] : null;
    if (!dict) return;

    const elementsToTranslate = document.querySelectorAll(
      '[data-i18n], [data-i18n-placeholder], [data-i18n-aria], [data-i18n-title]'
    );

    if (withAnimation) {
      // 1. Fade out current text (150ms)
      elementsToTranslate.forEach((el) => {
        el.style.transition = 'opacity 150ms ease-in-out';
        el.style.opacity = '0';
      });

      setTimeout(() => {
        // 2. Replace text contents while invisible
        doTranslateDOM(dict, elementsToTranslate);
        updateDocumentMeta(lang);
        updateSwitcherUI(lang);

        // 3. Fade back in (150ms)
        elementsToTranslate.forEach((el) => {
          el.style.opacity = '1';
        });

        // Clean up inline styles after transition
        setTimeout(() => {
          elementsToTranslate.forEach((el) => {
            el.style.transition = '';
            el.style.opacity = '';
          });
        }, 150);
      }, 150);

    } else {
      // Immediate translation on initial page load (no flicker)
      doTranslateDOM(dict, elementsToTranslate);
      updateDocumentMeta(lang);
      updateSwitcherUI(lang);
    }
  }

  /**
   * Switch language handler
   */
  function switchLanguage(targetLang) {
    const current = getCurrentLang();
    try {
      localStorage.setItem(STORAGE_KEY, targetLang);
    } catch (e) {
      console.warn('Unable to save language preference to localStorage:', e);
    }

    if (targetLang === current) {
      updateSwitcherUI(targetLang);
      return;
    }

    applyTranslations(targetLang, true);
  }

  function initI18n() {
    const initialLang = getCurrentLang();
    applyTranslations(initialLang, false);

    // Attach click handlers to language switcher buttons
    const switcherBtns = document.querySelectorAll('.lang-switcher-btn');
    switcherBtns.forEach((btn) => {
      btn.removeEventListener('click', handleLangClick);
      btn.addEventListener('click', handleLangClick);
    });
  }

  function handleLangClick(e) {
    e.preventDefault();
    const btn = e.currentTarget;
    const targetLang = btn.getAttribute('data-lang');
    if (targetLang) {
      switchLanguage(targetLang);
    }
  }

  // Initialize on loading states and astro page transitions
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initI18n);
  } else {
    initI18n();
  }

  document.addEventListener('astro:page-load', initI18n);

  // Expose global API
  window.i18n = {
    getCurrentLang,
    switchLanguage,
    applyTranslations
  };
})();
