// ── Right Sidebar — dispatches to track-specific renderer ─────
function renderRightSidebar(route) {
  if (route.trackId === 'system-design') return renderSystemDesignRightSidebar(route);
  return renderCodingRightSidebar(route);
}
