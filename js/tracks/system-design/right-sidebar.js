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
