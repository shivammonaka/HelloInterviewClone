// Site metadata and navigation structure
// Edit here to add/remove tracks, sidebar items, and nav labels

window.SITE_CONFIG = {
  site: {
    name: "Hello Interview",
    logoText: "hi",
    tagline: "System Design in a Hurry",
  },

  // ── Tracks (top-level pages) ─────────────────────────────
  // We keep a flat `pages` map, but switch the left-sidebar based on the active track.
  tracks: {
    "system-design": {
      label: "System Design",
      defaultPageId: "introduction",
      sidebarTitle: "System Design",
      sidebar: [
        {
          group: "In a Hurry",
          items: [
            { label: "Introduction",       pageId: "introduction",       locked: false },
            { label: "How to Prepare",     pageId: "how-to-prepare",     locked: false },
            { label: "Delivery Framework", pageId: "delivery-framework", locked: false },
            { label: "Core Concepts",      pageId: "core-concepts",      locked: false },
            { label: "Key Technologies",   pageId: "key-technologies",   locked: false },
            { label: "Common Patterns",    pageId: "common-patterns",    locked: false },
            { label: "Question Breakdowns",pageId: "question-breakdowns",locked: false },
          ]
        },
        {
          group: "Core Concepts",
          items: [
            { label: "Networking Essentials", pageId: "networking",         locked: false },
            { label: "API Design",            pageId: "api-design",         locked: false },
            { label: "Data Modeling",         pageId: "data-modeling",      locked: false },
            { label: "Caching",               pageId: "caching",            locked: false },
            { label: "Sharding",              pageId: "sharding",           locked: false },
            { label: "Consistent Hashing",    pageId: "consistent-hashing", locked: false },
            { label: "CAP Theorem",           pageId: "cap-theorem",        locked: false },
            { label: "Database Indexing",     pageId: "db-indexing",        locked: true  },
            { label: "Numbers to Know",       pageId: "numbers-to-know",    locked: true  },
          ]
        },
        {
          group: "Key Technologies",
          items: [
            { label: "Redis",         pageId: "redis",         locked: false },
            { label: "Elasticsearch", pageId: "elasticsearch", locked: false },
            { label: "Kafka",         pageId: "kafka",         locked: false },
            { label: "API Gateway",   pageId: "api-gateway",   locked: false },
            { label: "Cassandra",     pageId: "cassandra",     locked: false },
            { label: "DynamoDB",      pageId: "dynamodb",      locked: false },
            { label: "PostgreSQL",    pageId: "postgresql",    locked: true  },
            { label: "Flink",         pageId: "flink",         locked: true  },
            { label: "ZooKeeper",     pageId: "zookeeper",     locked: true  },
          ]
        },
        {
          group: "Question Breakdowns",
          items: [
            { label: "Bit.ly",              pageId: "bitly",              locked: false },
            { label: "Dropbox",             pageId: "dropbox",            locked: false },
            { label: "Ticketmaster",        pageId: "ticketmaster",       locked: false },
            { label: "FB News Feed",        pageId: "fb-news-feed",       locked: false },
            { label: "WhatsApp",            pageId: "whatsapp",           locked: false },
            { label: "Rate Limiter",        pageId: "rate-limiter",       locked: false },
            { label: "Uber",                pageId: "uber",               locked: false },
            { label: "YouTube",             pageId: "youtube",            locked: false },
            { label: "Ad Click Aggregator", pageId: "ad-click",          locked: false },
            { label: "News Aggregator",     pageId: "news-aggregator",    locked: true  },
            { label: "Instagram",           pageId: "instagram",          locked: true  },
            { label: "Google Docs",         pageId: "google-docs",        locked: true  },
            { label: "Distributed Cache",   pageId: "dist-cache",         locked: true  },
            { label: "Payment System",      pageId: "payment-system",     locked: true  },
          ]
        },
        {
          group: "Patterns",
          items: [
            { label: "Real-time Updates",       pageId: "realtime-updates",   locked: true },
            { label: "Scaling Reads",           pageId: "scaling-reads",      locked: true },
            { label: "Scaling Writes",          pageId: "scaling-writes",     locked: true },
            { label: "Handling Large Blobs",    pageId: "large-blobs",        locked: true },
            { label: "Multi-step Processes",    pageId: "multi-step",         locked: true },
            { label: "Dealing with Contention", pageId: "contention",         locked: true },
          ]
        },
      ]
    },
    "coding": {
      label: "Coding",
      defaultPageId: "coding-home",
      sidebarTitle: "Coding",
      sidebar: [
        {
          group: "Overview",
          items: [
            { label: "Home",             pageId: "coding-home",           locked: false },
            { label: "DSA Foundations",  pageId: "coding-dsa-concepts",   locked: false },
            { label: "Company Focus",    pageId: "coding-company-focus",  locked: false },
          ]
        },
        {
          group: "Foundations Track",
          items: [
            { label: "Quick Start — 50",   pageId: "coding-f50",   locked: false },
            { label: "Solid Base — 100",   pageId: "coding-f100",  locked: false },
            { label: "Full Prep — 150",    pageId: "coding-f150",  locked: false },
          ]
        },
        {
          group: "Seasoned Coder",
          items: [
            { label: "30-Day Revision",    pageId: "coding-s30",   locked: false },
            { label: "Think Hard 100",     pageId: "coding-s100",  locked: false },
          ]
        }
      ]
    }
  },

  // ── Pages ───────────────────────────────────────────────
  // Each page has:
  //   id         : unique string, matches sidebar pageId
  //   breadcrumb : array of strings shown at top
  //   banner     : { title, subtitle }  (optional)
  //   eyebrow    : small label above h1 (optional)
  //   title      : page <h1>
  //   lead       : subtitle paragraph under h1 (optional)
  //   nextPage   : pageId of the next page (optional)
  //   content    : array of content blocks (see block types below)
  //
  // ── Block types ─────────────────────────────────────────
  //   { type: "paragraph", text }
  //   { type: "heading2",  text }
  //   { type: "heading3",  text }
  //   { type: "ordered-list",   items: [string, ...] }
  //   { type: "unordered-list", items: [string, ...] }
  //   { type: "divider" }
  //   { type: "infobox",  icon, title, content: [paragraph|list block] }
  //   { type: "grid-cards", title, cards: [{title, body}] }
  // ────────────────────────────────────────────────────────
};
