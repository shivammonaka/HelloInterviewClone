// Storage layer — URL params, localStorage keys, solution CRUD, seed data

// ─────────────────────────────────────────────────────────────
//  SOLUTION PAGE
// ─────────────────────────────────────────────────────────────

// Parse ?q= from URL
const params   = new URLSearchParams(location.search);
const Q_KEY    = params.get('q') || '';          // e.g. "https://leetcode.com/two-sum"
const Q_NAME   = params.get('name') || 'Question';
const Q_DIFF   = (params.get('diff') || '').toLowerCase();
const Q_URL    = params.get('url') || '#';

const LANGS = ['C++', 'Java', 'Python', 'JavaScript', 'Go', 'Rust'];
function cmMode(lang) {
  return { 'C++':'text/x-c++src','Java':'text/x-java','Python':'python',
           'JavaScript':'javascript','Go':'text/x-go','Rust':'rust' }[lang] || 'text/plain';
}
function solCodeKey(solId, lang) { return `hi:sol:${Q_KEY}:${solId}:${lang}`; }
function solMetaKey(solId)       { return `hi:solmeta:${Q_KEY}:${solId}`; }
function solListKey()            { return `hi:sollist:${Q_KEY}`; }
function expKey(solId)           { return `hi:exp:${Q_KEY}:${solId}`; }

function getSolList() {
  try { return JSON.parse(localStorage.getItem(solListKey()) || '[]'); } catch { return []; }
}
function saveSolList(list) {
  try { localStorage.setItem(solListKey(), JSON.stringify(list)); } catch {}
}
function newId() { return 'sol_' + Date.now(); }

// Also check legacy single-solution storage (from index.html)
function getLegacyLangs() {
  return LANGS.filter(l => {
    try { return !!localStorage.getItem(`hi:sol:${Q_KEY}:${l}`); } catch { return false; }
  });
}

// On first load, if legacy solutions exist but no sol list yet, migrate them
function migrateLegacy() {
  const list = getSolList();
  if (list.length > 0) return;
  const legacyLangs = getLegacyLangs();
  if (!legacyLangs.length) return;
  const id = newId();
  saveSolList([{ id, name: 'My Solution' }]);
  // copy each lang
  legacyLangs.forEach(l => {
    try {
      const code = localStorage.getItem(`hi:sol:${Q_KEY}:${l}`);
      if (code) localStorage.setItem(solCodeKey(id, l), code);
    } catch {}
  });
}
migrateLegacy();

function getSolLangs(solId) {
  return LANGS.filter(l => {
    try { return !!localStorage.getItem(solCodeKey(solId, l)); } catch { return false; }
  });
}

// ── Render solution tabs ──────────────────────────────────────
function getExp(solId) {
  try { return JSON.parse(localStorage.getItem(expKey(solId)) || 'null'); } catch { return null; }
}
function saveExp(solId, data) {
  try { localStorage.setItem(expKey(solId), JSON.stringify(data)); } catch {}
}

// ── Render explanation pane ───────────────────────────────────
function applySeedData() {
  const seeds = window.SEED_DATA || [];
  const entry = seeds.find(s => s.key === Q_KEY);
  if (!entry) return;

  const seedFlag = `hi:seeded:${Q_KEY}`;
  if (localStorage.getItem(seedFlag)) return; // already seeded, don't overwrite

  // Build sol list
  const solList = entry.solutions.map(s => ({ id: s.id, name: s.name }));
  saveSolList(solList);

  // Store code per lang
  entry.solutions.forEach(sol => {
    Object.entries(sol.langs || {}).forEach(([lang, code]) => {
      localStorage.setItem(solCodeKey(sol.id, lang), code);
      // also write legacy key so index.html viewBtn knows a solution exists
      localStorage.setItem(`hi:sol:${Q_KEY}:${lang}`, code);
    });
    // Store explanation
    if (sol.explanation) {
      localStorage.setItem(expKey(sol.id), JSON.stringify(sol.explanation));
    }
  });

  localStorage.setItem(seedFlag, '1');
}

// ── Boot ──────────────────────────────────────────────────────
