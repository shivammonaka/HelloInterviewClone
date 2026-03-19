// ─────────────────────────────────────────────────────────────
//  SYSTEM DESIGN TRACK
//  - renderSystemDesignMain(route)
//  - renderSystemDesignRightSidebar(route)
//  - setupSystemDesignScrollListeners()
// ─────────────────────────────────────────────────────────────

function renderSystemDesignMain(route) {
  const page = cfg.pages[route.pageId];
  const main = document.getElementById('main-content');
  main.innerHTML = '';

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

function renderSystemDesignRightSidebar(route) {
  const aside = document.getElementById('right-sidebar');
  aside.innerHTML = '';

  // Reading progress bar
  const progCard = el('div', 'progress-card');
  progCard.innerHTML = `
    <div class="progress-label">Reading Progress</div>
    <div class="progress-bar"><div class="progress-fill" id="progress-fill"></div></div>
    <div class="progress-pct" id="progress-pct">0% read</div>
  `;
  aside.appendChild(progCard);

  // TOC — built from h2/h3 blocks in the current page
  const page = cfg.pages[route.pageId];
  const headings = (page?.content || []).filter(b => b.type === 'heading2' || b.type === 'heading3');

  if (headings.length > 0) {
    aside.appendChild(el('div', 'toc-label', 'On This Page'));
    headings.forEach((h, i) => {
      const a = el('a', 'toc-item' + (i === 0 ? ' active' : ''), h.text);
      a.dataset.target = slugify(h.text);
      a.href = '#';
      a.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.getElementById(a.dataset.target);
        if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
      aside.appendChild(a);
    });
  }
}

function setupSystemDesignScrollListeners() {
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
