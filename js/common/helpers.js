// ─────────────────────────────────────────────────────────────
//  RENDERER  —  reads SITE_CONFIG, builds the entire UI
// ─────────────────────────────────────────────────────────────

const cfg = window.SITE_CONFIG;

// ── Helpers ───────────────────────────────────────────────────
function el(tag, cls, html) {
  const e = document.createElement(tag);
  if (cls)  e.className = cls;
  if (html !== undefined) e.innerHTML = html;
  return e;
}

function getRoute() {
  const raw = location.hash.replace('#', '').trim();
  const parts = raw.split('/').filter(Boolean);
  const trackIdRaw = parts[0];
  const trackId = cfg.tracks?.[trackIdRaw] ? trackIdRaw : 'system-design';
  // Support coding/company/<slug> routes
  if (parts[1] === 'company' && parts[2]) {
    return { trackId, pageId: 'coding-company-focus', companySlug: parts[2] };
  }
  const pageId = parts[1] || cfg.tracks[trackId].defaultPageId;
  return { trackId, pageId };
}

// ── Slug helper ───────────────────────────────────────────────
function slugify(text) {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}
