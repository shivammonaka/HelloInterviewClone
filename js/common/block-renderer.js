function renderBlock(block, route) {
  function stableKey(parts) {
    return parts
      .filter(Boolean)
      .join('|')
      .toLowerCase()
      .replace(/\s+/g, ' ')
      .trim();
  }

  function storageKeyForQuestion(qKey) {
    return `hi:done:${qKey}`;
  }

  // Global key by URL — lets same question appear done across all sheets
  function globalUrlKey(url) {
    return url ? `hi:done:url:${url.trim().toLowerCase().replace(/\/+$/, '')}` : null;
  }

  function isDone(qKey, url) {
    try {
      if (localStorage.getItem(storageKeyForQuestion(qKey)) === '1') return true;
      const gk = globalUrlKey(url);
      if (gk && localStorage.getItem(gk) === '1') return true;
      return false;
    } catch { return false; }
  }

  function setDone(qKey, value, url) {
    try {
      localStorage.setItem(storageKeyForQuestion(qKey), value ? '1' : '0');
      // Also write/clear global URL key so all sheets stay in sync
      const gk = globalUrlKey(url);
      if (gk) localStorage.setItem(gk, value ? '1' : '0');
    } catch {}
  }

  const SOLUTION_PREFIX = 'hi:sol:';
  function solutionKey(qKey, lang) {
    return `${SOLUTION_PREFIX}${qKey}|${lang}`;
  }
  function getSolution(qKey, lang) {
    try { return localStorage.getItem(solutionKey(qKey, lang)) || ''; }
    catch { return ''; }
  }
  function setSolution(qKey, lang, code) {
    try {
      if (code.trim()) localStorage.setItem(solutionKey(qKey, lang), code);
      else localStorage.removeItem(solutionKey(qKey, lang));
    } catch {}
  }

  const SOL_LANGS = [
    { id: 'cpp', label: 'C++' },
    { id: 'java', label: 'Java' },
    { id: 'python', label: 'Python' },
    { id: 'js', label: 'JavaScript' }
  ];

  function openSolutionModal(mode, qKey, title) {
    const existing = document.getElementById('solution-modal-backdrop');
    if (existing) existing.remove();

    const backdrop = document.createElement('div');
    backdrop.id = 'solution-modal-backdrop';
    backdrop.className = 'modal-backdrop';

    const modal = document.createElement('div');
    modal.className = 'modal';

    const header = document.createElement('div');
    header.className = 'modal-header';

    const hTitle = document.createElement('div');
    hTitle.className = 'modal-title';
    hTitle.textContent = (mode === 'edit' ? 'Add solution — ' : 'View solution — ') + title;

    const hActions = document.createElement('div');
    hActions.className = 'modal-actions';

    const select = document.createElement('select');
    SOL_LANGS.forEach(l => {
      const opt = document.createElement('option');
      opt.value = l.id;
      opt.textContent = l.label;
      select.appendChild(opt);
    });

    const btnClose = document.createElement('button');
    btnClose.type = 'button';
    btnClose.className = 'btn-small';
    btnClose.textContent = 'Close';

    const btnSave = document.createElement('button');
    btnSave.type = 'button';
    btnSave.className = 'btn-small primary';
    btnSave.textContent = 'Save';
    if (mode !== 'edit') btnSave.style.display = 'none';

    hActions.appendChild(select);
    hActions.appendChild(btnClose);
    hActions.appendChild(btnSave);

    header.appendChild(hTitle);
    header.appendChild(hActions);

    const body = document.createElement('div');
    const textarea = document.createElement('textarea');
    body.appendChild(textarea);

    modal.appendChild(header);
    modal.appendChild(body);
    backdrop.appendChild(modal);
    document.body.appendChild(backdrop);

    const loadLang = () => {
      const lang = select.value;
      textarea.value = getSolution(qKey, lang);
      textarea.readOnly = mode !== 'edit';
      textarea.style.opacity = mode === 'edit' ? '1' : '0.8';
    };

    select.addEventListener('change', loadLang);
    loadLang();

    btnSave.onclick = () => {
      const lang = select.value;
      setSolution(qKey, lang, textarea.value);
      alert('Solution saved for ' + title + ' (' + SOL_LANGS.find(l => l.id === lang)?.label + ').');
    };
    btnClose.onclick = () => backdrop.remove();
    backdrop.addEventListener('click', (e) => {
      if (e.target === backdrop) backdrop.remove();
    });
  }

  function renderQuestion(li, q) {
    if (typeof q === 'string') {
      li.innerHTML = q;
      return;
    }

    const name = q.name ?? q.title ?? 'Question';
    const url = q.url ?? q.href ?? '#';
    const diff = (q.difficulty || '').toLowerCase();

    const wrap = el('span', 'q');
    const a = document.createElement('a');
    a.href = url;
    a.target = '_blank';
    a.rel = 'noreferrer';
    a.textContent = name;
    wrap.appendChild(a);

    if (diff) {
      const pill = el('span', `pill ${diff}`, q.difficulty);
      wrap.appendChild(pill);
    }

    li.appendChild(wrap);
  }

  switch (block.type) {
    case 'divider':
      return el('hr', 'content-divider');

    case 'paragraph': {
      const p = el('p', 'content-p');
      p.innerHTML = block.text;
      return p;
    }

    case 'heading2': {
      const h = el('h2', 'content-h2', block.text);
      h.id = slugify(block.text);
      return h;
    }

    case 'heading3': {
      const h = el('h3', 'content-h3', block.text);
      h.id = slugify(block.text);
      return h;
    }

    case 'ordered-list': {
      const ol = el('ol', 'content-ol');
      block.items.forEach(i => { const li = el('li'); renderQuestion(li, i); ol.appendChild(li); });
      return ol;
    }

    case 'unordered-list': {
      const ul = el('ul', 'content-ul');
      block.items.forEach(i => { const li = el('li'); renderQuestion(li, i); ul.appendChild(li); });
      return ul;
    }

    case 'infobox': {
      const box = el('div', 'info-box');
      box.appendChild(el('div', 'info-box-title', `${block.icon} ${block.title}`));
      block.content.forEach(inner => box.appendChild(renderBlock(inner, route)));
      return box;
    }

    case 'grid-cards': {
      const wrap = el('div', 'grid-card-wrap');
      wrap.appendChild(el('div', 'grid-card-title', block.title));
      const grid = el('div', 'grid-card-grid');
      block.cards.forEach(card => {
        const item = el('div', 'grid-card-item');
        item.appendChild(el('div', 'grid-card-item-title', card.title));
        item.appendChild(el('div', 'grid-card-item-body',  card.body));
        if (card.pageId && cfg.pages[card.pageId]) {
          item.classList.add('clickable');
          item.addEventListener('click', () => navigateTo(card.trackId || route.trackId, card.pageId));
        }
        grid.appendChild(item);
      });
      wrap.appendChild(grid);
      return wrap;
    }

    case 'accordion': {
      const wrap = el('div', 'acc');
      (block.sections || []).forEach((sec, idx) => {
        const details = document.createElement('details');
        details.className = 'acc-item';
        if (sec.openByDefault || (idx === 0 && block.openFirst)) details.open = true;

        const summary = document.createElement('summary');
        summary.className = 'acc-summary';
        const left = el('div', '');
        left.innerHTML = sec.title || `Section ${idx + 1}`;
        const right = el('div', 'acc-meta', `${(sec.items?.length || 0)} questions <span class="acc-chevron">▾</span>`);
        summary.appendChild(left);
        summary.appendChild(right);

        const body = el('div', 'acc-body');
        if (sec.description) body.appendChild(el('p', 'content-p', sec.description));
        if (sec.items?.length) {
          const ul = el('ul', 'content-ul');
          sec.items.forEach(i => { const li = el('li'); renderQuestion(li, i); ul.appendChild(li); });
          body.appendChild(ul);
        }

        details.appendChild(summary);
        details.appendChild(body);
        wrap.appendChild(details);
      });
      return wrap;
    }

    case 'company-picker': {
      const companyData = window.COMPANY_DATA || {};
      const allCompanies = Object.values(companyData).sort((a, b) => a.name.localeCompare(b.name));

      const RECENT_KEY = 'hi:recent-companies';
      const MAX_RECENT = 6;

      function getRecent() {
        try { return JSON.parse(localStorage.getItem(RECENT_KEY) || '[]'); } catch { return []; }
      }
      function addRecent(slug) {
        try {
          const list = [slug, ...getRecent().filter(s => s !== slug)].slice(0, MAX_RECENT);
          localStorage.setItem(RECENT_KEY, JSON.stringify(list));
        } catch {}
      }

      const container = document.createElement('div');

      // ── Picker row ───────────────────────────────────────────
      const pickerRow = el('div', 'picker');
      const labelEl = document.createElement('label');
      labelEl.textContent = 'Target company';

      // Dropdown
      const select = document.createElement('select');
      const ph = document.createElement('option');
      ph.value = ''; ph.textContent = 'Select a company…'; ph.disabled = true; ph.selected = true;
      select.appendChild(ph);
      allCompanies.forEach(c => {
        const o = document.createElement('option'); o.value = c.slug; o.textContent = c.name;
        select.appendChild(o);
      });

      // Search with suggestions
      const searchWrap = el('div', 'picker-search');
      const input = document.createElement('input');
      input.placeholder = 'Search 662 companies…';
      input.autocomplete = 'off';
      const suggest = el('div', 'suggest');
      searchWrap.appendChild(input);
      searchWrap.appendChild(suggest);

      // Go button
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.textContent = 'Open Sheet →';

      pickerRow.appendChild(labelEl);
      pickerRow.appendChild(select);
      pickerRow.appendChild(searchWrap);
      pickerRow.appendChild(btn);
      container.appendChild(pickerRow);

      // ── Navigate to company page ─────────────────────────────
      function goToCompany(slug) {
        if (!slug || !companyData[slug]) return;
        addRecent(slug);
        renderRecentPills(); // refresh pills after visiting
        navigateTo('coding', 'coding-company-focus', { companySlug: slug });
      }

      // ── Recent pills area (below picker row) ─────────────────
      const recentArea = document.createElement('div');
      recentArea.style.cssText = 'margin-top:12px;min-height:0;';
      container.appendChild(recentArea);

      function renderRecentPills() {
        recentArea.innerHTML = '';
        const recent = getRecent().map(s => companyData[s]).filter(Boolean);
        if (!recent.length) return;

        const label = el('div', '');
        label.style.cssText = 'font-size:10.5px;font-weight:700;text-transform:uppercase;letter-spacing:0.07em;color:var(--text-tertiary);margin-bottom:8px;';
        label.textContent = 'Recently viewed';
        recentArea.appendChild(label);

        const row = el('div', '');
        row.style.cssText = 'display:flex;flex-wrap:wrap;gap:6px;';
        recent.forEach(c => {
          const pill = el('button', '');
          pill.textContent = c.name;
          pill.style.cssText = 'font-size:12px;font-weight:500;padding:5px 12px;border-radius:999px;border:1px solid var(--border-mid);background:var(--bg-secondary);color:var(--text-secondary);cursor:pointer;transition:background 0.12s,color 0.12s;';
          pill.onmouseenter = () => { pill.style.background = 'var(--accent-light)'; pill.style.color = 'var(--accent-text)'; pill.style.borderColor = 'rgba(99,102,241,0.3)'; };
          pill.onmouseleave = () => { pill.style.background = 'var(--bg-secondary)'; pill.style.color = 'var(--text-secondary)'; pill.style.borderColor = 'var(--border-mid)'; };
          pill.addEventListener('click', () => goToCompany(c.slug));
          row.appendChild(pill);
        });
        recentArea.appendChild(row);
      }

      renderRecentPills();

      // ── Search suggestions (dropdown, search only) ────────────
      const filterSuggestions = () => {
        const q = input.value.trim().toLowerCase();
        suggest.innerHTML = '';
        if (!q) { suggest.classList.remove('open'); return; }
        const matches = allCompanies.filter(c => c.name.toLowerCase().includes(q)).slice(0, 14);
        if (!matches.length) {
          suggest.appendChild(el('div', 'suggest-item', '<span class="suggest-muted">No matches</span>'));
          suggest.classList.add('open');
          return;
        }
        matches.forEach(c => {
          const row = el('div', 'suggest-item', '');
          const qCount = c.questions?.length ?? ((c.sections?.thirty?.length ?? 0) + (c.sections?.three?.length ?? 0) + (c.sections?.six?.length ?? 0));
          row.innerHTML = `<span>${c.name}</span><span class="suggest-muted">${Math.min(qCount, 50)} questions</span>`;
          row.addEventListener('mousedown', e => {
            e.preventDefault();
            input.value = c.name;
            select.value = c.slug;
            suggest.classList.remove('open');
            // just selects — button navigates
          });
          suggest.appendChild(row);
        });
        suggest.classList.add('open');
      };

      input.addEventListener('input', filterSuggestions);
      input.addEventListener('focus', filterSuggestions);
      input.addEventListener('blur', () => setTimeout(() => suggest.classList.remove('open'), 150));
      input.addEventListener('keydown', e => {
        if (e.key === 'Enter') {
          const first = suggest.querySelector('.suggest-item');
          if (first) first.dispatchEvent(new MouseEvent('mousedown', { bubbles: true }));
        }
      });

      select.addEventListener('change', () => { /* selection only */ });
      btn.addEventListener('click', () => goToCompany(select.value));

      return container;
    }

    case 'progress-dashboard': {
      // Wrap in a container so onToggle can re-render it in-place
      const dashContainer = el('div', '__dash');
      function buildDash() {
        dashContainer.innerHTML = '';
        const inner = buildDashInner();
        dashContainer.appendChild(inner);
      }
      // Expose refresh so external callers (onToggle) can call dashContainer.__refresh()
      dashContainer.__refresh = buildDash;
      function buildDashInner() {
      // Expects: { scopeKey, sections: [{title, items:[q...]}, ...] }
      const scopeKey = block.scopeKey || route.pageId;
      const sections = block.sections || [];
      const all = [];
      sections.forEach(sec => (sec.items || []).forEach(q => all.push({ sec: sec.title, q })));

      let done = 0;
      let total = 0;
      const byDiff = { easy: { done: 0, total: 0 }, medium: { done: 0, total: 0 }, hard: { done: 0, total: 0 } };

      all.forEach(({ sec, q }) => {
        if (typeof q === 'string') return;
        const qKey = stableKey([scopeKey, sec, q.name || q.title, q.url]);
        const diff = (q.difficulty || '').toLowerCase();
        total += 1;
        if (byDiff[diff]) byDiff[diff].total += 1;
        if (isDone(qKey, q.url)) {
          done += 1;
          if (byDiff[diff]) byDiff[diff].done += 1;
        }
      });

      const pct = total ? Math.round((done / total) * 100) : 0;

      if (block.variant === 'leetcode') {
        const easyDone = byDiff.easy.done;
        const easyTotal = byDiff.easy.total;
        const medDone = byDiff.medium.done;
        const medTotal = byDiff.medium.total;
        const hardDone = byDiff.hard.done;
        const hardTotal = byDiff.hard.total;

        // SVG ring segmented by totals, with solved overlay in solid color.
        const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svg.setAttribute('viewBox', '0 0 42 42');
        svg.setAttribute('class', 'lc-ring');

        const mkCircle = (dash, color, width = 3, linecap = 'butt') => {
          const c = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
          c.setAttribute('cx', '21');
          c.setAttribute('cy', '21');
          c.setAttribute('r', '15.915');
          c.setAttribute('fill', 'transparent');
          c.setAttribute('stroke', color);
          c.setAttribute('stroke-width', String(width));
          c.setAttribute('stroke-dasharray', dash);
          c.setAttribute('stroke-dashoffset', '25');
          c.setAttribute('stroke-linecap', linecap);
          c.setAttribute('transform', 'rotate(-90 21 21)');
          return c;
        };

        const addSegments = (vals, colors, width, linecap) => {
          let off = 0;
          vals.forEach((v, i) => {
            const portion = total ? (v / total) * 100 : 0;
            if (portion <= 0) return;
            const c = mkCircle(`${portion} ${100 - portion}`, colors[i], width, linecap);
            c.setAttribute('stroke-dashoffset', String(25 - off));
            svg.appendChild(c);
            off += portion;
          });
        };

        // Background ring
        svg.appendChild(mkCircle(`100 0`, 'rgba(0,0,0,0.08)', 3, 'butt'));
        // Totals (very light) by difficulty
        addSegments(
          [easyTotal, medTotal, hardTotal],
          ['rgba(16,185,129,0.16)', 'rgba(245,158,11,0.18)', 'rgba(239,68,68,0.16)'],
          3,
          'butt'
        );
        // Solved overlay (solid) by difficulty
        addSegments(
          [easyDone, medDone, hardDone],
          ['rgba(16,185,129,0.92)', 'rgba(245,158,11,0.92)', 'rgba(239,68,68,0.92)'],
          3,
          'butt'
        );

        // Center text: "done/total" with split sizes + "Solved"
        const center = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        center.setAttribute('x', '21');
        center.setAttribute('y', '19.5');
        center.setAttribute('text-anchor', 'middle');
        center.setAttribute('dominant-baseline', 'middle');

        const tDone = document.createElementNS('http://www.w3.org/2000/svg', 'tspan');
        tDone.setAttribute('style', 'font-size:6px;font-weight:900;fill:#111');
        tDone.textContent = String(done);
        center.appendChild(tDone);

        const tSlash = document.createElementNS('http://www.w3.org/2000/svg', 'tspan');
        tSlash.setAttribute('style', 'font-size:4px;font-weight:800;fill:#777');
        tSlash.textContent = `/${total}`;
        center.appendChild(tSlash);

        svg.appendChild(center);

        const solved = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        solved.setAttribute('x', '21');
        solved.setAttribute('y', '27.8');
        solved.setAttribute('text-anchor', 'middle');
        solved.setAttribute('style', 'font-size:3.5px;font-weight:900;fill:#777;letter-spacing:0.10em;text-transform:uppercase');
        solved.textContent = `Solved`;
        svg.appendChild(solved);

        const wrap = el('div', 'lc');
        const left = el('div', 'lc-left');
        left.appendChild(svg);

        const right = el('div', 'lc-right');
        const meta = el('div', 'lc-meta');
        meta.appendChild(el('div', 'lc-pct', `${pct}%`));
        meta.appendChild(el('div', 'lc-solvedline', `Solved: ${done}/${total}`));
        right.appendChild(meta);

        const card = (label, klass, v) => {
          const c = el('div', 'lc-card');
          c.appendChild(el('div', `lc-k ${klass}`, label));
          c.appendChild(el('div', 'lc-v', v));
          return c;
        };
        right.appendChild(card('Easy', 'easy', `${easyDone}/${easyTotal}`));
        right.appendChild(card('Med.', 'medium', `${medDone}/${medTotal}`));
        right.appendChild(card('Hard', 'hard', `${hardDone}/${hardTotal}`));

        wrap.appendChild(left);
        wrap.appendChild(right);
        return wrap;
      }

      const wrap = el('div', 'dash');
      const left = el('div', 'dash-left');
      left.appendChild(el('div', 'dash-title', block.title || 'Progress'));
      left.appendChild(el('div', 'dash-sub', block.subtitle || `${done}/${total} completed (${pct}%)`));

      const metrics = el('div', 'dash-metrics');
      const mk = (k, v, s) => {
        const m = el('div', 'metric');
        m.appendChild(el('div', 'metric-k', k));
        m.appendChild(el('div', 'metric-v', v));
        if (s) m.appendChild(el('div', 'metric-s', s));
        return m;
      };
      metrics.appendChild(mk('Completed', `${done}/${total}`, `${pct}%`));
      metrics.appendChild(mk('Easy', `${byDiff.easy.done}/${byDiff.easy.total}`, `${byDiff.easy.total - byDiff.easy.done} left`));
      metrics.appendChild(mk('Medium', `${byDiff.medium.done}/${byDiff.medium.total}`, `${byDiff.medium.total - byDiff.medium.done} left`));
      metrics.appendChild(mk('Hard', `${byDiff.hard.done}/${byDiff.hard.total}`, `${byDiff.hard.total - byDiff.hard.done} left`));

      const pie = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      pie.setAttribute('viewBox', '0 0 42 42');
      pie.setAttribute('class', 'pie');

      const mkRing = (dash, color) => {
        const c = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        c.setAttribute('cx', '21');
        c.setAttribute('cy', '21');
        c.setAttribute('r', '15.915');
        c.setAttribute('fill', 'transparent');
        c.setAttribute('stroke', color);
        c.setAttribute('stroke-width', '7');
        c.setAttribute('stroke-dasharray', dash);
        c.setAttribute('stroke-dashoffset', '25');
        c.setAttribute('transform', 'rotate(-90 21 21)');
        return c;
      };

      // LeetCode-style donut: segments sized by totals, with "done" vs "left" per difficulty.
      const segs = [];
      const pushSeg = (label, count, color) => {
        if (count > 0) segs.push({ label, count, color });
      };
      const easyDone = byDiff.easy.done;
      const easyLeft = byDiff.easy.total - byDiff.easy.done;
      const medDone = byDiff.medium.done;
      const medLeft = byDiff.medium.total - byDiff.medium.done;
      const hardDone = byDiff.hard.done;
      const hardLeft = byDiff.hard.total - byDiff.hard.done;

      pushSeg('Easy done', easyDone, 'rgba(16,185,129,0.88)');
      pushSeg('Easy left', easyLeft, 'rgba(16,185,129,0.18)');
      pushSeg('Medium done', medDone, 'rgba(245,158,11,0.92)');
      pushSeg('Medium left', medLeft, 'rgba(245,158,11,0.20)');
      pushSeg('Hard done', hardDone, 'rgba(239,68,68,0.88)');
      pushSeg('Hard left', hardLeft, 'rgba(239,68,68,0.18)');

      // subtle background ring
      pie.appendChild(mkRing(`100 0`, 'rgba(0,0,0,0.06)'));

      let offset = 0;
      segs.forEach(s => {
        const portion = total ? (s.count / total) * 100 : 0;
        if (portion <= 0) return;
        const c = mkRing(`${portion} ${100 - portion}`, s.color);
        c.setAttribute('stroke-dashoffset', String(25 - offset));
        pie.appendChild(c);
        offset += portion;
      });

      const txt = document.createElementNS('http://www.w3.org/2000/svg', 'text');
      txt.setAttribute('x', '21');
      txt.setAttribute('y', '23');
      txt.setAttribute('text-anchor', 'middle');
      txt.setAttribute('class', 'pie-label');
      txt.textContent = `${pct}%`;
      pie.appendChild(txt);

      wrap.appendChild(left);
      wrap.appendChild(metrics);
      wrap.appendChild(pie);
      return wrap;
      } // end buildDashInner
      buildDash();
      return dashContainer;
    }

    case 'question-table': {
      // Expects: { scopeKey, sections:[{title, items:[{name,url,difficulty},...]}, ...] }
      const scopeKey = block.scopeKey || route.pageId;
      const out = el('div', '');

      (block.sections || []).forEach(sec => {
        if (!block.hideTitle) out.appendChild(el('h2', 'content-h2', sec.title));

        const table = document.createElement('table');
        table.className = 'tbl';
        table.dataset.scope = scopeKey;
        // Sort state for this table
        let sortDir = 0; // 0=original, 1=easy→hard, -1=hard→easy
        const origItems = [...(sec.items || []).filter(q => typeof q !== 'string')];

        table.innerHTML = `
          <thead>
            <tr>
              <th class="col-check"></th>
              <th class="col-num">#</th>
              <th>Question</th>
              <th class="col-diff col-sortable" id="diff-th-${Math.random().toString(36).slice(2)}">
                Difficulty <span class="sort-icon">⇅</span>
              </th>
              <th class="col-sol">Solution</th>
            </tr>
          </thead>
        `;

        // Wire sort click
        const diffTh = table.querySelector('.col-sortable');
        const sortIcon = diffTh.querySelector('.sort-icon');
        const diffOrder = { easy: 0, medium: 1, hard: 2 };
        diffTh.style.cursor = 'pointer';
        diffTh.style.userSelect = 'none';

        const rebuildRows = (items) => {
          tb.innerHTML = '';
          buildRows(items);
        };

        diffTh.addEventListener('click', () => {
          sortDir = sortDir === 1 ? -1 : sortDir === -1 ? 0 : 1;
          sortIcon.textContent = sortDir === 1 ? ' ↑' : sortDir === -1 ? ' ↓' : ' ⇅';
          diffTh.style.color = sortDir !== 0 ? 'var(--accent-tx)' : '';
          if (sortDir === 0) {
            rebuildRows(origItems);
          } else {
            const sorted = [...origItems].sort((a, b) => {
              const da = diffOrder[(a.difficulty||'').toLowerCase()] ?? 1;
              const db = diffOrder[(b.difficulty||'').toLowerCase()] ?? 1;
              return sortDir === 1 ? da - db : db - da;
            });
            rebuildRows(sorted);
          }
        });

        const tb = document.createElement('tbody');

        function buildRows(items) {
          items.forEach((q, rowIdx) => {
          if (typeof q === 'string') return;
          const qKey = stableKey([scopeKey, sec.title, q.name || q.title, q.url]);
          const tr = document.createElement('tr');
          const doneNow = isDone(qKey, q.url);
          if (doneNow) tr.classList.add('row-done');

          const tdC = document.createElement('td');
          tdC.className = 'col-check';
          const chk = document.createElement('input');
          chk.type = 'checkbox';
          chk.className = 'chk';
          chk.checked = doneNow;
          const toggle = () => {
            const next = !isDone(qKey, q.url);
            setDone(qKey, next, q.url);
            chk.checked = next;
            tr.classList.toggle('row-done', next);
            // Refresh any progress dashboards in the same page
            if (typeof block.onToggle === 'function') {
              block.onToggle();
            } else {
              // For non-company pages: find and refresh all dashboards in main
              document.querySelectorAll('#main-content .__dash').forEach(d => {
                if (typeof d.__refresh === 'function') d.__refresh();
              });
            }
          };
          chk.addEventListener('change', (e) => { e.stopPropagation(); toggle(); });
          tdC.appendChild(chk);

          // Row number (1-based within section)
          const tdNum = document.createElement('td');
          tdNum.className = 'col-num';
          tdNum.style.cssText = 'font-size:11px;color:var(--text-tertiary);font-variant-numeric:tabular-nums;';
          tdNum.textContent = (block.pageOffset || 0) + rowIdx + 1;

          const tdQ = document.createElement('td');
          tdQ.className = 'col-link';
          const a = document.createElement('a');
          a.href = q.url || '#';
          a.target = '_blank';
          a.rel = 'noreferrer';
          a.textContent = q.name || q.title || 'Question';
          tdQ.appendChild(a);

          const tdD = document.createElement('td');
          tdD.className = 'col-diff';
          const diff = (q.difficulty || '').toLowerCase();
          const pill = el('span', `pill ${diff}`, q.difficulty || '');
          tdD.appendChild(pill);

          const tdS = document.createElement('td');
          tdS.className = 'col-sol';
          const hasSol = !!q.solutionCode;
          const actions = document.createElement('div');
          actions.className = 'sol-actions';

          // ── storage key per question ──────────────────────────
          const solKey = (lang) => `hi:sol:${q.url || q.name}:${lang}`;
          const LANGS = ['C++', 'Java', 'Python', 'JavaScript', 'Go', 'Rust'];

          // seed from content.js solutionCode (C++ assumed) if nothing stored yet
          if (hasSol && !localStorage.getItem(solKey('C++'))) {
            try { localStorage.setItem(solKey('C++'), q.solutionCode); } catch {}
          }

          function getSavedLangs() {
            return LANGS.filter(l => {
              try { return !!localStorage.getItem(solKey(l)); } catch { return false; }
            });
          }

          function hasSavedAnySol() { return getSavedLangs().length > 0; }

          // ── View button ───────────────────────────────────────
          const viewBtn = document.createElement('button');
          viewBtn.type = 'button';
          viewBtn.className = 'sol-btn';
          viewBtn.textContent = hasSavedAnySol() ? '✓ View' : 'View';
          if (!hasSavedAnySol()) viewBtn.style.opacity = '0.55';

          actions.appendChild(viewBtn);
          tdS.appendChild(actions);

          tr.appendChild(tdC);
          tr.appendChild(tdNum);
          tr.appendChild(tdQ);
          tr.appendChild(tdD);
          tr.appendChild(tdS);

          // ── Expandable solution row (inline preview) ──────────
          const solTr = document.createElement('tr');
          solTr.className = 'sol-row';
          const solTd = document.createElement('td');
          solTd.colSpan = 5;
          solTd.style.padding = '0 12px 12px 54px';
          solTr.appendChild(solTd);
          solTr.style.display = 'none';

          // ── MODAL HELPERS ─────────────────────────────────────
          // Map language name → CodeMirror mode
          function cmMode(lang) {
            const m = { 'C++':'text/x-c++src', 'Java':'text/x-java', 'Python':'python',
                        'JavaScript':'javascript', 'Go':'text/x-go', 'Rust':'rust' };
            return m[lang] || 'text/plain';
          }

          function openAddModal() {
            const bd = document.createElement('div');
            bd.className = 'modal-backdrop';
            const box = document.createElement('div');
            box.className = 'modal add-modal';

            // ── Header ────────────────────────────────────────────
            const hdr = document.createElement('div');
            hdr.className = 'modal-header';
            const titleEl = document.createElement('div');
            titleEl.className = 'modal-title';
            titleEl.textContent = `Add solution — ${q.name || q.title}`;
            const acts = document.createElement('div');
            acts.className = 'modal-actions';

            // Mode toggle: Code | JSON import
            let addMode = 'code';
            const modeCodeBtn = document.createElement('button');
            modeCodeBtn.className = 'btn-small primary';
            modeCodeBtn.textContent = 'Code';
            const modeJsonBtn = document.createElement('button');
            modeJsonBtn.className = 'btn-small';
            modeJsonBtn.textContent = 'JSON import';

            const langSel = document.createElement('select');
            LANGS.forEach(l => {
              const o = document.createElement('option'); o.value = l; o.textContent = l;
              langSel.appendChild(o);
            });

            const cancelBtn = document.createElement('button');
            cancelBtn.className = 'btn-small'; cancelBtn.textContent = 'Cancel';
            const saveBtn = document.createElement('button');
            saveBtn.className = 'btn-small primary'; saveBtn.textContent = 'Save';

            acts.appendChild(modeCodeBtn);
            acts.appendChild(modeJsonBtn);
            acts.appendChild(langSel);
            acts.appendChild(cancelBtn);
            acts.appendChild(saveBtn);
            hdr.appendChild(titleEl);
            hdr.appendChild(acts);

            // ── Code editor pane ──────────────────────────────────
            const cmHost = document.createElement('div');
            cmHost.className = 'cm-host';

            // ── JSON import pane ──────────────────────────────────
            // Schema: { "C++": "code...", "Java": "code...", ... }
            const jsonPane = document.createElement('div');
            jsonPane.style.cssText = 'flex:1;display:none;flex-direction:column;background:var(--bg-secondary);';

            const jsonHint = document.createElement('div');
            jsonHint.style.cssText = 'font-size:11px;color:var(--text-tertiary);padding:8px 14px 4px;font-family:ui-monospace,monospace;';
            jsonHint.textContent = '// Paste JSON: { "C++": "code", "Java": "code", ... }  — saves all languages at once';
            jsonPane.appendChild(jsonHint);

            const jsonHost = document.createElement('div');
            jsonHost.style.cssText = 'flex:1;overflow:hidden;min-height:0;';
            jsonPane.appendChild(jsonHost);

            box.appendChild(hdr);
            box.appendChild(cmHost);
            box.appendChild(jsonPane);
            bd.appendChild(box);
            document.body.appendChild(bd);

            // ── Init CodeMirror (code mode) ───────────────────────
            let editor = CodeMirror(cmHost, {
              value: '',
              mode: cmMode(langSel.value),
              theme: 'default',
              lineNumbers: true,
              indentWithTabs: false,
              tabSize: 2,
              autoRefresh: true,
              extraKeys: { 'Tab': (cm) => cm.execCommand('insertSoftTab') }
            });
            editor.setSize('100%', '100%');

            // ── Init CodeMirror (JSON mode) ───────────────────────
            let jsonEditor = CodeMirror(jsonHost, {
              value: '',
              mode: 'application/json',
              theme: 'default',
              lineNumbers: true,
              indentWithTabs: false,
              tabSize: 2,
              autoRefresh: true,
            });
            jsonEditor.setSize('100%', '100%');

            // Build a sample JSON showing existing saved langs
            function buildJsonSample() {
              const sample = {};
              LANGS.forEach(l => {
                const code = (() => { try { return localStorage.getItem(solKey(l)) || ''; } catch { return ''; } })();
                if (code) sample[l] = code;
              });
              if (!Object.keys(sample).length) sample['C++'] = '// paste your C++ solution here';
              return JSON.stringify(sample, null, 2);
            }

            function loadCode() {
              try { editor.setValue(localStorage.getItem(solKey(langSel.value)) || ''); } catch {}
              editor.setOption('mode', cmMode(langSel.value));
              editor.focus();
            }
            loadCode();
            langSel.addEventListener('change', loadCode);

            // ── Mode toggle ───────────────────────────────────────
            function switchMode(mode) {
              addMode = mode;
              if (mode === 'code') {
                cmHost.style.display = '';
                jsonPane.style.display = 'none';
                langSel.style.display = '';
                modeCodeBtn.className = 'btn-small primary';
                modeJsonBtn.className = 'btn-small';
                saveBtn.textContent = 'Save';
                loadCode();
              } else {
                cmHost.style.display = 'none';
                jsonPane.style.display = 'flex';
                langSel.style.display = 'none';
                modeCodeBtn.className = 'btn-small';
                modeJsonBtn.className = 'btn-small primary';
                saveBtn.textContent = 'Import all';
                jsonEditor.setValue(buildJsonSample());
                jsonEditor.refresh();
                setTimeout(() => jsonEditor.focus(), 50);
              }
            }
            modeCodeBtn.addEventListener('click', () => switchMode('code'));
            modeJsonBtn.addEventListener('click', () => switchMode('json'));

            cancelBtn.addEventListener('click', () => document.body.removeChild(bd));
            bd.addEventListener('click', (e) => { if (e.target === bd) document.body.removeChild(bd); });

            saveBtn.addEventListener('click', () => {
              if (addMode === 'code') {
                const code = editor.getValue().trim();
                if (!code) { cmHost.style.outline = '2px solid red'; return; }
                try { localStorage.setItem(solKey(langSel.value), code); } catch {}
                document.body.removeChild(bd);
                viewBtn.style.opacity = '1';
                } else {
                // JSON import — parse and save each language
                try {
                  const raw = jsonEditor.getValue().trim();
                  const obj = JSON.parse(raw);
                  let count = 0;
                  LANGS.forEach(l => {
                    if (obj[l] && typeof obj[l] === 'string' && obj[l].trim()) {
                      localStorage.setItem(solKey(l), obj[l].trim());
                      count++;
                    }
                  });
                  document.body.removeChild(bd);
                  viewBtn.style.opacity = '1';
                      if (count === 0) alert('No valid language keys found. Use: { "C++": "...", "Java": "..." }');
                } catch (err) {
                  jsonHost.style.outline = '2px solid red';
                  jsonHint.textContent = '⚠ Invalid JSON: ' + err.message;
                  jsonHint.style.color = 'red';
                }
              }
            });
          }

          function openViewModal() {
            const saved = getSavedLangs();
            if (!saved.length) return;

            const bd = document.createElement('div');
            bd.className = 'modal-backdrop';
            const box = document.createElement('div');
            box.className = 'modal';

            // Header
            const hdr = document.createElement('div');
            hdr.className = 'modal-header';
            const titleEl = document.createElement('div');
            titleEl.className = 'modal-title';
            titleEl.textContent = `Solution — ${q.name || q.title}`;
            const acts = document.createElement('div');
            acts.className = 'modal-actions';
            const editBtn = document.createElement('button');
            editBtn.className = 'btn-small primary'; editBtn.textContent = 'Edit';
            const closeBtn = document.createElement('button');
            closeBtn.className = 'btn-small'; closeBtn.textContent = '✕ Close';
            acts.appendChild(editBtn); acts.appendChild(closeBtn);
            hdr.appendChild(titleEl); hdr.appendChild(acts);

            // Language tabs
            const tabStrip = document.createElement('div');
            tabStrip.className = 'lang-tabs';
            let activeLang = saved[0];
            saved.forEach(l => {
              const tab = document.createElement('div');
              tab.className = 'lang-tab' + (l === activeLang ? ' active' : '');
              tab.textContent = l;
              tab.addEventListener('click', () => {
                activeLang = l;
                tabStrip.querySelectorAll('.lang-tab').forEach(t =>
                  t.classList.toggle('active', t.textContent === l));
                loadView(l);
              });
              tabStrip.appendChild(tab);
            });

            // CodeMirror host (read-only)
            const cmHost = document.createElement('div');
            cmHost.className = 'cm-host';

            box.appendChild(hdr); box.appendChild(tabStrip); box.appendChild(cmHost);
            bd.appendChild(box); document.body.appendChild(bd);

            let viewer = CodeMirror(cmHost, {
              value: '',
              mode: cmMode(activeLang),
              theme: 'dracula',
              lineNumbers: true,
              readOnly: true,
              autoRefresh: true,
              cursorBlinkRate: -1,
            });
            viewer.setSize('100%', '100%');

            function loadView(lang) {
              try { viewer.setValue(localStorage.getItem(solKey(lang)) || ''); } catch {}
              viewer.setOption('mode', cmMode(lang));
              viewer.refresh();
            }
            loadView(activeLang);

            closeBtn.addEventListener('click', () => document.body.removeChild(bd));
            bd.addEventListener('click', (e) => { if (e.target === bd) document.body.removeChild(bd); });
            editBtn.addEventListener('click', () => {
              document.body.removeChild(bd);
              openAddModal();
            });
          }

          // View → redirect to dedicated solution page
          viewBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            const name  = encodeURIComponent(q.name || q.title || 'Question');
            const diff  = encodeURIComponent((q.difficulty || '').toLowerCase());
            const url   = encodeURIComponent(q.url || '#');
            const qkey  = encodeURIComponent(q.url || q.name || q.title);
            window.location.href = `solution.html?q=${qkey}&name=${name}&diff=${diff}&url=${url}`;
          });

          // Row click — toggle only when clicking blank row areas
          tr.style.cursor = 'pointer';
          tr.addEventListener('click', (e) => {
            // Ignore clicks on links, buttons, or the checkbox itself
            const t = e.target;
            if (t.tagName === 'A' || t.tagName === 'BUTTON' ||
                t.tagName === 'INPUT' || t.closest('.sol-actions') ||
                t.closest('a') || t.closest('button')) return;
            toggle();
          });
          tb.appendChild(tr);
          tb.appendChild(solTr);
          }); // end items.forEach
        } // end buildRows

        buildRows(origItems);
        table.appendChild(tb);
        out.appendChild(table);
      });

      return out;
    }

    case 'reset-progress':
    case 'questions-header': {
      // Renders "Questions" heading + reset button in a flex row
      const scopeKey = block.scopeKey || route.pageId;

      const row = el('div', '');
      row.style.cssText = 'display:flex;align-items:center;justify-content:space-between;margin:32px 0 12px;gap:12px;';

      const h2 = el('h2', 'content-h2', 'Questions');
      h2.style.margin = '0';

      const btn = el('button', '');
      btn.textContent = 'Reset progress';
      btn.style.cssText = 'padding:5px 12px;border-radius:7px;border:1px solid rgba(220,38,38,0.25);background:rgba(220,38,38,0.04);color:#dc2626;font-size:12px;cursor:pointer;flex-shrink:0;';
      btn.onmouseenter = () => { btn.style.background = 'rgba(220,38,38,0.09)'; };
      btn.onmouseleave = () => { btn.style.background = 'rgba(220,38,38,0.04)'; };

      btn.onclick = () => {
        // Clear scoped keys (hi:done:scopeKey|...)
        try {
          Object.keys(localStorage)
            .filter(k => k.startsWith('hi:done:' + scopeKey))
            .forEach(k => localStorage.removeItem(k));
        } catch {}
        // Also clear global URL keys (hi:done:url:...) for questions in this page
        // Find all question URLs on the current page and clear their global keys
        try {
          const page = window.SITE_CONFIG?.pages?.[route.pageId];
          if (page) {
            page.content.forEach(b => {
              if (b.type === 'question-table' || b.type === 'progress-dashboard') {
                (b.sections || []).forEach(sec => {
                  (sec.items || []).forEach(q => {
                    if (q.url) {
                      const gk = 'hi:done:url:' + q.url.trim().toLowerCase().replace(/\/+$/, '');
                      localStorage.removeItem(gk);
                    }
                  });
                });
              }
            });
          }
        } catch {}
        // Unmark done rows only in tables matching this scope
        document.querySelectorAll(`#main-content table[data-scope="${scopeKey}"] .row-done`).forEach(tr => {
          tr.classList.remove('row-done');
          const chk = tr.querySelector('input[type=checkbox]');
          if (chk) chk.checked = false;
        });
        // Refresh all progress dashboards on the page in-place
        document.querySelectorAll('.__dash').forEach(d => {
          if (typeof d.__refresh === 'function') d.__refresh();
        });
        // Flash button
        btn.textContent = '✓ Reset';
        btn.style.color = '#059669';
        btn.style.borderColor = 'rgba(5,150,105,0.3)';
        setTimeout(() => {
          btn.textContent = 'Reset progress';
          btn.style.color = '#dc2626';
          btn.style.borderColor = 'rgba(220,38,38,0.25)';
        }, 1500);
      };

      row.appendChild(h2);
      row.appendChild(btn);
      return row;
    }

    default:
      return el('div', '', `[unknown block type: ${block.type}]`);
  }
}
