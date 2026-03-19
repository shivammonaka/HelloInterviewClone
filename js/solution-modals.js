// Modal dialogs — Import JSON, Add/Rename solution, inline Code Editor

function openImportJsonModal() {

  // ── Schema prompt you can paste into an AI ────────────────────
  const AI_PROMPT = `Generate a JSON object for importing into my coding interview tracker.

Format:
{
  "Solution Name": {
    "code": {
      "C++": "// your code — use actual newlines, they will be escaped to \\n in JSON",
      "Java": "// optional",
      "Python": "# optional"
    },
    "explanation": {
      "algorithms": ["e.g. Hash Map", "Two Pointers"],
      "approaches": ["e.g. Brute Force", "Optimal"],
      "prerequisites": ["e.g. Arrays", "Recursion"],
      "companies": ["Google", "Meta"],
      "timeComplexity": "O(n)",
      "spaceComplexity": "O(n)",
      "howToThink": "How you reason about the problem from scratch.",
      "explanation": "Step-by-step walkthrough of the solution."
    }
  }
}

Rules:
- Top-level keys are solution names e.g. "Brute Force", "Optimal", "DP"
- code: object where keys are language names: C++, Java, Python, JavaScript, Go, Rust
- explanation: all fields optional but include as many as possible
- Output ONLY valid JSON, no markdown fences, no comments`;

  // ── Minimal schema reference ───────────────────────────────────
  const SCHEMA_REF = `{
  "<solution name>": {
    "code": {
      "C++": "<code string>",
      "Java": "<code string>",
      "Python": "<code string>",
      "JavaScript": "<code string>",
      "Go": "<code string>",
      "Rust": "<code string>"
    },
    "explanation": {
      "algorithms":      ["Hash Map", "..."],
      "approaches":      ["Brute Force", "Optimal", "..."],
      "prerequisites":   ["Arrays", "Recursion", "..."],
      "companies":       ["Google", "Meta", "..."],
      "timeComplexity":  "O(n)",
      "spaceComplexity": "O(1)",
      "howToThink":      "How you reason from scratch...",
      "explanation":     "Step-by-step walkthrough..."
    }
  },
  "<another solution>": { ... }
}`;

  const bd = document.createElement('div');
  bd.className = 'mini-modal-bd';

  const box = document.createElement('div');
  box.style.cssText = 'background:var(--bg-primary);border-radius:12px;border:1px solid var(--border-light);padding:20px;width:min(740px,95vw);max-height:92vh;display:flex;flex-direction:column;gap:12px;box-shadow:0 16px 40px rgba(0,0,0,0.15);overflow:hidden;';

  // ── Title ─────────────────────────────────────────────────────
  const titleEl = document.createElement('div');
  titleEl.style.cssText = 'font-size:14px;font-weight:600;color:var(--text-primary);';
  titleEl.textContent = 'Import solutions from JSON';
  box.appendChild(titleEl);

  // ── Schema section ────────────────────────────────────────────
  const schemaWrap = document.createElement('div');
  schemaWrap.style.cssText = 'display:flex;flex-direction:column;gap:6px;';

  const schemaHdr = document.createElement('div');
  schemaHdr.style.cssText = 'display:flex;align-items:center;justify-content:space-between;';

  const schemaLabel = document.createElement('div');
  schemaLabel.style.cssText = 'font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:0.07em;color:var(--text-tertiary);';
  schemaLabel.textContent = 'JSON Schema';
  schemaHdr.appendChild(schemaLabel);

  const copySchemaBtn = document.createElement('button');
  copySchemaBtn.className = 'mini-btn';
  copySchemaBtn.style.cssText = 'font-size:11px;padding:3px 10px;';
  copySchemaBtn.textContent = 'Copy schema';
  copySchemaBtn.onclick = () => {
    navigator.clipboard?.writeText(SCHEMA_REF).then(() => {
      copySchemaBtn.textContent = '✓ Copied';
      setTimeout(() => copySchemaBtn.textContent = 'Copy schema', 1500);
    });
  };
  schemaHdr.appendChild(copySchemaBtn);
  schemaWrap.appendChild(schemaHdr);

  const schemaPre = document.createElement('pre');
  schemaPre.style.cssText = 'font-family:ui-monospace,monospace;font-size:11px;background:var(--bg-secondary);border:1px solid var(--border-light);border-radius:7px;padding:10px 12px;overflow:auto;max-height:160px;color:var(--text-secondary);white-space:pre;margin:0;line-height:1.55;';
  schemaPre.textContent = SCHEMA_REF;
  schemaWrap.appendChild(schemaPre);
  box.appendChild(schemaWrap);

  // ── AI prompt section ──────────────────────────────────────────
  const promptWrap = document.createElement('div');
  promptWrap.style.cssText = 'display:flex;flex-direction:column;gap:6px;';

  const promptHdr = document.createElement('div');
  promptHdr.style.cssText = 'display:flex;align-items:center;justify-content:space-between;';

  const promptLabel = document.createElement('div');
  promptLabel.style.cssText = 'font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:0.07em;color:var(--text-tertiary);';
  promptLabel.textContent = 'AI prompt — paste into ChatGPT / Claude';
  promptHdr.appendChild(promptLabel);

  const copyPromptBtn = document.createElement('button');
  copyPromptBtn.className = 'mini-btn';
  copyPromptBtn.style.cssText = 'font-size:11px;padding:3px 10px;';
  copyPromptBtn.textContent = 'Copy prompt';
  copyPromptBtn.onclick = () => {
    navigator.clipboard?.writeText(AI_PROMPT).then(() => {
      copyPromptBtn.textContent = '✓ Copied';
      setTimeout(() => copyPromptBtn.textContent = 'Copy prompt', 1500);
    });
  };
  promptHdr.appendChild(copyPromptBtn);
  promptWrap.appendChild(promptHdr);

  const promptNote = document.createElement('div');
  promptNote.style.cssText = 'font-size:11.5px;color:var(--text-tertiary);line-height:1.6;';
  promptNote.textContent = 'Copy this prompt → ask an AI to generate the JSON for your problem → paste the result below.';
  promptWrap.appendChild(promptNote);
  box.appendChild(promptWrap);

  // ── Divider ───────────────────────────────────────────────────
  const div = document.createElement('hr');
  div.style.cssText = 'border:none;border-top:1px solid var(--border-light);margin:0;';
  box.appendChild(div);

  // ── Paste area ────────────────────────────────────────────────
  const pasteLabel = document.createElement('div');
  pasteLabel.style.cssText = 'font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:0.07em;color:var(--text-tertiary);';
  pasteLabel.textContent = 'Paste JSON here';
  box.appendChild(pasteLabel);

  const ta = document.createElement('textarea');
  ta.style.cssText = 'flex:1;min-height:180px;font-family:ui-monospace,monospace;font-size:11.5px;padding:10px 12px;border:1px solid var(--border-mid);border-radius:8px;background:var(--bg-secondary);color:var(--text-primary);resize:vertical;outline:none;line-height:1.6;';
  ta.placeholder = '{ "Optimal": { "code": { "C++": "..." }, "explanation": { ... } } }';
  box.appendChild(ta);

  const errEl = document.createElement('div');
  errEl.style.cssText = 'font-size:11px;color:red;display:none;';
  box.appendChild(errEl);

  const btns = document.createElement('div');
  btns.style.cssText = 'display:flex;justify-content:flex-end;gap:8px;';
  const cancelBtn = document.createElement('button');
  cancelBtn.className = 'mini-btn'; cancelBtn.textContent = 'Cancel';
  const importBtn = document.createElement('button');
  importBtn.className = 'mini-btn primary'; importBtn.textContent = 'Import';
  btns.appendChild(cancelBtn); btns.appendChild(importBtn);
  box.appendChild(btns);

  bd.appendChild(box);
  document.body.appendChild(bd);
  ta.focus();

  cancelBtn.onclick = () => document.body.removeChild(bd);
  bd.onclick = (e) => { if (e.target === bd) document.body.removeChild(bd); };

  importBtn.onclick = () => {
    errEl.style.display = 'none';
    let obj;
    try {
      obj = JSON.parse(ta.value.trim());
      if (typeof obj !== 'object' || Array.isArray(obj)) throw new Error('Top level must be a JSON object {}');
    } catch (err) {
      errEl.textContent = '⚠ JSON parse error: ' + err.message;
      errEl.style.display = 'block';
      return;
    }

    const list = getSolList();
    let codeCount = 0, expCount = 0;

    Object.entries(obj).forEach(([solName, val]) => {
      if (typeof val !== 'object' || !val) return;
      let sol = list.find(s => s.name === solName);
      if (!sol) {
        sol = { id: 'sol_' + Date.now() + '_' + Math.random().toString(36).slice(2), name: solName };
        list.push(sol);
      }
      const codeMap = (val.code && typeof val.code === 'object') ? val.code : val;
      LANGS.forEach(lang => {
        const code = codeMap[lang];
        if (code && typeof code === 'string' && code.trim()) {
          localStorage.setItem(solCodeKey(sol.id, lang), code.trim());
          try { localStorage.setItem('hi:sol:' + Q_KEY + ':' + lang, code.trim()); } catch {}
          codeCount++;
        }
      });
      if (val.explanation && typeof val.explanation === 'object') {
        const exp = val.explanation;
        saveExp(sol.id, {
          algorithms:      Array.isArray(exp.algorithms)    ? exp.algorithms    : [],
          approaches:      Array.isArray(exp.approaches)    ? exp.approaches    : [],
          prerequisites:   Array.isArray(exp.prerequisites) ? exp.prerequisites : [],
          companies:       Array.isArray(exp.companies)     ? exp.companies     : [],
          timeComplexity:  exp.timeComplexity  || '',
          spaceComplexity: exp.spaceComplexity || '',
          howToThink:      exp.howToThink      || '',
          explanation:     exp.explanation     || '',
        });
        expCount++;
      }
    });

    saveSolList(list);
    document.body.removeChild(bd);
    activeSolId = list[0]?.id || null;
    activeLang = activeSolId ? (getSolLangs(activeSolId)[0] || 'C++') : 'C++';
    boot();
    alert('Imported ' + Object.keys(obj).length + ' solution(s): ' + codeCount + ' code snippet(s), ' + expCount + ' explanation(s).');
  };
}


function openAddSolModal(existingId) {
  const list = getSolList();
  const existing = existingId ? list.find(s => s.id === existingId) : null;

  const bd = document.createElement('div');
  bd.className = 'mini-modal-bd';
  const box = document.createElement('div');
  box.className = 'mini-modal';

  box.innerHTML = `
    <div class="mini-modal-title">${existing ? 'Rename solution' : 'Name this solution'}</div>
    <input id="sol-name-input" placeholder="e.g. Brute Force / Optimal / DP" value="${existing?.name || ''}">
    <div style="font-size:11px;color:var(--text-tertiary);margin-bottom:14px;">Then add your code using the language tabs in the code pane.</div>
    <div class="mini-modal-btns">
      ${existing ? `<button class="mini-btn danger" id="del-sol-btn">Delete</button>` : ''}
      <button class="mini-btn" id="cancel-sol-btn">Cancel</button>
      <button class="mini-btn primary" id="confirm-sol-btn">${existing ? 'Rename' : 'Create'}</button>
    </div>
  `;

  bd.appendChild(box);
  document.body.appendChild(bd);
  document.getElementById('sol-name-input').focus();
  document.getElementById('sol-name-input').select();

  document.getElementById('cancel-sol-btn').onclick = () => document.body.removeChild(bd);
  bd.onclick = (e) => { if (e.target === bd) document.body.removeChild(bd); };

  document.getElementById('confirm-sol-btn').onclick = () => {
    const name = document.getElementById('sol-name-input').value.trim();
    if (!name) return;
    if (existing) {
      existing.name = name;
      saveSolList(list);
    } else {
      const id = newId();
      list.push({ id, name });
      saveSolList(list);
      activeSolId = id;
      activeLang = 'C++';
      // open code editor modal for this new sol
      document.body.removeChild(bd);
      renderTabs();
      renderCode();
      renderExp();
      openCodeEditorModal(id);
      return;
    }
    document.body.removeChild(bd);
    renderTabs();
  };

  const delBtn = document.getElementById('del-sol-btn');
  if (delBtn) {
    delBtn.onclick = () => {
      if (!confirm(`Delete solution "${existing.name}"?`)) return;
      const newList = list.filter(s => s.id !== existingId);
      saveSolList(newList);
      if (activeSolId === existingId) {
        activeSolId = newList[0]?.id || null;
        activeLang = activeSolId ? (getSolLangs(activeSolId)[0] || 'C++') : 'C++';
      }
      document.body.removeChild(bd);
      renderTabs();
      renderCode();
      renderExp();
    };
  }
}

function openCodeEditorModal(solId) {
  const bd = document.createElement('div');
  bd.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,0.55);display:flex;align-items:center;justify-content:center;z-index:300;padding:20px;';

  const box = document.createElement('div');
  box.style.cssText = 'background:#1e1e2e;border-radius:12px;width:min(900px,100%);height:min(580px,90vh);display:flex;flex-direction:column;overflow:hidden;border:1px solid rgba(255,255,255,0.08);box-shadow:0 28px 70px rgba(0,0,0,0.55);';

  // header
  const hdr = document.createElement('div');
  hdr.style.cssText = 'height:44px;background:#181825;border-bottom:1px solid rgba(255,255,255,0.07);display:flex;align-items:center;padding:0 16px;gap:10px;flex-shrink:0;';
  hdr.innerHTML = `<span style="font-size:13px;font-weight:600;color:#cdd6f4;flex:1;">Add code</span>`;

  const langSel = document.createElement('select');
  langSel.style.cssText = 'padding:5px 8px;border-radius:7px;border:1px solid rgba(255,255,255,0.12);background:#313244;color:#cdd6f4;font-size:12px;outline:none;cursor:pointer;';
  LANGS.forEach(l => {
    const o = document.createElement('option'); o.value = l; o.textContent = l;
    langSel.appendChild(o);
  });

  const saveBtn = document.createElement('button');
  saveBtn.textContent = 'Save';
  saveBtn.style.cssText = 'font-size:11px;padding:5px 12px;border-radius:7px;border:none;background:var(--accent);color:#fff;cursor:pointer;';

  const closeBtn = document.createElement('button');
  closeBtn.textContent = '✕';
  closeBtn.style.cssText = 'font-size:11px;padding:5px 9px;border-radius:7px;border:1px solid rgba(255,255,255,0.12);background:#313244;color:#cdd6f4;cursor:pointer;';

  hdr.appendChild(langSel); hdr.appendChild(saveBtn); hdr.appendChild(closeBtn);

  const cmHost = document.createElement('div');
  cmHost.style.cssText = 'flex:1;overflow:hidden;min-height:0;';

  box.appendChild(hdr); box.appendChild(cmHost);
  bd.appendChild(box); document.body.appendChild(bd);

  const editor = CodeMirror(cmHost, {
    value: localStorage.getItem(solCodeKey(solId, langSel.value)) || '',
    mode: cmMode(langSel.value),
    theme: 'dracula',
    lineNumbers: true,
    autoRefresh: true,
    extraKeys: { 'Tab': cm => cm.execCommand('insertSoftTab') }
  });
  editor.setSize('100%', '100%');
  editor.focus();

  langSel.onchange = () => {
    editor.setValue(localStorage.getItem(solCodeKey(solId, langSel.value)) || '');
    editor.setOption('mode', cmMode(langSel.value));
    editor.focus();
  };
  closeBtn.onclick = () => { document.body.removeChild(bd); renderCode(); renderExp(); };
  bd.onclick = (e) => { if (e.target === bd) { document.body.removeChild(bd); renderCode(); renderExp(); } };
  saveBtn.onclick = () => {
    const code = editor.getValue().trim();
    if (!code) return;
    localStorage.setItem(solCodeKey(solId, langSel.value), code);
    saveBtn.textContent = 'Saved ✓';
    setTimeout(() => saveBtn.textContent = 'Save', 1200);
    // also update legacy key so index.html's viewBtn stays in sync
    try { localStorage.setItem(`hi:sol:${Q_KEY}:${langSel.value}`, code); } catch {}
    renderCode();
  };
}

