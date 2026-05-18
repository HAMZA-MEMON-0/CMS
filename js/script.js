(function () {
  const STORAGE_LANG_KEY = 'noor.lang';
  const STORAGE_THEME_KEY = 'noor.theme';
  const SUPPORTED_LANGS = ['en', 'ur', 'ar'];
  const RTL_LANGS = ['ur', 'ar'];
  const LANG_LABELS = { en: 'EN', ur: 'اردو', ar: 'العربية' };

  const translations = window.NOOR_TRANSLATIONS || {};

  function $(sel, root = document) {
    return root.querySelector(sel);
  }

  function $$(sel, root = document) {
    return Array.from(root.querySelectorAll(sel));
  }

  function setLanguage(lang) {
    if (!SUPPORTED_LANGS.includes(lang)) lang = 'en';
    const dict = translations[lang] || translations.en;
    const isRtl = RTL_LANGS.includes(lang);

    document.documentElement.lang = lang;
    document.documentElement.dir = isRtl ? 'rtl' : 'ltr';

    $$('[data-i18n]').forEach((el) => {
      const key = el.dataset.i18n;
      if (dict[key] !== undefined) {
        el.textContent = dict[key];
      }
    });

    $$('[data-i18n-placeholder]').forEach((el) => {
      const key = el.dataset.i18nPlaceholder;
      if (dict[key] !== undefined) {
        el.setAttribute('placeholder', dict[key]);
      }
    });

    if (dict.metaTitle) {
      document.title = dict.metaTitle;
    }

    const label = $('#langLabel');
    if (label) label.textContent = LANG_LABELS[lang];

    try {
      localStorage.setItem(STORAGE_LANG_KEY, lang);
    } catch (e) {}
  }

  function initLanguageSwitcher() {
    const wrapper = $('#languageSwitcher');
    if (!wrapper) return;
    const trigger = $('#langCurrent', wrapper);
    const options = $$('button[data-lang]', wrapper);

    trigger.addEventListener('click', (e) => {
      e.stopPropagation();
      wrapper.classList.toggle('open');
      trigger.setAttribute('aria-expanded', wrapper.classList.contains('open'));
    });

    options.forEach((btn) => {
      btn.addEventListener('click', () => {
        setLanguage(btn.dataset.lang);
        wrapper.classList.remove('open');
        trigger.setAttribute('aria-expanded', 'false');
      });
    });

    document.addEventListener('click', (e) => {
      if (!wrapper.contains(e.target)) {
        wrapper.classList.remove('open');
        trigger.setAttribute('aria-expanded', 'false');
      }
    });

    let saved = 'en';
    try {
      saved = localStorage.getItem(STORAGE_LANG_KEY) || 'en';
    } catch (e) {}
    setLanguage(saved);
  }

  function setTheme(theme) {
    if (theme !== 'dark' && theme !== 'light') theme = 'light';
    document.documentElement.setAttribute('data-theme', theme);
    try {
      localStorage.setItem(STORAGE_THEME_KEY, theme);
    } catch (e) {}
    const toggle = $('#themeToggle');
    if (toggle) {
      toggle.setAttribute('aria-label', theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
    }
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) {
      meta.setAttribute('content', theme === 'dark' ? '#07070D' : '#5B47E0');
    }
  }

  function initThemeToggle() {
    const toggle = $('#themeToggle');
    if (!toggle) return;

    toggle.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme') || 'light';
      setTheme(current === 'dark' ? 'light' : 'dark');
    });

    const current = document.documentElement.getAttribute('data-theme') || 'light';
    toggle.setAttribute('aria-label', current === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');

    if (window.matchMedia) {
      const mq = window.matchMedia('(prefers-color-scheme: dark)');
      const listener = (e) => {
        let stored = null;
        try { stored = localStorage.getItem(STORAGE_THEME_KEY); } catch (err) {}
        if (!stored) setTheme(e.matches ? 'dark' : 'light');
      };
      if (mq.addEventListener) mq.addEventListener('change', listener);
      else if (mq.addListener) mq.addListener(listener);
    }
  }

  function initMobileNav() {
    const hamburger = $('#hamburger');
    const mobileNav = $('#mobileNav');
    if (!hamburger || !mobileNav) return;

    function open() {
      hamburger.classList.add('active');
      mobileNav.classList.add('open');
      mobileNav.setAttribute('aria-hidden', 'false');
      hamburger.setAttribute('aria-expanded', 'true');
      hamburger.setAttribute('aria-label', 'Close menu');
      document.body.classList.add('no-scroll');
    }

    function close() {
      hamburger.classList.remove('active');
      mobileNav.classList.remove('open');
      mobileNav.setAttribute('aria-hidden', 'true');
      hamburger.setAttribute('aria-expanded', 'false');
      hamburger.setAttribute('aria-label', 'Open menu');
      document.body.classList.remove('no-scroll');
    }

    hamburger.addEventListener('click', () => {
      if (mobileNav.classList.contains('open')) close();
      else open();
    });

    $$('a', mobileNav).forEach((link) => link.addEventListener('click', close));

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && mobileNav.classList.contains('open')) close();
    });
  }

  function initStickyHeader() {
    const header = $('#header');
    if (!header) return;
    let ticking = false;

    function update() {
      header.classList.toggle('scrolled', window.scrollY > 40);
      ticking = false;
    }

    window.addEventListener('scroll', () => {
      if (!ticking) {
        window.requestAnimationFrame(update);
        ticking = true;
      }
    });
    update();
  }

  function initSearch() {
    const toggle = $('#searchToggle');
    const form = $('#searchForm');
    if (!toggle || !form) return;
    const input = $('.search-input', form);

    toggle.addEventListener('click', (e) => {
      e.stopPropagation();
      const open = form.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open);
      if (open && input) setTimeout(() => input.focus(), 100);
    });

    document.addEventListener('click', (e) => {
      if (!form.contains(e.target) && e.target !== toggle) {
        form.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const q = input.value.trim();
      if (!q) return;
      window.alert(`Search for: "${q}"\n\nIn the production build, this opens the full search results page.`);
      form.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  }

  function initScrollAnimations() {
    if (!('IntersectionObserver' in window)) {
      $$('.animate-on-scroll').forEach((el) => el.classList.add('animate-in'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -80px 0px' }
    );

    $$('.animate-on-scroll').forEach((el) => observer.observe(el));
  }

  function initBackToTop() {
    const btn = $('#backToTop');
    if (!btn) return;

    window.addEventListener('scroll', () => {
      btn.classList.toggle('visible', window.scrollY > 600);
    });

    btn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  function initActiveNav() {
    const links = $$('.nav-link');
    const sections = links
      .map((l) => {
        const href = l.getAttribute('href');
        if (href && href.startsWith('#') && href.length > 1) {
          return { link: l, section: document.getElementById(href.slice(1)) };
        }
        return null;
      })
      .filter((x) => x && x.section);

    if (!sections.length) return;

    window.addEventListener('scroll', () => {
      const offset = window.scrollY + 120;
      let active = sections[0];
      for (const s of sections) {
        if (s.section.offsetTop <= offset) active = s;
      }
      links.forEach((l) => {
        l.classList.remove('active');
        l.removeAttribute('aria-current');
      });
      if (active) {
        active.link.classList.add('active');
        active.link.setAttribute('aria-current', 'page');
      }
    });
  }

  function initNewsletter() {
    const form = $('#newsletterForm');
    if (!form) return;
    const input = $('input[type="email"]', form);
    const message = $('#newsletterMessage');

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const lang = document.documentElement.lang || 'en';
      const dict = translations[lang] || translations.en;
      const value = input.value.trim();

      if (!emailRegex.test(value)) {
        message.textContent = dict.newsletterError || 'Please enter a valid email.';
        message.dataset.state = 'error';
        message.style.color = '#FECACA';
        return;
      }

      message.textContent = dict.newsletterSuccess || 'Thanks for subscribing!';
      message.dataset.state = 'success';
      message.style.color = '#FFFFFF';
      input.value = '';
      input.blur();
    });
  }

  function initShareRail() {
    $$('.share-btn, .share-rail [data-share]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const type = btn.dataset.share;
        const url = encodeURIComponent(window.location.href);
        const title = encodeURIComponent(document.title);
        let target = null;

        switch (type) {
          case 'facebook':
            target = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
            break;
          case 'twitter':
            target = `https://twitter.com/intent/tweet?url=${url}&text=${title}`;
            break;
          case 'linkedin':
            target = `https://www.linkedin.com/sharing/share-offsite/?url=${url}`;
            break;
          case 'whatsapp':
            target = `https://wa.me/?text=${title}%20${url}`;
            break;
          case 'email':
            target = `mailto:?subject=${title}&body=${url}`;
            break;
          case 'copy':
            copyToClipboard(window.location.href);
            return;
        }

        if (target) {
          window.open(target, '_blank', 'noopener,noreferrer,width=600,height=500');
        }
      });
    });
  }

  function copyToClipboard(text) {
    const lang = document.documentElement.lang || 'en';
    const dict = translations[lang] || translations.en;
    const msg = dict.linkCopied || 'Link copied!';

    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(() => showToast(msg));
    } else {
      const ta = document.createElement('textarea');
      ta.value = text;
      ta.style.position = 'fixed';
      ta.style.opacity = '0';
      document.body.appendChild(ta);
      ta.select();
      try { document.execCommand('copy'); } catch (e) {}
      document.body.removeChild(ta);
      showToast(msg);
    }
  }

  function showToast(text) {
    let toast = $('#noorToast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'noorToast';
      Object.assign(toast.style, {
        position: 'fixed',
        bottom: '32px',
        left: '50%',
        transform: 'translateX(-50%) translateY(20px)',
        background: 'linear-gradient(135deg, #5B47E0 0%, #EC4899 100%)',
        color: 'white',
        padding: '12px 24px',
        borderRadius: '999px',
        fontSize: '0.875rem',
        fontWeight: '600',
        boxShadow: '0 16px 40px rgba(91, 71, 224, 0.4)',
        opacity: '0',
        transition: 'all 0.3s ease',
        zIndex: '9999',
        pointerEvents: 'none'
      });
      document.body.appendChild(toast);
    }
    toast.textContent = text;
    requestAnimationFrame(() => {
      toast.style.opacity = '1';
      toast.style.transform = 'translateX(-50%) translateY(0)';
    });
    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateX(-50%) translateY(20px)';
    }, 2400);
  }

  function initSmoothScroll() {
    $$('a[href^="#"]').forEach((link) => {
      link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');
        if (!href || href === '#') return;
        const target = document.querySelector(href);
        if (!target) return;
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    });
  }

  function initFooterYear() {
    const el = $('#footerYear');
    if (el) el.textContent = new Date().getFullYear();
  }

  function init() {
    initThemeToggle();
    initLanguageSwitcher();
    initMobileNav();
    initStickyHeader();
    initSearch();
    initScrollAnimations();
    initBackToTop();
    initActiveNav();
    initNewsletter();
    initShareRail();
    initSmoothScroll();
    initFooterYear();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
