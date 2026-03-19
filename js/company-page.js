function renderCompanyPage(main, company, route) {
  const scopeKey = 'company-focus-' + company.slug;
  const PAGE_SIZE = 50;

  // ── Breadcrumb ──────────────────────────────────────────────────
  const bc = el('div', 'breadcrumb');
  [
    { text: 'Coding',        onclick: () => navigateTo('coding', 'coding-home') },
    { text: 'Company Focus', onclick: () => navigateTo('coding', 'coding-company-focus') },
    { text: company.name,    current: true }
  ].forEach((crumb, i) => {
    if (i > 0) bc.appendChild(el('span', 'sep', '›'));
    const s = el('span', crumb.current ? 'current' : '');
    s.textContent = crumb.text;
    if (crumb.onclick) { s.style.cursor='pointer'; s.style.color='var(--accent-tx)'; s.addEventListener('click', crumb.onclick); }
    bc.appendChild(s);
  });
  main.appendChild(bc);
  main.appendChild(el('div', 'eyebrow', 'Company Focus'));

  // ── Title + last updated ─────────────────────────────────────────
  const titleRow = el('div', '');
  titleRow.style.cssText = 'display:flex;align-items:baseline;gap:14px;flex-wrap:wrap;margin-bottom:8px;';
  const h1 = el('h1', '', company.name);
  h1.style.margin = '0';
  titleRow.appendChild(h1);
  if (company.generatedAt) {
    const d = new Date(company.generatedAt);
    const fmt = d.toLocaleDateString('en-GB', { day:'numeric', month:'short', year:'numeric' });
    const badge = el('span', '');
    badge.textContent = '📅 Data as of ' + fmt;
    badge.style.cssText = 'font-size:12px;color:var(--text-tertiary);background:var(--bg-secondary);border:1px solid var(--border-light);border-radius:6px;padding:3px 10px;';
    titleRow.appendChild(badge);
  }
  main.appendChild(titleRow);

  // ── Section data ─────────────────────────────────────────────────
  const sec30  = company.sections?.thirty ?? company.questions ?? [];
  const sec3mo = company.sections?.three  ?? [];
  const sec6mo = company.sections?.six    ?? [];

  const windows = [
    { key: 'thirty', label: 'Last 30 Days',  desc: 'Most recently asked — highest signal.',      items: sec30  },
    { key: 'three',  label: 'Last 3 Months', desc: 'This quarter. Not in the 30-day list.',      items: sec3mo },
    { key: 'six',    label: 'Last 6 Months', desc: 'Older reports. Excludes 30-day & 3-month.', items: sec6mo },
  ].filter(w => w.items.length > 0);

  main.appendChild(el('hr', 'content-divider'));

  // ── State ─────────────────────────────────────────────────────────
  let activeTab  = windows[0]?.key || 'thirty';
  let activePage = 0;

  // ── Progress area — swaps when tab changes ────────────────────────
  const progressArea = el('div', '');
  main.appendChild(progressArea);

  // ── Questions header + reset button row ─────────────────────────
  const resetRow = el('div', '');
  resetRow.style.cssText = 'display:flex;align-items:center;justify-content:space-between;margin-bottom:4px;flex-wrap:wrap;gap:8px;';
  const questionsH2 = el('h2', 'content-h2', 'Questions');
  questionsH2.style.margin = '0';
  const resetBtnTop = el('button', '');
  resetBtnTop.textContent = 'Reset progress';
  resetBtnTop.style.cssText = 'padding:5px 12px;border-radius:7px;border:1px solid rgba(220,38,38,0.3);background:rgba(220,38,38,0.05);color:#dc2626;font-size:12px;cursor:pointer;';
  resetBtnTop.onmouseenter = () => { resetBtnTop.style.background = 'rgba(220,38,38,0.1)'; };
  resetBtnTop.onmouseleave = () => { resetBtnTop.style.background = 'rgba(220,38,38,0.05)'; };
  resetBtnTop.onclick = () => {
    // Only reset the active tab's questions
    const activeWindow = windows.find(w => w.key === activeTab);
    if (!activeWindow) return;
    // Clear scoped keys for this section title
    try {
      const sectionPrefix = ('hi:done:' + scopeKey + '|' + activeWindow.label).toLowerCase();
      Object.keys(localStorage)
        .filter(k => k.toLowerCase().startsWith(sectionPrefix))
        .forEach(k => localStorage.removeItem(k));
    } catch {}
    // Clear global URL keys for active tab's questions only
    try {
      activeWindow.items.forEach(q => {
        if (q.url) localStorage.removeItem('hi:done:url:' + q.url.trim().toLowerCase().replace(/\/+$/, ''));
      });
    } catch {}
    // Unmark rows in currently visible table
    document.querySelectorAll(`#main-content table[data-scope="${scopeKey}"] .row-done`).forEach(tr => {
      tr.classList.remove('row-done');
      const chk = tr.querySelector('input[type=checkbox]');
      if (chk) chk.checked = false;
    });
    // Refresh progress dashboard in-place
    const w = activeWindow;
    if (w) renderProgress(w);
    renderTabs();
    // Flash button
    resetBtnTop.textContent = '✓ Reset';
    resetBtnTop.style.color = '#059669';
    resetBtnTop.style.borderColor = 'rgba(5,150,105,0.3)';
    setTimeout(() => {
      resetBtnTop.textContent = 'Reset progress';
      resetBtnTop.style.color = '#dc2626';
      resetBtnTop.style.borderColor = 'rgba(220,38,38,0.3)';
    }, 1500);
  };
  resetRow.appendChild(questionsH2);
  resetRow.appendChild(resetBtnTop);
  main.appendChild(resetRow);

  // ── Tab strip ────────────────────────────────────────────────────

  const tabStrip = el('div', '');
  tabStrip.style.cssText = 'display:flex;gap:0;border-bottom:1px solid var(--border-light);margin-top:14px;';
  main.appendChild(tabStrip);

  // ── Content area ─────────────────────────────────────────────────
  const contentArea = el('div', '');
  contentArea.id = 'company-content-' + company.slug;
  main.appendChild(contentArea);

  // ── Render progress for active window ────────────────────────────
  function renderProgress(w) {
    progressArea.innerHTML = '';
    const h = el('h2', 'content-h2', 'Progress');
    progressArea.appendChild(h);
    progressArea.appendChild(renderBlock({
      type: 'progress-dashboard', variant: 'leetcode', scopeKey,
      title: w.label,
      subtitle: w.items.length + ' questions in this window.',
      sections: [{ title: w.label, items: w.items }]
    }, route));
  }

  // ── Render tab strip ──────────────────────────────────────────────
  function renderTabs() {
    tabStrip.innerHTML = '';
    windows.forEach(tw => {
      const isActive = tw.key === activeTab;
      const tab = el('div', '');
      tab.style.cssText = [
        'display:flex;align-items:center;gap:7px;padding:9px 18px;cursor:pointer;',
        'font-size:13px;font-weight:' + (isActive ? '600' : '400') + ';',
        'border-bottom:2px solid ' + (isActive ? 'var(--accent)' : 'transparent') + ';',
        'color:' + (isActive ? 'var(--accent-tx)' : 'var(--text-secondary)') + ';',
        'white-space:nowrap;user-select:none;'
      ].join('');

      const lbl = document.createTextNode(tw.label);
      tab.appendChild(lbl);

      // count badge removed per user request

      tab.addEventListener('click', () => {
        if (activeTab === tw.key) return;
        activeTab  = tw.key;
        activePage = 0;
        renderAll();
      });
      tabStrip.appendChild(tab);
    });
  }

  // ── Render question table + pagination ───────────────────────────
  function renderContent() {
    const w = windows.find(w => w.key === activeTab);
    if (!w) return;
    contentArea.innerHTML = '';

    // Description
    const desc = el('p', '');
    desc.textContent = w.desc;
    desc.style.cssText = 'font-size:13px;color:var(--text-tertiary);margin:12px 0 14px;';
    contentArea.appendChild(desc);

    // All questions — no cap — split into pages
    const totalPages = Math.ceil(w.items.length / PAGE_SIZE);
    const pageItems  = w.items.slice(activePage * PAGE_SIZE, (activePage + 1) * PAGE_SIZE);
    const pageOffset = activePage * PAGE_SIZE; // for correct row numbering

    // ── Pagination builder (shared above + below) ───────────────────
    function buildPagination(pos) {
      if (totalPages <= 1) return null;
      const pag = el('div', '');
      const isTop = pos === 'top';
      pag.style.cssText = 'display:flex;align-items:center;justify-content:center;gap:6px;' +
        (isTop ? 'margin-bottom:12px;' : 'margin-top:20px;margin-bottom:40px;') +
        'padding:10px 16px;border:1px solid var(--border-light);border-radius:10px;background:var(--bg-secondary);flex-wrap:wrap;';

      const prevBtn = el('button', '');
      prevBtn.textContent = '← Prev';
      prevBtn.style.cssText = 'font-size:12px;padding:6px 14px;border-radius:6px;border:1px solid var(--border-mid);background:var(--bg-secondary);color:' + (activePage===0?'var(--text-tertiary)':'var(--text-secondary)') + ';cursor:' + (activePage===0?'default':'pointer') + ';';
      if (activePage > 0) prevBtn.addEventListener('click', () => { activePage--; renderContent(); });
      pag.appendChild(prevBtn);

      const range = [];
      for (let p = 0; p < totalPages; p++) {
        if (p === 0 || p === totalPages-1 || Math.abs(p-activePage) <= 2) range.push(p);
        else if (range[range.length-1] !== '...') range.push('...');
      }
      range.forEach(p => {
        if (p === '...') { const d=el('span',''); d.textContent='…'; d.style.cssText='font-size:13px;color:var(--text-tertiary);padding:0 4px;'; pag.appendChild(d); return; }
        const pb = el('button','');
        pb.textContent = String(p+1);
        const isAct = p===activePage;
        pb.style.cssText = 'font-size:12px;padding:6px 12px;border-radius:6px;min-width:36px;border:1px solid '+(isAct?'var(--accent)':'var(--border-mid)')+';background:'+(isAct?'var(--accent)':'var(--bg-secondary)')+';color:'+(isAct?'#fff':'var(--text-secondary)')+';font-weight:'+(isAct?'600':'400')+';cursor:'+(isAct?'default':'pointer')+';';
        if (!isAct) pb.addEventListener('click', () => { activePage=p; renderContent(); });
        pag.appendChild(pb);
      });

      const nextBtn = el('button','');
      nextBtn.textContent = 'Next →';
      nextBtn.style.cssText = 'font-size:12px;padding:6px 14px;border-radius:6px;border:1px solid var(--border-mid);background:var(--bg-secondary);color:'+(activePage===totalPages-1?'var(--text-tertiary)':'var(--text-secondary)')+';cursor:'+(activePage===totalPages-1?'default':'pointer')+';';
      if (activePage < totalPages-1) nextBtn.addEventListener('click', () => { activePage++; renderContent(); });
      pag.appendChild(nextBtn);

      const info = el('div','');
      info.textContent = 'Page '+(activePage+1)+' of '+totalPages+'  ·  showing '+(activePage*PAGE_SIZE+1)+'–'+(activePage*PAGE_SIZE+pageItems.length)+' of '+w.items.length;
      info.style.cssText = 'width:100%;text-align:center;font-size:12px;color:var(--text-tertiary);margin-top:4px;';
      pag.appendChild(info);
      return pag;
    }

    // Pagination above
    const pagTop = buildPagination('top');
    if (pagTop) contentArea.appendChild(pagTop);

    contentArea.appendChild(renderBlock({
      type: 'question-table', scopeKey, hideTitle: true,
      pageOffset,
      sections: [{ title: w.label, items: pageItems }],
      onToggle: () => {
        const wCurrent = windows.find(w => w.key === activeTab);
        if (wCurrent) renderProgress(wCurrent);
      }
    }, route));

    // ── Pagination at bottom ────────────────────────────────────────
    if (totalPages > 1) {
      const pag = el('div', '');
      pag.style.cssText = 'display:flex;align-items:center;justify-content:center;gap:6px;margin-top:20px;margin-bottom:40px;padding:16px;border:1px solid var(--border-light);border-radius:10px;background:var(--bg-secondary);flex-wrap:wrap;';

      // Prev button
      const prevBtn = el('button', '');
      prevBtn.textContent = '← Prev';
      prevBtn.style.cssText = 'font-size:12px;padding:6px 14px;border-radius:6px;border:1px solid var(--border-mid);background:var(--bg-secondary);color:' + (activePage === 0 ? 'var(--text-tertiary)' : 'var(--text-secondary)') + ';cursor:' + (activePage === 0 ? 'default' : 'pointer') + ';';
      if (activePage > 0) {
        prevBtn.addEventListener('click', () => { activePage--; renderContent(); });
      }
      pag.appendChild(prevBtn);

      // Page numbers — show at most 7 around current page
      const range = [];
      for (let p = 0; p < totalPages; p++) {
        if (p === 0 || p === totalPages - 1 || Math.abs(p - activePage) <= 2) range.push(p);
        else if (range[range.length - 1] !== '...') range.push('...');
      }
      range.forEach(p => {
        if (p === '...') {
          const dots = el('span', '');
          dots.textContent = '…';
          dots.style.cssText = 'font-size:13px;color:var(--text-tertiary);padding:0 4px;';
          pag.appendChild(dots);
          return;
        }
        const pb = el('button', '');
        pb.textContent = String(p + 1);
        const isActive = p === activePage;
        pb.style.cssText = 'font-size:12px;padding:6px 12px;border-radius:6px;border:1px solid ' + (isActive ? 'var(--accent)' : 'var(--border-mid)') + ';background:' + (isActive ? 'var(--accent)' : 'var(--bg-secondary)') + ';color:' + (isActive ? '#fff' : 'var(--text-secondary)') + ';font-weight:' + (isActive ? '600' : '400') + ';cursor:' + (isActive ? 'default' : 'pointer') + ';min-width:36px;';
        if (!isActive) {
          pb.addEventListener('click', () => { activePage = p; renderContent(); });
        }
        pag.appendChild(pb);
      });

      // Next button
      const nextBtn = el('button', '');
      nextBtn.textContent = 'Next →';
      nextBtn.style.cssText = 'font-size:12px;padding:6px 14px;border-radius:6px;border:1px solid var(--border-mid);background:var(--bg-secondary);color:' + (activePage === totalPages-1 ? 'var(--text-tertiary)' : 'var(--text-secondary)') + ';cursor:' + (activePage === totalPages-1 ? 'default' : 'pointer') + ';';
      if (activePage < totalPages - 1) {
        nextBtn.addEventListener('click', () => { activePage++; renderContent(); });
      }
      pag.appendChild(nextBtn);

      // Page info
      const info = el('div', '');
      info.textContent = 'Page ' + (activePage+1) + ' of ' + totalPages + '  ·  ' + pageItems.length + ' of ' + w.items.length + ' questions';
      info.style.cssText = 'width:100%;text-align:center;font-size:12px;color:var(--text-tertiary);margin-top:6px;';
      pag.appendChild(info);

      contentArea.appendChild(pag);
    }
  }

  // ── Master render ─────────────────────────────────────────────────
  function renderAll() {
    const w = windows.find(w => w.key === activeTab);
    renderProgress(w);
    renderTabs();
    renderContent();
  }

  renderAll();

}


// ── Main Content ──────────────────────────────────────────────
