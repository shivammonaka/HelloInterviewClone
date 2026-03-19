// ── Main Content — dispatches to track-specific renderer ──────
function renderMain(route) {
  if (route.trackId === 'system-design') return renderSystemDesignMain(route);
  return renderCodingMain(route);
}
