function renderCodingRightSidebar(route) {
  const aside = document.getElementById('right-sidebar');
  aside.innerHTML = '';

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
