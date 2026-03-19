function renderMain(route) {
  const page = cfg.pages[route.pageId];
  const main = document.getElementById('main-content');
  main.innerHTML = '';

  // ── Dynamic company page — must check BEFORE page lookup ───────
  if (route.companySlug) {
    const company = (window.COMPANY_DATA || {})[route.companySlug];
    if (company) {
      renderCompanyPage(main, company, route);
      return;
    }
    // slug given but not found — fall through to normal page
  }

  if (!page) {
    main.appendChild(el('p', 'content-p', `Page "${route.pageId}" not found in content.js.`));
    return;
  }

  // Breadcrumb
  const bc = el('div', 'breadcrumb');
  page.breadcrumb.forEach((crumb, i) => {
    if (i > 0) bc.appendChild(el('span', 'sep', '›'));
    const isLast = i === page.breadcrumb.length - 1;
    bc.appendChild(el('span', isLast ? 'current' : '', crumb));
  });
  main.appendChild(bc);

  // Banner (optional)
  if (page.banner) {
    const banner = el('div', 'banner');
    banner.appendChild(el('div', 'banner-title', page.banner.title));
    banner.appendChild(el('div', 'banner-sub',   page.banner.subtitle));
    main.appendChild(banner);
  }

  // Eyebrow
  if (page.eyebrow) main.appendChild(el('div', 'eyebrow', page.eyebrow));

  // Title
  main.appendChild(el('h1', '', page.title));

  // Lead
  if (page.lead) {
    const lead = el('p', 'lead');
    lead.innerHTML = page.lead;
    main.appendChild(lead);
  }

  // Content blocks
  page.content.forEach(block => main.appendChild(renderBlock(block, route)));

  // Next page button
  if (page.nextPage && cfg.pages[page.nextPage]) {
    const nav = el('div', 'page-nav');
    const btn = el('button', 'btn-next', `Next: ${cfg.pages[page.nextPage].title} →`);
    btn.addEventListener('click', () => navigateTo(route.trackId, page.nextPage));
    nav.appendChild(btn);
    main.appendChild(nav);
  }
}

// ── Right Sidebar ─────────────────────────────────────────────
