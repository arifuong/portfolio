/**
 * Theme Management Script — Portfolio Mohamad Arifin Hasbi
 * Handles Light/Dark mode state, localStorage persistence, and system theme preferences.
 */
(function () {
  const THEME_KEY = 'theme';

  function getSystemTheme() {
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  function getSavedTheme() {
    try {
      return localStorage.getItem(THEME_KEY);
    } catch (e) {
      return null;
    }
  }

  function applyTheme(theme) {
    const root = document.documentElement;
    const metaThemeColor = document.getElementById('theme-meta');
    
    if (theme === 'dark') {
      root.classList.add('dark');
      if (metaThemeColor) metaThemeColor.setAttribute('content', '#0B1120');
    } else {
      root.classList.remove('dark');
      if (metaThemeColor) metaThemeColor.setAttribute('content', '#ffffff');
    }
    
    // Update aria-label of all toggle buttons if DOM is ready
    const toggleBtns = document.querySelectorAll('.theme-toggle-btn');
    toggleBtns.forEach(btn => {
      btn.setAttribute('aria-label', theme === 'dark' ? 'Toggle Light Mode' : 'Toggle Dark Mode');
    });
  }

  function initTheme() {
    const savedTheme = getSavedTheme();
    let activeTheme = 'light';
    if (savedTheme === 'dark' || savedTheme === 'light') {
      activeTheme = savedTheme;
    } else {
      activeTheme = getSystemTheme();
    }
    applyTheme(activeTheme);
  }

  function toggleTheme() {
    const isDark = document.documentElement.classList.contains('dark');
    const newTheme = isDark ? 'light' : 'dark';
    applyTheme(newTheme);
    try {
      localStorage.setItem(THEME_KEY, newTheme);
    } catch (e) {
      console.warn('Unable to save theme preference to localStorage:', e);
    }
  }

  // Run initial theme check
  initTheme();

  // Expose global helper
  window.__portfolioTheme = {
    getSystemTheme,
    getSavedTheme,
    toggleTheme,
    initTheme,
    applyTheme
  };

  function bindEvents() {
    const toggleBtns = document.querySelectorAll('.theme-toggle-btn');
    toggleBtns.forEach(btn => {
      btn.removeEventListener('click', toggleTheme);
      btn.addEventListener('click', toggleTheme);
      
      // Update initial aria-label
      const isDark = document.documentElement.classList.contains('dark');
      btn.setAttribute('aria-label', isDark ? 'Toggle Light Mode' : 'Toggle Dark Mode');
    });
  }

  // Bind click listeners when DOM is interactive or complete
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', bindEvents);
  } else {
    bindEvents();
  }

  // Listen for system theme changes if user hasn't explicitly set a preference
  if (window.matchMedia) {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
      if (!getSavedTheme()) {
        const newTheme = e.matches ? 'dark' : 'light';
        applyTheme(newTheme);
      }
    });
  }

  // Development check for CV file presence
  if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
    fetch('/cv/Mohamad-Arifin-Hasbi-CV.pdf', { method: 'HEAD' })
      .then(response => {
        if (!response.ok) {
          console.warn('Development Warning: CV PDF file is missing at /cv/Mohamad-Arifin-Hasbi-CV.pdf');
        }
      })
      .catch(() => {
        console.warn('Development Warning: CV PDF file is missing at /cv/Mohamad-Arifin-Hasbi-CV.pdf');
      });
  }
})();
