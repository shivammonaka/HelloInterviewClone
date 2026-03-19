function navigateTo(trackId, pageId, extra) {
  if (extra?.companySlug) {
    location.hash = `${trackId}/company/${extra.companySlug}`;
  } else {
    location.hash = `${trackId}/${pageId}`;
  }
}

function renderPage(route, opts = {}) {
  document.title = cfg.pages[route.pageId]
    ? `${cfg.pages[route.pageId].title} | ${cfg.site.name}`
    : cfg.site.name;

  renderNavbar();
  renderSidebar(route);
  renderMain(route);
  renderRightSidebar(route);
  if (opts.preserveScroll) {
    const y = typeof opts.scrollY === 'number' ? opts.scrollY : window.scrollY;
    window.scrollTo(0, y);
  } else {
    window.scrollTo(0, 0);
  }
  setupScrollListeners();
  // For long-reading pages (system design), we update progress immediately.
  // For coding pages, avoid forcing a scroll update to prevent the bar from "flashing".
  if (route.trackId === 'system-design' && typeof window.onscroll === 'function') {
    window.onscroll();
  }
}

// ── Scroll: progress + TOC active ────────────────────────────
function setupScrollListeners() {
  window.onscroll = () => {
    // Reading progress
    const doc = document.documentElement;
    const pct = Math.round((doc.scrollTop / (doc.scrollHeight - doc.clientHeight)) * 100) || 0;
    const fill = document.getElementById('progress-fill');
    const label = document.getElementById('progress-pct');
    if (fill)  fill.style.width = pct + '%';
    if (label) label.textContent = pct + '% read';

    // TOC active item
    const tocItems = document.querySelectorAll('.toc-item[data-target]');
    let current = 0;
    tocItems.forEach((item, i) => {
      const target = document.getElementById(item.dataset.target);
      if (target && target.getBoundingClientRect().top < 120) current = i;
    });
    tocItems.forEach((item, i) => item.classList.toggle('active', i === current));
  };
}
