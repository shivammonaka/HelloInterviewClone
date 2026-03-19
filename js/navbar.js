// ── Navbar ────────────────────────────────────────────────────
function renderNavbar() {
  const nav = document.getElementById('navbar');
  const { trackId } = getRoute();
  const sys = cfg.tracks['system-design'];
  const cod = cfg.tracks['coding'];

  nav.innerHTML = `
    <div class="logo" onclick="navigateTo('system-design', '${sys.defaultPageId}')">
      <div class="logo-icon">${cfg.site.logoText}</div>
      ${cfg.site.name}
    </div>
    <span class="nav-link ${trackId === 'system-design' ? 'active' : ''}" onclick="navigateTo('system-design', '${sys.defaultPageId}')">${sys.label}</span>
    <span class="nav-link ${trackId === 'coding' ? 'active' : ''}" onclick="navigateTo('coding', '${cod.defaultPageId}')">${cod.label}</span>
  `;
}

// ── Left Sidebar ──────────────────────────────────────────────
function renderSidebar(route) {
  const aside = document.getElementById('left-sidebar');
  aside.innerHTML = '';

  const track = cfg.tracks[route.trackId];
  const groupTitle = el('div', 'sidebar-group-label', track.sidebarTitle);
  aside.appendChild(groupTitle);

  track.sidebar.forEach((group, gi) => {
    if (gi > 0) aside.appendChild(el('hr', 'sidebar-divider'));
    aside.appendChild(el('div', 'sidebar-group-label', group.group));

    group.items.forEach(item => {
      const row = el('div', 'sidebar-item' + (item.pageId === route.pageId ? ' active' : ''));

      const circle = el('div', 'check-circle');
      row.appendChild(circle);

      const label = document.createTextNode(item.label);
      row.appendChild(label);

      if (item.locked) {
        row.appendChild(el('span', 'lock-badge', '🔒'));
      }

      if (item.pageId && cfg.pages[item.pageId]) {
        row.style.cursor = 'pointer';
        row.addEventListener('click', () => navigateTo(route.trackId, item.pageId));
      }

      aside.appendChild(row);
    });
  });
}
