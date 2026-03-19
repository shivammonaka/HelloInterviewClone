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

  if (route.trackId === 'system-design') {
    setupSystemDesignScrollListeners();
    if (typeof window.onscroll === 'function') window.onscroll();
  }
}
