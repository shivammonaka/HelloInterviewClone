// Core — topbar bootstrap, state, render functions, event wiring, boot

// ── Bootstrap topbar ──────────────────────────────────────────
document.getElementById('topbar-title').textContent = Q_NAME;
document.title = `${Q_NAME} — Solution`;
const diffPill = document.getElementById('diff-pill');
diffPill.textContent = Q_DIFF.charAt(0).toUpperCase() + Q_DIFF.slice(1);
diffPill.className = `diff-pill ${Q_DIFF}`;
const lcLink = document.getElementById('lc-link');
lcLink.href = Q_URL !== '#' ? Q_URL : '#';
if (Q_URL === '#') lcLink.style.display = 'none';

document.getElementById('back-btn').onclick = () => history.back();

// ── Solution list (stored as JSON array of {id, name}) ────────
// ── State ────────────────────────────────────────────────────
let activeSolId   = null;
let activeLang    = 'C++';
let cmEditor      = null;  // CodeMirror instance
let editMode      = false;

// ── Get saved langs for a solution ───────────────────────────
function renderTabs() {
  const bar = document.getElementById('sol-tab-bar');
  const addBtn = document.getElementById('add-sol-tab');
  // remove old tabs (not the add button)
  bar.querySelectorAll('.sol-tab').forEach(t => t.remove());

  const list = getSolList();
  list.forEach(sol => {
    const tab = document.createElement('div');
    tab.className = 'sol-tab' + (sol.id === activeSolId ? ' active' : '');
    tab.textContent = sol.name;
    tab.dataset.id = sol.id;
    tab.addEventListener('click', () => {
      activeSolId = sol.id;
      activeLang = getSolLangs(sol.id)[0] || 'C++';
      editMode = false;
      renderTabs();
      renderCode();
      renderExp();
    });
    bar.insertBefore(tab, addBtn);
  });

  if (list.length === 0) {
    // show empty state in code pane
    renderCodeEmpty();
    renderExpEmpty();
  }
}

// ── Render code pane ─────────────────────────────────────────
function renderCode() {
  if (!activeSolId) { renderCodeEmpty(); return; }
  const langs = getSolLangs(activeSolId);

  // lang tabs
  const langTabsEl = document.getElementById('lang-tabs');
  langTabsEl.innerHTML = '';
  (langs.length ? langs : [activeLang]).forEach(l => {
    const t = document.createElement('div');
    t.className = 'lang-tab' + (l === activeLang ? ' active' : '');
    t.textContent = l;
    t.addEventListener('click', () => {
      activeLang = l;
      renderCode();
    });
    langTabsEl.appendChild(t);
  });

  // code
  const code = langs.length
    ? (localStorage.getItem(solCodeKey(activeSolId, activeLang)) || localStorage.getItem(solCodeKey(activeSolId, langs[0])) || '')
    : '';

  if (!cmEditor) {
    const wrap = document.getElementById('cm-wrap');
    wrap.innerHTML = '';
    cmEditor = CodeMirror(wrap, {
      value: code,
      mode: cmMode(activeLang),
      theme: 'dracula',
      lineNumbers: true,
      readOnly: true,
      cursorBlinkRate: -1,
      autoRefresh: true,
      lineWrapping: false,
    });
    cmEditor.setSize('100%', '100%');
  } else {
    cmEditor.setValue(code);
    cmEditor.setOption('mode', cmMode(activeLang));
    cmEditor.refresh();
  }
  // reset edit state when switching
  setCodeEditing(false);
}

// ── Code pane edit/save wiring ────────────────────────────────
let codeEditing = false;

function setCodeEditing(on) {
  codeEditing = on;
  if (!cmEditor) return;
  cmEditor.setOption('readOnly', on ? false : true);
  cmEditor.setOption('cursorBlinkRate', on ? 530 : -1);
  if (on) {
    cmEditor.focus();
    cmEditor.setCursor(cmEditor.lineCount(), 0);
  }
  const editBtn = document.getElementById('code-edit-btn');
  const saveBtn = document.getElementById('code-save-btn');
  if (editBtn) editBtn.style.display = on ? 'none' : '';
  if (saveBtn) saveBtn.style.display = on ? '' : 'none';
}

document.getElementById('code-edit-btn').onclick = () => setCodeEditing(true);
document.getElementById('code-save-btn').onclick = () => {
  if (!activeSolId || !cmEditor) return;
  const code = cmEditor.getValue().trim();
  if (code) {
    localStorage.setItem(solCodeKey(activeSolId, activeLang), code);
    try { localStorage.setItem(`hi:sol:${Q_KEY}:${activeLang}`, code); } catch {}
  }
  setCodeEditing(false);
};

function renderCodeEmpty() {
  const wrap = document.getElementById('cm-wrap');
  if (cmEditor) { cmEditor = null; }
  wrap.innerHTML = `<div style="display:flex;align-items:center;justify-content:center;height:100%;color:#6c7086;font-size:13px;flex-direction:column;gap:8px;"><div style="font-size:28px;">🧩</div><div>No solution added yet.</div><div style="font-size:12px;opacity:0.7;">Add a solution using the tabs above.</div></div>`;
}

// ── Explanation data ──────────────────────────────────────────
function getExp(solId) {
  try { return JSON.parse(localStorage.getItem(expKey(solId)) || 'null'); } catch { return null; }
}
function saveExp(solId, data) {
  try { localStorage.setItem(expKey(solId), JSON.stringify(data)); } catch {}
}

// ── Render explanation pane ───────────────────────────────────
function renderExp() {
  const body = document.getElementById('pane-exp-body');
  const editToggle = document.getElementById('edit-toggle');
  const saveBtn = document.getElementById('save-exp-btn');

  if (!activeSolId) { renderExpEmpty(); return; }

  if (editMode) {
    editToggle.textContent = '👁 View';
    editToggle.classList.add('active');
    saveBtn.style.display = 'inline-block';
    renderExpEdit();
  } else {
    editToggle.textContent = '✏️ Edit';
    editToggle.classList.remove('active');
    saveBtn.style.display = 'none';
    renderExpView();
  }
}

function renderExpEmpty() {
  const body = document.getElementById('pane-exp-body');
  body.innerHTML = `<div class="exp-empty"><div class="exp-empty-icon">📝</div><div>No solution yet.</div><div style="margin-top:6px;font-size:12px;">Click "+ Add Solution" above to get started.</div></div>`;
}

function renderExpView() {
  const body = document.getElementById('pane-exp-body');
  const data = getExp(activeSolId);

  if (!data || (!data.howToThink && !data.explanation && !data.algorithms?.length)) {
    body.innerHTML = `<div class="exp-empty"><div class="exp-empty-icon">✏️</div><div>No explanation yet.</div><div style="margin-top:6px;font-size:12px;">Click "Edit" to write your explanation.</div></div>`;
    return;
  }

  let html = '';

  // ── Meta cards grid (top) ───────────────────────────────────
  const hasAlgo    = data.algorithms?.length;
  const hasPrereq  = data.prerequisites?.length;
  const hasCompany = data.companies?.length;
  const hasApproach= data.approaches?.length;

  if (hasAlgo || hasPrereq || hasCompany || hasApproach) {
    html += `<div class="meta-grid">`;
    if (hasAlgo) html += `
      <div class="meta-card">
        <div class="meta-label">🧩 Algorithms</div>
        <div class="tag-row">${data.algorithms.map(t=>`<span class="tag algo">${t}</span>`).join('')}</div>
      </div>`;
    if (hasApproach) html += `
      <div class="meta-card">
        <div class="meta-label">🎯 Approach</div>
        <div class="tag-row">${data.approaches.map(t=>`<span class="tag approach">${t}</span>`).join('')}</div>
      </div>`;
    if (hasPrereq) html += `
      <div class="meta-card">
        <div class="meta-label">📚 Prerequisites</div>
        <div class="tag-row">${data.prerequisites.map(t=>`<span class="tag prereq">${t}</span>`).join('')}</div>
      </div>`;
    if (hasCompany) html += `
      <div class="meta-card full">
        <div class="meta-label">🏢 Asked at</div>
        <div class="tag-row">${data.companies.map(t=>`<span class="tag company">${t}</span>`).join('')}</div>
      </div>`;
    html += `</div>`;
  }

  // ── How to think ────────────────────────────────────────────
  if (data.howToThink) {
    html += `<div class="exp-section-title">🧠 How to think about it</div>`;
    const paras = data.howToThink.split('\n').filter(Boolean);
    // First paragraph as a pull quote, rest as normal text
    if (paras.length > 0) {
      html += `<div class="exp-quote">${paras[0]}</div>`;
      html += paras.slice(1).map(p => `<p class="exp-p">${p}</p>`).join('');
    }
  }

  // ── Step-by-step explanation ────────────────────────────────
  if (data.explanation) {
    html += `<div class="exp-section-title">📖 Step-by-step</div>`;
    const steps = data.explanation.split('\n').filter(Boolean);
    html += `<div class="exp-steps">`;
    steps.forEach((step, i) => {
      html += `<div class="exp-step">
        <div class="exp-step-num">${i + 1}</div>
        <div class="exp-step-text">${step}</div>
      </div>`;
    });
    html += `</div>`;
  }

  // ── Complexity callout (at bottom, styled as a summary card) ─
  if (data.timeComplexity || data.spaceComplexity) {
    // derive explanation text from the values
    const timeExp = data.timeComplexity === 'O(n)' ? 'Single pass through the array'
                  : data.timeComplexity === 'O(n²)' ? 'Nested loop over all pairs'
                  : data.timeComplexity === 'O(n log n)' ? 'Sorting dominates'
                  : 'See explanation above';
    const spaceExp = data.spaceComplexity === 'O(1)' ? 'No extra data structures used'
                   : data.spaceComplexity === 'O(n)' ? 'Hash map stores up to n entries'
                   : 'See explanation above';
    html += `
    <div class="complexity-callout">
      <div class="complexity-callout-title">Complexity Analysis</div>
      <div class="complexity-callout-body">
        <div class="complexity-half">
          <div class="lbl">Time</div>
          <div class="val">${data.timeComplexity || '—'}</div>
          <div class="explain">${timeExp}</div>
        </div>
        <div class="complexity-half">
          <div class="lbl">Space</div>
          <div class="val">${data.spaceComplexity || '—'}</div>
          <div class="explain">${spaceExp}</div>
        </div>
      </div>
    </div>`;
  }

  body.innerHTML = html;
}

function renderExpEdit() {
  const body = document.getElementById('pane-exp-body');
  const data = getExp(activeSolId) || {};

  body.innerHTML = `
    <div class="edit-form visible" id="edit-form">

      <div class="field-group">
        <div class="field-label">Algorithms used</div>
        <input class="field-input" id="f-algorithms" placeholder="e.g. Two Pointers, Sliding Window, BFS" value="${escHtml(data.algorithms?.join(', ') || '')}">
        <div class="field-hint">Comma-separated</div>
      </div>

      <div class="field-group">
        <div class="field-label">Approach tags</div>
        <input class="field-input" id="f-approaches" placeholder="e.g. Brute Force, Optimal, Greedy" value="${escHtml(data.approaches?.join(', ') || '')}">
        <div class="field-hint">Comma-separated</div>
      </div>

      <div class="field-group">
        <div class="field-label">Prerequisites</div>
        <input class="field-input" id="f-prerequisites" placeholder="e.g. Hash Maps, Recursion, Graph traversal" value="${escHtml(data.prerequisites?.join(', ') || '')}">
        <div class="field-hint">Comma-separated</div>
      </div>

      <div class="field-group">
        <div class="field-label">Companies asked</div>
        <input class="field-input" id="f-companies" placeholder="e.g. Google, Meta, Amazon" value="${escHtml(data.companies?.join(', ') || '')}">
        <div class="field-hint">Comma-separated</div>
      </div>

      <div class="two-col">
        <div class="field-group">
          <div class="field-label">Time complexity</div>
          <input class="field-input" id="f-time" placeholder="e.g. O(n log n)" value="${escHtml(data.timeComplexity || '')}">
        </div>
        <div class="field-group">
          <div class="field-label">Space complexity</div>
          <input class="field-input" id="f-space" placeholder="e.g. O(n)" value="${escHtml(data.spaceComplexity || '')}">
        </div>
      </div>

      <div class="field-group">
        <div class="field-label">🧠 How to think about it</div>
        <textarea class="field-textarea" id="f-howToThink" placeholder="Walk through your intuition. How do you arrive at the solution? What pattern did you recognize?">${escHtml(data.howToThink || '')}</textarea>
      </div>

      <div class="field-group">
        <div class="field-label">📖 Explanation</div>
        <textarea class="field-textarea" id="f-explanation" style="min-height:140px" placeholder="Step-by-step explanation of your approach. Use newlines for paragraphs.">${escHtml(data.explanation || '')}</textarea>
      </div>

    </div>
  `;
}

function collectEditForm() {
  const csv = id => (document.getElementById(id)?.value || '').split(',').map(s=>s.trim()).filter(Boolean);
  const txt = id => document.getElementById(id)?.value || '';
  return {
    algorithms:     csv('f-algorithms'),
    approaches:     csv('f-approaches'),
    prerequisites:  csv('f-prerequisites'),
    companies:      csv('f-companies'),
    timeComplexity: txt('f-time'),
    spaceComplexity:txt('f-space'),
    howToThink:     txt('f-howToThink'),
    explanation:    txt('f-explanation'),
  };
}

// ── Edit toggle ───────────────────────────────────────────────
document.getElementById('edit-toggle').onclick = () => {
  if (!activeSolId) return;
  editMode = !editMode;
  renderExp();
};

document.getElementById('save-exp-btn').onclick = () => {
  if (!activeSolId) return;
  const data = collectEditForm();
  saveExp(activeSolId, data);
  editMode = false;
  renderExp();
};

// ── Copy button ───────────────────────────────────────────────
document.getElementById('copy-btn').onclick = () => {
  if (!activeSolId) return;
  const code = localStorage.getItem(solCodeKey(activeSolId, activeLang)) || '';
  navigator.clipboard?.writeText(code).then(() => {
    const btn = document.getElementById('copy-btn');
    btn.textContent = 'Copied!';
    setTimeout(() => btn.textContent = 'Copy', 1500);
  });
};

// ── Add solution tab ──────────────────────────────────────────
document.getElementById('add-sol-tab').onclick = () => openAddSolModal();
document.getElementById('import-json-tab').onclick = () => openImportJsonModal();

// ── Import JSON modal ─────────────────────────────────────────────
// ── Resize handle ─────────────────────────────────────────────
const handle = document.getElementById('resize-handle');
const split   = document.getElementById('split');
const paneCode= document.getElementById('pane-code');
let dragging = false;

handle.addEventListener('mousedown', e => {
  dragging = true;
  handle.classList.add('dragging');
  e.preventDefault();
});
document.addEventListener('mousemove', e => {
  if (!dragging) return;
  const rect = split.getBoundingClientRect();
  const pct  = Math.min(80, Math.max(20, ((e.clientX - rect.left) / rect.width) * 100));
  paneCode.style.width = pct + '%';
  if (cmEditor) cmEditor.refresh();
});
document.addEventListener('mouseup', () => {
  dragging = false;
  handle.classList.remove('dragging');
});

// ── Helpers ───────────────────────────────────────────────────
function escHtml(str) {
  return String(str).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}


// ── Seed from SEED_DATA in content.js ────────────────────────
function boot() {
  applySeedData();
  const list = getSolList();
  if (list.length > 0) {
    activeSolId = list[0].id;
    activeLang  = getSolLangs(activeSolId)[0] || 'C++';
  }
  renderTabs();
  renderCode();
  renderExp();
}
boot();
