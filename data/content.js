// ============================================================
//  SITE CONTENT CONFIG
//  Edit this file to add/remove pages, sections, sidebar items
// ============================================================

window.SITE_CONFIG = {

  // ── Site-wide metadata ──────────────────────────────────
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
  pages: {

    "introduction": {
      id: "introduction",
      breadcrumb: ["Learn System Design", "In a Hurry", "Introduction"],
      banner: {
        title: "System Design in a Hurry",
        subtitle: "Built by FAANG hiring managers and staff engineers"
      },
      eyebrow: "System Design in a Hurry",
      title: "Introduction",
      lead: "If you're entirely new to system design, we'll take it step by step — from fundamentals, to interview-ready, to deeper expert intuition.",
      nextPage: "how-to-prepare",
      content: [
        { type: "divider" },
        { type: "heading2", text: "New to system design?" },
        {
          type: "ordered-list",
          items: [
            "If you don't know anything (or you're entirely new), we'll start from the basics and build up in layers.",
            "We'll take you from fundamentals → interview-required concepts → deeper expertise and intuition.",
            "Once you're comfortable, you can jump into other sections (Core Concepts, Key Technologies, Question Breakdowns, and Patterns)."
          ]
        },
        {
          type: "paragraph",
          text: "After conducting literally thousands of interviews at companies like Meta and Amazon, we've collected the most important things candidates need to know to succeed in system design interviews. We call our course \"System Design in a Hurry\" and it's used by tens of thousands of software engineers because we work backwards from what you actually need to pass the interview."
        },
        { type: "heading3", text: "Why this approach works" },
        {
          type: "ordered-list",
          items: [
            "If you don't have a lot of time before your interview, you'll learn the most impactful things as quickly as possible.",
            "As you learn new things, you'll connect them to real systems and real problems rather than just accumulating academic knowledge."
          ]
        },
        {
          type: "paragraph",
          text: "Other system design materials are either AI-generated filler or go to a depth you'll never cover in an interview. We aimed to make this guide <strong>dense, practical, and efficient</strong>."
        },
        {
          type: "infobox",
          icon: "💡",
          title: "About premium content",
          content: [
            {
              type: "paragraph",
              text: "We've augmented this guide with premium content to help you go deeper — like Realtime Updates, Vector Databases, and How to Design Instagram. These are denoted with a 🔒 icon."
            }
          ]
        },
        { type: "heading2", text: "What are system design interviews?" },
        {
          type: "paragraph",
          text: "System design interviews assess your ability to take an ambiguously defined, high-level problem and break it down into the infrastructure needed to solve it. These are <em>practical</em> interviews — most engineers find them closer to real-world work than leetcode-style interviews."
        },
        {
          type: "paragraph",
          text: "<strong>Design interviews are not about getting to a single right answer.</strong> For many questions, there are many right answers. Your interviewer is assessing your ability to navigate a complex problem, reason about trade-offs, and communicate your thinking clearly."
        },
        { type: "heading3", text: "Types of system design interviews" },
        {
          type: "paragraph",
          text: "The overwhelming majority will be <strong>Product Design</strong> or <strong>Infrastructure Design</strong> interviews — you'll be asked to design a system like \"Design a ride-sharing service like Uber\" or \"Design a rate limiter\"."
        },
        {
          type: "infobox",
          icon: "🗺️",
          title: "Not the right guide for you?",
          content: [
            {
              type: "unordered-list",
              items: [
                "Designing class structure of a system → Low-Level Design in a Hurry",
                "ML modelling and feature engineering → ML System Design in a Hurry",
                "Frontend engineering design interviews → Great Frontend"
              ]
            }
          ]
        },
        { type: "heading3", text: "Assessment" },
        {
          type: "paragraph",
          text: "All candidates are expected to complete a full design satisfying the requirements. A mid-level engineer might cover the basics well without great depth. A senior engineer will quickly work through the basics, leaving time to show depth in deep dives."
        },
        {
          type: "grid-cards",
          title: "📋 Interviewer rubric — common themes across all companies",
          cards: [
            {
              title: "Problem Navigation",
              body: "Break down the problem, gather requirements, prioritize the most important parts, deliver a working system."
            },
            {
              title: "Solution Design",
              body: "Apply core concepts, consider scaling and performance, produce a well-structured and coherent design."
            },
            {
              title: "Technical Excellence",
              body: "Know available technologies, apply best practices, recognize common patterns, avoid outdated approaches."
            },
            {
              title: "Communication & Collaboration",
              body: "Communicate clearly, respond to feedback constructively, collaborate with the interviewer in real time."
            }
          ]
        },
        { type: "heading2", text: "How to use this guide" },
        {
          type: "paragraph",
          text: "We recommend reading in order, skipping sections you already know. Start with How to Prepare to get a structured plan."
        },
        {
          type: "paragraph",
          text: "We firmly believe you need to <strong>practice</strong> to be comfortable on interview day. A common failure mode is consuming a lot of material but stumbling when it's time to apply it."
        },
        {
          type: "infobox",
          icon: "⏱️",
          title: "How much time do I need?",
          content: [
            {
              type: "paragraph",
              text: "If system design is entirely new to you, plan 3–4 weeks. If you know some core concepts, candidates have prepared in under a week. <strong>Really short on time?</strong> Cover the Delivery Framework first, skim Key Technologies, then spend remaining time on Core Concepts."
            }
          ]
        },
        { type: "heading2", text: "Conclusion" },
        {
          type: "paragraph",
          text: "Ready to dive in? We're excited to have you here. If you have questions as you go, the comments section is a great place to ask — you can also highlight any text and click \"Ask Tutor\" to get a quick AI-grounded answer."
        }
      ]
    },

    // ── ADD NEW PAGES BELOW ─────────────────────────────────
    // Copy the structure above and change the id, breadcrumb, title, content etc.

    "how-to-prepare": {
      id: "how-to-prepare",
      breadcrumb: ["Learn System Design", "In a Hurry", "How to Prepare"],
      eyebrow: "System Design in a Hurry",
      title: "How to Prepare",
      lead: "A structured approach to preparing for system design interviews, regardless of your timeline.",
      nextPage: "delivery-framework",
      content: [
        { type: "divider" },
        {
          type: "paragraph",
          text: "Preparation for system design interviews differs significantly from coding interview prep. There's no single \"correct\" solution — instead you need to build intuition for making good trade-offs under time pressure."
        },
        { type: "heading2", text: "Build a solid foundation first" },
        {
          type: "paragraph",
          text: "Before diving into problem walkthroughs, make sure you have a strong grasp of the core building blocks. Without this foundation, you'll find yourself unable to reason about the right tool for the job."
        },
        {
          type: "ordered-list",
          items: [
            "Read through Core Concepts — caching, sharding, consistent hashing, CAP theorem.",
            "Study Key Technologies — understand when to reach for Redis vs Kafka vs Cassandra.",
            "Learn the Delivery Framework — give yourself a repeatable structure for every interview.",
            "Do Question Breakdowns — apply what you've learned to real problems."
          ]
        },
        {
          type: "infobox",
          icon: "💡",
          title: "Pro tip",
          content: [
            {
              type: "paragraph",
              text: "Don't just read — take notes, draw diagrams, and try to explain concepts out loud as if you were in an interview. Active recall is far more effective than passive reading."
            }
          ]
        },
        { type: "heading2", text: "Practice out loud" },
        {
          type: "paragraph",
          text: "The single biggest gap between candidates who pass and those who don't is the ability to communicate while designing. You need to practice thinking out loud — narrating your decisions as you make them."
        },
        {
          type: "grid-cards",
          title: "Preparation phases",
          cards: [
            {
              title: "Week 1 — Concepts",
              body: "Read all core concepts and key technologies. Don't skip anything."
            },
            {
              title: "Week 2 — Framework",
              body: "Learn and internalize the delivery framework. Practice applying it to 2–3 problems."
            },
            {
              title: "Week 3 — Problems",
              body: "Work through question breakdowns. Time yourself. Aim for 45 minutes per problem."
            },
            {
              title: "Week 4 — Mock interviews",
              body: "Do at least 2 mock interviews with real feedback from experienced engineers."
            }
          ]
        }
      ]
    },

    "delivery-framework": {
      id: "delivery-framework",
      breadcrumb: ["Learn System Design", "In a Hurry", "Delivery Framework"],
      eyebrow: "System Design in a Hurry",
      title: "Delivery Framework",
      lead: "A repeatable structure for every system design interview, so you always know what to do next.",
      nextPage: "core-concepts",
      content: [
        { type: "divider" },
        {
          type: "paragraph",
          text: "The biggest reason candidates struggle in system design interviews isn't a lack of knowledge — it's a lack of structure. Without a framework to follow, it's easy to get lost, go in circles, or spend too long on the wrong thing."
        },
        { type: "heading2", text: "The four steps" },
        {
          type: "ordered-list",
          items: [
            "<strong>Requirements (5 min)</strong> — Clarify functional and non-functional requirements. Ask about scale, latency, consistency needs.",
            "<strong>High-level design (10 min)</strong> — Sketch the core components: clients, services, databases, queues. Don't go deep yet.",
            "<strong>Deep dives (20 min)</strong> — Pick the 2–3 most interesting/challenging parts of the design and go deep. This is where senior candidates stand out.",
            "<strong>Wrap-up (5 min)</strong> — Summarize your design, call out limitations, suggest what you'd do with more time."
          ]
        },
        {
          type: "infobox",
          icon: "⚠️",
          title: "Common mistake",
          content: [
            {
              type: "paragraph",
              text: "Most candidates spend too long on the high-level design and run out of time for deep dives. Deep dives are where senior-level signal is generated — don't skip them."
            }
          ]
        },
        { type: "heading2", text: "Requirements gathering" },
        {
          type: "paragraph",
          text: "Always start by clarifying what you're building. Ask questions like: Who are the users? What are the core features (limit to 3)? What scale do we need to support? What are the latency requirements?"
        },
        {
          type: "paragraph",
          text: "Write down the requirements you agree on — this anchors the rest of your design and shows the interviewer you can navigate ambiguity."
        }
      ]
    },

    "coding-home": {
      id: "coding-home",
      breadcrumb: ["Coding"],
      eyebrow: "Coding Interview Prep",
      title: "Coding",
      lead: "Two tracks built for different stages. Pick where you are right now.",
      content: [
        { type: "divider" },
        { type: "heading2", text: "Foundations Track" },
        {
          type: "paragraph",
          text: "You're building from scratch or getting back after a long break. Three sheet sizes based on how much time you have before your interview."
        },
        {
          type: "grid-cards",
          title: "",
          cards: [
            { title: "Quick Start — 50", body: "~2 weeks. The 50 highest-leverage problems. Do these if your interview is soon.", pageId: "coding-f50", trackId: "coding" },
            { title: "Solid Base — 100", body: "~4 weeks. Covers every core pattern with enough variety to build real intuition.", pageId: "coding-f100", trackId: "coding" },
            { title: "Full Prep — 150", body: "~6–8 weeks. Deep coverage. Leaves no blind spots.", pageId: "coding-f150", trackId: "coding" },
          ]
        },
        { type: "heading2", text: "Seasoned Coder" },
        {
          type: "paragraph",
          text: "You know DSA well. You just need to shake off the rust and make sure the hard stuff is still sharp."
        },
        {
          type: "grid-cards",
          title: "",
          cards: [
            { title: "30-Day Revision", body: "30 carefully chosen problems — one per day. Hits every pattern once. Fast but effective.", pageId: "coding-s30", trackId: "coding" },
            { title: "Think Hard 100", body: "100 problems that don't have obvious solutions. For engineers who want depth, not repetition.", pageId: "coding-s100", trackId: "coding" },
          ]
        },
        { type: "heading2", text: "Other" },
        {
          type: "grid-cards",
          title: "",
          cards: [
            { title: "DSA Foundations", body: "Concept notes and patterns for each topic.", pageId: "coding-dsa-concepts", trackId: "coding" },
            { title: "Company Focus", body: "Pick a target company and drill their most frequently asked questions.", pageId: "coding-company-focus", trackId: "coding" },
          ]
        }
      ]
    },

    "coding-dsa-concepts": {
      id: "coding-dsa-concepts",
      breadcrumb: ["Coding", "DSA Foundations"],
      eyebrow: "Coding Interview Prep",
      title: "DSA Foundations",
      lead: "Dummy content for now — list the concepts and what to know for interviews.",
      content: [
        { type: "divider" },
        { type: "heading2", text: "Core concepts checklist" },
        {
          type: "unordered-list",
          items: [
            "Arrays & Hashing",
            "Strings",
            "Two Pointers / Sliding Window",
            "Stacks / Monotonic Stack",
            "Linked Lists",
            "Recursion & Backtracking",
            "Binary Search",
            "Trees (DFS/BFS, BST basics)",
            "Graphs (BFS/DFS, Topo sort, Union Find basics)",
            "Heaps / Priority Queue",
            "Greedy",
            "Dynamic Programming (1D/2D patterns)"
          ]
        },
        { type: "paragraph", text: "TODO: For each concept, add: when to use it, common patterns, and 3–8 representative problems." }
      ]
    },

    "coding-f50": {
      id: "coding-f50",
      breadcrumb: ["Coding", "Foundations Track", "Quick Start — 50"],
      eyebrow: "Foundations Track",
      title: "Quick Start — 50",
      lead: "The 50 highest-leverage problems. If your interview is in 2 weeks, start here and do nothing else.",
      content: [
        { type: "divider" },
        { type: "heading2", text: "Progress" },
        {
          type: "progress-dashboard", variant: "leetcode",
          scopeKey: "coding-f50",
          title: "Quick Start — 50",
          subtitle: "One problem per topic. Hit all the patterns fast.",
          sections: [
            { title: "Arrays & Hashing", items: [
              { name: "Two Sum", url: "https://leetcode.com/problems/two-sum/", difficulty: "Easy" },
              { name: "Contains Duplicate", url: "https://leetcode.com/problems/contains-duplicate/", difficulty: "Easy" },
              { name: "Product of Array Except Self", url: "https://leetcode.com/problems/product-of-array-except-self/", difficulty: "Medium" },
              { name: "Top K Frequent Elements", url: "https://leetcode.com/problems/top-k-frequent-elements/", difficulty: "Medium" },
              { name: "Longest Consecutive Sequence", url: "https://leetcode.com/problems/longest-consecutive-sequence/", difficulty: "Medium" }
            ]},
            { title: "Two Pointers & Sliding Window", items: [
              { name: "Valid Palindrome", url: "https://leetcode.com/problems/valid-palindrome/", difficulty: "Easy" },
              { name: "Best Time to Buy and Sell Stock", url: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/", difficulty: "Easy" },
              { name: "3Sum", url: "https://leetcode.com/problems/3sum/", difficulty: "Medium" },
              { name: "Longest Substring Without Repeating Characters", url: "https://leetcode.com/problems/longest-substring-without-repeating-characters/", difficulty: "Medium" },
              { name: "Minimum Window Substring", url: "https://leetcode.com/problems/minimum-window-substring/", difficulty: "Hard" }
            ]},
            { title: "Stacks", items: [
              { name: "Valid Parentheses", url: "https://leetcode.com/problems/valid-parentheses/", difficulty: "Easy" },
              { name: "Min Stack", url: "https://leetcode.com/problems/min-stack/", difficulty: "Medium" },
              { name: "Daily Temperatures", url: "https://leetcode.com/problems/daily-temperatures/", difficulty: "Medium" }
            ]},
            { title: "Linked Lists", items: [
              { name: "Reverse Linked List", url: "https://leetcode.com/problems/reverse-linked-list/", difficulty: "Easy" },
              { name: "Merge Two Sorted Lists", url: "https://leetcode.com/problems/merge-two-sorted-lists/", difficulty: "Easy" },
              { name: "Linked List Cycle", url: "https://leetcode.com/problems/linked-list-cycle/", difficulty: "Easy" }
            ]},
            { title: "Binary Search", items: [
              { name: "Binary Search", url: "https://leetcode.com/problems/binary-search/", difficulty: "Easy" },
              { name: "Search in Rotated Sorted Array", url: "https://leetcode.com/problems/search-in-rotated-sorted-array/", difficulty: "Medium" },
              { name: "Find Minimum in Rotated Sorted Array", url: "https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/", difficulty: "Medium" }
            ]},
            { title: "Trees", items: [
              { name: "Invert Binary Tree", url: "https://leetcode.com/problems/invert-binary-tree/", difficulty: "Easy" },
              { name: "Maximum Depth of Binary Tree", url: "https://leetcode.com/problems/maximum-depth-of-binary-tree/", difficulty: "Easy" },
              { name: "Binary Tree Level Order Traversal", url: "https://leetcode.com/problems/binary-tree-level-order-traversal/", difficulty: "Medium" },
              { name: "Validate Binary Search Tree", url: "https://leetcode.com/problems/validate-binary-search-tree/", difficulty: "Medium" },
              { name: "Binary Tree Maximum Path Sum", url: "https://leetcode.com/problems/binary-tree-maximum-path-sum/", difficulty: "Hard" }
            ]},
            { title: "Graphs", items: [
              { name: "Number of Islands", url: "https://leetcode.com/problems/number-of-islands/", difficulty: "Medium" },
              { name: "Course Schedule", url: "https://leetcode.com/problems/course-schedule/", difficulty: "Medium" },
              { name: "Word Ladder", url: "https://leetcode.com/problems/word-ladder/", difficulty: "Hard" }
            ]},
            { title: "Dynamic Programming", items: [
              { name: "Climbing Stairs", url: "https://leetcode.com/problems/climbing-stairs/", difficulty: "Easy" },
              { name: "House Robber", url: "https://leetcode.com/problems/house-robber/", difficulty: "Medium" },
              { name: "Coin Change", url: "https://leetcode.com/problems/coin-change/", difficulty: "Medium" },
              { name: "Longest Increasing Subsequence", url: "https://leetcode.com/problems/longest-increasing-subsequence/", difficulty: "Medium" },
              { name: "Word Break", url: "https://leetcode.com/problems/word-break/", difficulty: "Medium" }
            ]},
            { title: "Heaps & Backtracking", items: [
              { name: "Merge k Sorted Lists", url: "https://leetcode.com/problems/merge-k-sorted-lists/", difficulty: "Hard" },
              { name: "Find Median from Data Stream", url: "https://leetcode.com/problems/find-median-from-data-stream/", difficulty: "Hard" },
              { name: "Combination Sum", url: "https://leetcode.com/problems/combination-sum/", difficulty: "Medium" },
              { name: "Subsets", url: "https://leetcode.com/problems/subsets/", difficulty: "Medium" }
            ]}
          ]
        },
        { type: "questions-header", scopeKey: "coding-f50" },
        {
          type: "question-table", scopeKey: "coding-f50",
          sections: [
            { title: "Arrays & Hashing", items: [
              { name: "Two Sum", url: "https://leetcode.com/problems/two-sum/", difficulty: "Easy" },
              { name: "Contains Duplicate", url: "https://leetcode.com/problems/contains-duplicate/", difficulty: "Easy" },
              { name: "Product of Array Except Self", url: "https://leetcode.com/problems/product-of-array-except-self/", difficulty: "Medium" },
              { name: "Top K Frequent Elements", url: "https://leetcode.com/problems/top-k-frequent-elements/", difficulty: "Medium" },
              { name: "Longest Consecutive Sequence", url: "https://leetcode.com/problems/longest-consecutive-sequence/", difficulty: "Medium" }
            ]},
            { title: "Two Pointers & Sliding Window", items: [
              { name: "Valid Palindrome", url: "https://leetcode.com/problems/valid-palindrome/", difficulty: "Easy" },
              { name: "Best Time to Buy and Sell Stock", url: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/", difficulty: "Easy" },
              { name: "3Sum", url: "https://leetcode.com/problems/3sum/", difficulty: "Medium" },
              { name: "Longest Substring Without Repeating Characters", url: "https://leetcode.com/problems/longest-substring-without-repeating-characters/", difficulty: "Medium" },
              { name: "Minimum Window Substring", url: "https://leetcode.com/problems/minimum-window-substring/", difficulty: "Hard" }
            ]},
            { title: "Stacks", items: [
              { name: "Valid Parentheses", url: "https://leetcode.com/problems/valid-parentheses/", difficulty: "Easy" },
              { name: "Min Stack", url: "https://leetcode.com/problems/min-stack/", difficulty: "Medium" },
              { name: "Daily Temperatures", url: "https://leetcode.com/problems/daily-temperatures/", difficulty: "Medium" }
            ]},
            { title: "Linked Lists", items: [
              { name: "Reverse Linked List", url: "https://leetcode.com/problems/reverse-linked-list/", difficulty: "Easy" },
              { name: "Merge Two Sorted Lists", url: "https://leetcode.com/problems/merge-two-sorted-lists/", difficulty: "Easy" },
              { name: "Linked List Cycle", url: "https://leetcode.com/problems/linked-list-cycle/", difficulty: "Easy" }
            ]},
            { title: "Binary Search", items: [
              { name: "Binary Search", url: "https://leetcode.com/problems/binary-search/", difficulty: "Easy" },
              { name: "Search in Rotated Sorted Array", url: "https://leetcode.com/problems/search-in-rotated-sorted-array/", difficulty: "Medium" },
              { name: "Find Minimum in Rotated Sorted Array", url: "https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/", difficulty: "Medium" }
            ]},
            { title: "Trees", items: [
              { name: "Invert Binary Tree", url: "https://leetcode.com/problems/invert-binary-tree/", difficulty: "Easy" },
              { name: "Maximum Depth of Binary Tree", url: "https://leetcode.com/problems/maximum-depth-of-binary-tree/", difficulty: "Easy" },
              { name: "Binary Tree Level Order Traversal", url: "https://leetcode.com/problems/binary-tree-level-order-traversal/", difficulty: "Medium" },
              { name: "Validate Binary Search Tree", url: "https://leetcode.com/problems/validate-binary-search-tree/", difficulty: "Medium" },
              { name: "Binary Tree Maximum Path Sum", url: "https://leetcode.com/problems/binary-tree-maximum-path-sum/", difficulty: "Hard" }
            ]},
            { title: "Graphs", items: [
              { name: "Number of Islands", url: "https://leetcode.com/problems/number-of-islands/", difficulty: "Medium" },
              { name: "Course Schedule", url: "https://leetcode.com/problems/course-schedule/", difficulty: "Medium" },
              { name: "Word Ladder", url: "https://leetcode.com/problems/word-ladder/", difficulty: "Hard" }
            ]},
            { title: "Dynamic Programming", items: [
              { name: "Climbing Stairs", url: "https://leetcode.com/problems/climbing-stairs/", difficulty: "Easy" },
              { name: "House Robber", url: "https://leetcode.com/problems/house-robber/", difficulty: "Medium" },
              { name: "Coin Change", url: "https://leetcode.com/problems/coin-change/", difficulty: "Medium" },
              { name: "Longest Increasing Subsequence", url: "https://leetcode.com/problems/longest-increasing-subsequence/", difficulty: "Medium" },
              { name: "Word Break", url: "https://leetcode.com/problems/word-break/", difficulty: "Medium" }
            ]},
            { title: "Heaps & Backtracking", items: [
              { name: "Merge k Sorted Lists", url: "https://leetcode.com/problems/merge-k-sorted-lists/", difficulty: "Hard" },
              { name: "Find Median from Data Stream", url: "https://leetcode.com/problems/find-median-from-data-stream/", difficulty: "Hard" },
              { name: "Combination Sum", url: "https://leetcode.com/problems/combination-sum/", difficulty: "Medium" },
              { name: "Subsets", url: "https://leetcode.com/problems/subsets/", difficulty: "Medium" }
            ]}
          ]
        }
      ]
    },

    "coding-f100": {
      id: "coding-f100",
      breadcrumb: ["Coding", "Foundations Track", "Solid Base — 100"],
      eyebrow: "Foundations Track",
      title: "Solid Base — 100",
      lead: "100 problems covering every pattern with enough variety to build real intuition. Do this if you have 4 weeks.",
      content: [
        { type: "divider" },
        { type: "heading2", text: "Progress" },
        {
          type: "progress-dashboard", variant: "leetcode",
          scopeKey: "coding-f100",
          title: "Solid Base — 100",
          subtitle: "Two to three problems per pattern. Builds real intuition.",
          sections: [
            { title: "Arrays & Hashing", items: [
              { name: "Two Sum", url: "https://leetcode.com/problems/two-sum/", difficulty: "Easy" },
              { name: "Contains Duplicate", url: "https://leetcode.com/problems/contains-duplicate/", difficulty: "Easy" },
              { name: "Valid Anagram", url: "https://leetcode.com/problems/valid-anagram/", difficulty: "Easy" },
              { name: "Group Anagrams", url: "https://leetcode.com/problems/group-anagrams/", difficulty: "Medium" },
              { name: "Product of Array Except Self", url: "https://leetcode.com/problems/product-of-array-except-self/", difficulty: "Medium" },
              { name: "Subarray Sum Equals K", url: "https://leetcode.com/problems/subarray-sum-equals-k/", difficulty: "Medium" },
              { name: "Top K Frequent Elements", url: "https://leetcode.com/problems/top-k-frequent-elements/", difficulty: "Medium" },
              { name: "Longest Consecutive Sequence", url: "https://leetcode.com/problems/longest-consecutive-sequence/", difficulty: "Medium" }
            ]},
            { title: "Two Pointers & Sliding Window", items: [
              { name: "Valid Palindrome", url: "https://leetcode.com/problems/valid-palindrome/", difficulty: "Easy" },
              { name: "Best Time to Buy and Sell Stock", url: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/", difficulty: "Easy" },
              { name: "3Sum", url: "https://leetcode.com/problems/3sum/", difficulty: "Medium" },
              { name: "Container With Most Water", url: "https://leetcode.com/problems/container-with-most-water/", difficulty: "Medium" },
              { name: "Longest Substring Without Repeating Characters", url: "https://leetcode.com/problems/longest-substring-without-repeating-characters/", difficulty: "Medium" },
              { name: "Longest Repeating Character Replacement", url: "https://leetcode.com/problems/longest-repeating-character-replacement/", difficulty: "Medium" },
              { name: "Minimum Window Substring", url: "https://leetcode.com/problems/minimum-window-substring/", difficulty: "Hard" },
              { name: "Sliding Window Maximum", url: "https://leetcode.com/problems/sliding-window-maximum/", difficulty: "Hard" }
            ]},
            { title: "Stacks & Queues", items: [
              { name: "Valid Parentheses", url: "https://leetcode.com/problems/valid-parentheses/", difficulty: "Easy" },
              { name: "Min Stack", url: "https://leetcode.com/problems/min-stack/", difficulty: "Medium" },
              { name: "Daily Temperatures", url: "https://leetcode.com/problems/daily-temperatures/", difficulty: "Medium" },
              { name: "Evaluate Reverse Polish Notation", url: "https://leetcode.com/problems/evaluate-reverse-polish-notation/", difficulty: "Medium" },
              { name: "Largest Rectangle in Histogram", url: "https://leetcode.com/problems/largest-rectangle-in-histogram/", difficulty: "Hard" }
            ]},
            { title: "Linked Lists", items: [
              { name: "Reverse Linked List", url: "https://leetcode.com/problems/reverse-linked-list/", difficulty: "Easy" },
              { name: "Merge Two Sorted Lists", url: "https://leetcode.com/problems/merge-two-sorted-lists/", difficulty: "Easy" },
              { name: "Linked List Cycle", url: "https://leetcode.com/problems/linked-list-cycle/", difficulty: "Easy" },
              { name: "Reorder List", url: "https://leetcode.com/problems/reorder-list/", difficulty: "Medium" },
              { name: "Remove Nth Node From End", url: "https://leetcode.com/problems/remove-nth-node-from-end-of-list/", difficulty: "Medium" },
              { name: "Copy List with Random Pointer", url: "https://leetcode.com/problems/copy-list-with-random-pointer/", difficulty: "Medium" }
            ]},
            { title: "Binary Search", items: [
              { name: "Binary Search", url: "https://leetcode.com/problems/binary-search/", difficulty: "Easy" },
              { name: "Find Minimum in Rotated Sorted Array", url: "https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/", difficulty: "Medium" },
              { name: "Search in Rotated Sorted Array", url: "https://leetcode.com/problems/search-in-rotated-sorted-array/", difficulty: "Medium" },
              { name: "Time Based Key-Value Store", url: "https://leetcode.com/problems/time-based-key-value-store/", difficulty: "Medium" },
              { name: "Median of Two Sorted Arrays", url: "https://leetcode.com/problems/median-of-two-sorted-arrays/", difficulty: "Hard" }
            ]},
            { title: "Trees", items: [
              { name: "Invert Binary Tree", url: "https://leetcode.com/problems/invert-binary-tree/", difficulty: "Easy" },
              { name: "Maximum Depth of Binary Tree", url: "https://leetcode.com/problems/maximum-depth-of-binary-tree/", difficulty: "Easy" },
              { name: "Diameter of Binary Tree", url: "https://leetcode.com/problems/diameter-of-binary-tree/", difficulty: "Easy" },
              { name: "Balanced Binary Tree", url: "https://leetcode.com/problems/balanced-binary-tree/", difficulty: "Easy" },
              { name: "Binary Tree Level Order Traversal", url: "https://leetcode.com/problems/binary-tree-level-order-traversal/", difficulty: "Medium" },
              { name: "Validate Binary Search Tree", url: "https://leetcode.com/problems/validate-binary-search-tree/", difficulty: "Medium" },
              { name: "Lowest Common Ancestor of a Binary Tree", url: "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/", difficulty: "Medium" },
              { name: "Right Side View", url: "https://leetcode.com/problems/binary-tree-right-side-view/", difficulty: "Medium" },
              { name: "Binary Tree Maximum Path Sum", url: "https://leetcode.com/problems/binary-tree-maximum-path-sum/", difficulty: "Hard" }
            ]},
            { title: "Graphs", items: [
              { name: "Number of Islands", url: "https://leetcode.com/problems/number-of-islands/", difficulty: "Medium" },
              { name: "Clone Graph", url: "https://leetcode.com/problems/clone-graph/", difficulty: "Medium" },
              { name: "Pacific Atlantic Water Flow", url: "https://leetcode.com/problems/pacific-atlantic-water-flow/", difficulty: "Medium" },
              { name: "Course Schedule", url: "https://leetcode.com/problems/course-schedule/", difficulty: "Medium" },
              { name: "Course Schedule II", url: "https://leetcode.com/problems/course-schedule-ii/", difficulty: "Medium" },
              { name: "Word Ladder", url: "https://leetcode.com/problems/word-ladder/", difficulty: "Hard" }
            ]},
            { title: "Heaps", items: [
              { name: "Kth Largest Element in a Stream", url: "https://leetcode.com/problems/kth-largest-element-in-a-stream/", difficulty: "Easy" },
              { name: "Top K Frequent Elements", url: "https://leetcode.com/problems/top-k-frequent-elements/", difficulty: "Medium" },
              { name: "Kth Largest Element in an Array", url: "https://leetcode.com/problems/kth-largest-element-in-an-array/", difficulty: "Medium" },
              { name: "Task Scheduler", url: "https://leetcode.com/problems/task-scheduler/", difficulty: "Medium" },
              { name: "Merge k Sorted Lists", url: "https://leetcode.com/problems/merge-k-sorted-lists/", difficulty: "Hard" },
              { name: "Find Median from Data Stream", url: "https://leetcode.com/problems/find-median-from-data-stream/", difficulty: "Hard" }
            ]},
            { title: "Dynamic Programming", items: [
              { name: "Climbing Stairs", url: "https://leetcode.com/problems/climbing-stairs/", difficulty: "Easy" },
              { name: "House Robber", url: "https://leetcode.com/problems/house-robber/", difficulty: "Medium" },
              { name: "House Robber II", url: "https://leetcode.com/problems/house-robber-ii/", difficulty: "Medium" },
              { name: "Coin Change", url: "https://leetcode.com/problems/coin-change/", difficulty: "Medium" },
              { name: "Longest Increasing Subsequence", url: "https://leetcode.com/problems/longest-increasing-subsequence/", difficulty: "Medium" },
              { name: "Word Break", url: "https://leetcode.com/problems/word-break/", difficulty: "Medium" },
              { name: "Unique Paths", url: "https://leetcode.com/problems/unique-paths/", difficulty: "Medium" },
              { name: "Partition Equal Subset Sum", url: "https://leetcode.com/problems/partition-equal-subset-sum/", difficulty: "Medium" }
            ]},
            { title: "Backtracking", items: [
              { name: "Subsets", url: "https://leetcode.com/problems/subsets/", difficulty: "Medium" },
              { name: "Permutations", url: "https://leetcode.com/problems/permutations/", difficulty: "Medium" },
              { name: "Combination Sum", url: "https://leetcode.com/problems/combination-sum/", difficulty: "Medium" },
              { name: "Letter Combinations of a Phone Number", url: "https://leetcode.com/problems/letter-combinations-of-a-phone-number/", difficulty: "Medium" },
              { name: "N-Queens", url: "https://leetcode.com/problems/n-queens/", difficulty: "Hard" }
            ]}
          ]
        },
        { type: "questions-header", scopeKey: "coding-f100" },
        {
          type: "question-table", scopeKey: "coding-f100",
          sections: [
            { title: "Arrays & Hashing", items: [
              { name: "Two Sum", url: "https://leetcode.com/problems/two-sum/", difficulty: "Easy" },
              { name: "Contains Duplicate", url: "https://leetcode.com/problems/contains-duplicate/", difficulty: "Easy" },
              { name: "Valid Anagram", url: "https://leetcode.com/problems/valid-anagram/", difficulty: "Easy" },
              { name: "Group Anagrams", url: "https://leetcode.com/problems/group-anagrams/", difficulty: "Medium" },
              { name: "Product of Array Except Self", url: "https://leetcode.com/problems/product-of-array-except-self/", difficulty: "Medium" },
              { name: "Subarray Sum Equals K", url: "https://leetcode.com/problems/subarray-sum-equals-k/", difficulty: "Medium" },
              { name: "Top K Frequent Elements", url: "https://leetcode.com/problems/top-k-frequent-elements/", difficulty: "Medium" },
              { name: "Longest Consecutive Sequence", url: "https://leetcode.com/problems/longest-consecutive-sequence/", difficulty: "Medium" }
            ]},
            { title: "Two Pointers & Sliding Window", items: [
              { name: "Valid Palindrome", url: "https://leetcode.com/problems/valid-palindrome/", difficulty: "Easy" },
              { name: "Best Time to Buy and Sell Stock", url: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/", difficulty: "Easy" },
              { name: "3Sum", url: "https://leetcode.com/problems/3sum/", difficulty: "Medium" },
              { name: "Container With Most Water", url: "https://leetcode.com/problems/container-with-most-water/", difficulty: "Medium" },
              { name: "Longest Substring Without Repeating Characters", url: "https://leetcode.com/problems/longest-substring-without-repeating-characters/", difficulty: "Medium" },
              { name: "Longest Repeating Character Replacement", url: "https://leetcode.com/problems/longest-repeating-character-replacement/", difficulty: "Medium" },
              { name: "Minimum Window Substring", url: "https://leetcode.com/problems/minimum-window-substring/", difficulty: "Hard" },
              { name: "Sliding Window Maximum", url: "https://leetcode.com/problems/sliding-window-maximum/", difficulty: "Hard" }
            ]},
            { title: "Stacks & Queues", items: [
              { name: "Valid Parentheses", url: "https://leetcode.com/problems/valid-parentheses/", difficulty: "Easy" },
              { name: "Min Stack", url: "https://leetcode.com/problems/min-stack/", difficulty: "Medium" },
              { name: "Daily Temperatures", url: "https://leetcode.com/problems/daily-temperatures/", difficulty: "Medium" },
              { name: "Evaluate Reverse Polish Notation", url: "https://leetcode.com/problems/evaluate-reverse-polish-notation/", difficulty: "Medium" },
              { name: "Largest Rectangle in Histogram", url: "https://leetcode.com/problems/largest-rectangle-in-histogram/", difficulty: "Hard" }
            ]},
            { title: "Linked Lists", items: [
              { name: "Reverse Linked List", url: "https://leetcode.com/problems/reverse-linked-list/", difficulty: "Easy" },
              { name: "Merge Two Sorted Lists", url: "https://leetcode.com/problems/merge-two-sorted-lists/", difficulty: "Easy" },
              { name: "Linked List Cycle", url: "https://leetcode.com/problems/linked-list-cycle/", difficulty: "Easy" },
              { name: "Reorder List", url: "https://leetcode.com/problems/reorder-list/", difficulty: "Medium" },
              { name: "Remove Nth Node From End", url: "https://leetcode.com/problems/remove-nth-node-from-end-of-list/", difficulty: "Medium" },
              { name: "Copy List with Random Pointer", url: "https://leetcode.com/problems/copy-list-with-random-pointer/", difficulty: "Medium" }
            ]},
            { title: "Binary Search", items: [
              { name: "Binary Search", url: "https://leetcode.com/problems/binary-search/", difficulty: "Easy" },
              { name: "Find Minimum in Rotated Sorted Array", url: "https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/", difficulty: "Medium" },
              { name: "Search in Rotated Sorted Array", url: "https://leetcode.com/problems/search-in-rotated-sorted-array/", difficulty: "Medium" },
              { name: "Time Based Key-Value Store", url: "https://leetcode.com/problems/time-based-key-value-store/", difficulty: "Medium" },
              { name: "Median of Two Sorted Arrays", url: "https://leetcode.com/problems/median-of-two-sorted-arrays/", difficulty: "Hard" }
            ]},
            { title: "Trees", items: [
              { name: "Invert Binary Tree", url: "https://leetcode.com/problems/invert-binary-tree/", difficulty: "Easy" },
              { name: "Maximum Depth of Binary Tree", url: "https://leetcode.com/problems/maximum-depth-of-binary-tree/", difficulty: "Easy" },
              { name: "Diameter of Binary Tree", url: "https://leetcode.com/problems/diameter-of-binary-tree/", difficulty: "Easy" },
              { name: "Balanced Binary Tree", url: "https://leetcode.com/problems/balanced-binary-tree/", difficulty: "Easy" },
              { name: "Binary Tree Level Order Traversal", url: "https://leetcode.com/problems/binary-tree-level-order-traversal/", difficulty: "Medium" },
              { name: "Validate Binary Search Tree", url: "https://leetcode.com/problems/validate-binary-search-tree/", difficulty: "Medium" },
              { name: "Lowest Common Ancestor of a Binary Tree", url: "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/", difficulty: "Medium" },
              { name: "Right Side View", url: "https://leetcode.com/problems/binary-tree-right-side-view/", difficulty: "Medium" },
              { name: "Binary Tree Maximum Path Sum", url: "https://leetcode.com/problems/binary-tree-maximum-path-sum/", difficulty: "Hard" }
            ]},
            { title: "Graphs", items: [
              { name: "Number of Islands", url: "https://leetcode.com/problems/number-of-islands/", difficulty: "Medium" },
              { name: "Clone Graph", url: "https://leetcode.com/problems/clone-graph/", difficulty: "Medium" },
              { name: "Pacific Atlantic Water Flow", url: "https://leetcode.com/problems/pacific-atlantic-water-flow/", difficulty: "Medium" },
              { name: "Course Schedule", url: "https://leetcode.com/problems/course-schedule/", difficulty: "Medium" },
              { name: "Course Schedule II", url: "https://leetcode.com/problems/course-schedule-ii/", difficulty: "Medium" },
              { name: "Word Ladder", url: "https://leetcode.com/problems/word-ladder/", difficulty: "Hard" }
            ]},
            { title: "Heaps", items: [
              { name: "Kth Largest Element in a Stream", url: "https://leetcode.com/problems/kth-largest-element-in-a-stream/", difficulty: "Easy" },
              { name: "Top K Frequent Elements", url: "https://leetcode.com/problems/top-k-frequent-elements/", difficulty: "Medium" },
              { name: "Kth Largest Element in an Array", url: "https://leetcode.com/problems/kth-largest-element-in-an-array/", difficulty: "Medium" },
              { name: "Task Scheduler", url: "https://leetcode.com/problems/task-scheduler/", difficulty: "Medium" },
              { name: "Merge k Sorted Lists", url: "https://leetcode.com/problems/merge-k-sorted-lists/", difficulty: "Hard" },
              { name: "Find Median from Data Stream", url: "https://leetcode.com/problems/find-median-from-data-stream/", difficulty: "Hard" }
            ]},
            { title: "Dynamic Programming", items: [
              { name: "Climbing Stairs", url: "https://leetcode.com/problems/climbing-stairs/", difficulty: "Easy" },
              { name: "House Robber", url: "https://leetcode.com/problems/house-robber/", difficulty: "Medium" },
              { name: "House Robber II", url: "https://leetcode.com/problems/house-robber-ii/", difficulty: "Medium" },
              { name: "Coin Change", url: "https://leetcode.com/problems/coin-change/", difficulty: "Medium" },
              { name: "Longest Increasing Subsequence", url: "https://leetcode.com/problems/longest-increasing-subsequence/", difficulty: "Medium" },
              { name: "Word Break", url: "https://leetcode.com/problems/word-break/", difficulty: "Medium" },
              { name: "Unique Paths", url: "https://leetcode.com/problems/unique-paths/", difficulty: "Medium" },
              { name: "Partition Equal Subset Sum", url: "https://leetcode.com/problems/partition-equal-subset-sum/", difficulty: "Medium" }
            ]},
            { title: "Backtracking", items: [
              { name: "Subsets", url: "https://leetcode.com/problems/subsets/", difficulty: "Medium" },
              { name: "Permutations", url: "https://leetcode.com/problems/permutations/", difficulty: "Medium" },
              { name: "Combination Sum", url: "https://leetcode.com/problems/combination-sum/", difficulty: "Medium" },
              { name: "Letter Combinations of a Phone Number", url: "https://leetcode.com/problems/letter-combinations-of-a-phone-number/", difficulty: "Medium" },
              { name: "N-Queens", url: "https://leetcode.com/problems/n-queens/", difficulty: "Hard" }
            ]}
          ]
        }
      ]
    },

    "coding-f150": {
      id: "coding-f150",
      breadcrumb: ["Coding", "Foundations Track", "Full Prep — 150"],
      eyebrow: "Foundations Track",
      title: "Full Prep — 150",
      lead: "Deep coverage with no blind spots. Do this if you have 6–8 weeks and want to walk in fully prepared.",
      content: [
        { type: "divider" },
        { type: "heading2", text: "Progress" },
        {
          type: "progress-dashboard", variant: "leetcode",
          scopeKey: "coding-f150",
          title: "Full Prep — 150",
          subtitle: "Complete coverage. Every pattern, every edge case.",
          sections: [
            { title: "Arrays & Hashing", items: [
              { name: "Two Sum", url: "https://leetcode.com/problems/two-sum/", difficulty: "Easy" },
              { name: "Contains Duplicate", url: "https://leetcode.com/problems/contains-duplicate/", difficulty: "Easy" },
              { name: "Valid Anagram", url: "https://leetcode.com/problems/valid-anagram/", difficulty: "Easy" },
              { name: "Group Anagrams", url: "https://leetcode.com/problems/group-anagrams/", difficulty: "Medium" },
              { name: "Product of Array Except Self", url: "https://leetcode.com/problems/product-of-array-except-self/", difficulty: "Medium" },
              { name: "Subarray Sum Equals K", url: "https://leetcode.com/problems/subarray-sum-equals-k/", difficulty: "Medium" },
              { name: "Top K Frequent Elements", url: "https://leetcode.com/problems/top-k-frequent-elements/", difficulty: "Medium" },
              { name: "Encode and Decode Strings", url: "https://leetcode.com/problems/encode-and-decode-strings/", difficulty: "Medium" },
              { name: "Longest Consecutive Sequence", url: "https://leetcode.com/problems/longest-consecutive-sequence/", difficulty: "Medium" },
              { name: "Trapping Rain Water", url: "https://leetcode.com/problems/trapping-rain-water/", difficulty: "Hard" }
            ]},
            { title: "Two Pointers & Sliding Window", items: [
              { name: "Valid Palindrome", url: "https://leetcode.com/problems/valid-palindrome/", difficulty: "Easy" },
              { name: "Best Time to Buy and Sell Stock", url: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/", difficulty: "Easy" },
              { name: "3Sum", url: "https://leetcode.com/problems/3sum/", difficulty: "Medium" },
              { name: "Container With Most Water", url: "https://leetcode.com/problems/container-with-most-water/", difficulty: "Medium" },
              { name: "Longest Substring Without Repeating Characters", url: "https://leetcode.com/problems/longest-substring-without-repeating-characters/", difficulty: "Medium" },
              { name: "Longest Repeating Character Replacement", url: "https://leetcode.com/problems/longest-repeating-character-replacement/", difficulty: "Medium" },
              { name: "Permutation in String", url: "https://leetcode.com/problems/permutation-in-string/", difficulty: "Medium" },
              { name: "Minimum Window Substring", url: "https://leetcode.com/problems/minimum-window-substring/", difficulty: "Hard" },
              { name: "Sliding Window Maximum", url: "https://leetcode.com/problems/sliding-window-maximum/", difficulty: "Hard" }
            ]},
            { title: "Stacks & Queues", items: [
              { name: "Valid Parentheses", url: "https://leetcode.com/problems/valid-parentheses/", difficulty: "Easy" },
              { name: "Min Stack", url: "https://leetcode.com/problems/min-stack/", difficulty: "Medium" },
              { name: "Daily Temperatures", url: "https://leetcode.com/problems/daily-temperatures/", difficulty: "Medium" },
              { name: "Evaluate Reverse Polish Notation", url: "https://leetcode.com/problems/evaluate-reverse-polish-notation/", difficulty: "Medium" },
              { name: "Car Fleet", url: "https://leetcode.com/problems/car-fleet/", difficulty: "Medium" },
              { name: "Largest Rectangle in Histogram", url: "https://leetcode.com/problems/largest-rectangle-in-histogram/", difficulty: "Hard" }
            ]},
            { title: "Linked Lists", items: [
              { name: "Reverse Linked List", url: "https://leetcode.com/problems/reverse-linked-list/", difficulty: "Easy" },
              { name: "Merge Two Sorted Lists", url: "https://leetcode.com/problems/merge-two-sorted-lists/", difficulty: "Easy" },
              { name: "Linked List Cycle", url: "https://leetcode.com/problems/linked-list-cycle/", difficulty: "Easy" },
              { name: "Reorder List", url: "https://leetcode.com/problems/reorder-list/", difficulty: "Medium" },
              { name: "Remove Nth Node From End", url: "https://leetcode.com/problems/remove-nth-node-from-end-of-list/", difficulty: "Medium" },
              { name: "Copy List with Random Pointer", url: "https://leetcode.com/problems/copy-list-with-random-pointer/", difficulty: "Medium" },
              { name: "Add Two Numbers", url: "https://leetcode.com/problems/add-two-numbers/", difficulty: "Medium" },
              { name: "Find the Duplicate Number", url: "https://leetcode.com/problems/find-the-duplicate-number/", difficulty: "Medium" },
              { name: "Reverse Nodes in k-Group", url: "https://leetcode.com/problems/reverse-nodes-in-k-group/", difficulty: "Hard" }
            ]},
            { title: "Binary Search", items: [
              { name: "Binary Search", url: "https://leetcode.com/problems/binary-search/", difficulty: "Easy" },
              { name: "Find Minimum in Rotated Sorted Array", url: "https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/", difficulty: "Medium" },
              { name: "Search in Rotated Sorted Array", url: "https://leetcode.com/problems/search-in-rotated-sorted-array/", difficulty: "Medium" },
              { name: "Koko Eating Bananas", url: "https://leetcode.com/problems/koko-eating-bananas/", difficulty: "Medium" },
              { name: "Time Based Key-Value Store", url: "https://leetcode.com/problems/time-based-key-value-store/", difficulty: "Medium" },
              { name: "Search a 2D Matrix", url: "https://leetcode.com/problems/search-a-2d-matrix/", difficulty: "Medium" },
              { name: "Median of Two Sorted Arrays", url: "https://leetcode.com/problems/median-of-two-sorted-arrays/", difficulty: "Hard" }
            ]},
            { title: "Trees", items: [
              { name: "Invert Binary Tree", url: "https://leetcode.com/problems/invert-binary-tree/", difficulty: "Easy" },
              { name: "Maximum Depth of Binary Tree", url: "https://leetcode.com/problems/maximum-depth-of-binary-tree/", difficulty: "Easy" },
              { name: "Diameter of Binary Tree", url: "https://leetcode.com/problems/diameter-of-binary-tree/", difficulty: "Easy" },
              { name: "Balanced Binary Tree", url: "https://leetcode.com/problems/balanced-binary-tree/", difficulty: "Easy" },
              { name: "Same Tree", url: "https://leetcode.com/problems/same-tree/", difficulty: "Easy" },
              { name: "Subtree of Another Tree", url: "https://leetcode.com/problems/subtree-of-another-tree/", difficulty: "Easy" },
              { name: "Binary Tree Level Order Traversal", url: "https://leetcode.com/problems/binary-tree-level-order-traversal/", difficulty: "Medium" },
              { name: "Validate Binary Search Tree", url: "https://leetcode.com/problems/validate-binary-search-tree/", difficulty: "Medium" },
              { name: "Lowest Common Ancestor of a Binary Tree", url: "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/", difficulty: "Medium" },
              { name: "Right Side View", url: "https://leetcode.com/problems/binary-tree-right-side-view/", difficulty: "Medium" },
              { name: "Count Good Nodes in Binary Tree", url: "https://leetcode.com/problems/count-good-nodes-in-binary-tree/", difficulty: "Medium" },
              { name: "Kth Smallest in BST", url: "https://leetcode.com/problems/kth-smallest-element-in-a-bst/", difficulty: "Medium" },
              { name: "Construct Binary Tree from Preorder and Inorder", url: "https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/", difficulty: "Medium" },
              { name: "Binary Tree Maximum Path Sum", url: "https://leetcode.com/problems/binary-tree-maximum-path-sum/", difficulty: "Hard" },
              { name: "Serialize and Deserialize Binary Tree", url: "https://leetcode.com/problems/serialize-and-deserialize-binary-tree/", difficulty: "Hard" }
            ]},
            { title: "Tries", items: [
              { name: "Implement Trie", url: "https://leetcode.com/problems/implement-trie-prefix-tree/", difficulty: "Medium" },
              { name: "Design Add and Search Words", url: "https://leetcode.com/problems/design-add-and-search-words-data-structure/", difficulty: "Medium" },
              { name: "Word Search II", url: "https://leetcode.com/problems/word-search-ii/", difficulty: "Hard" }
            ]},
            { title: "Graphs", items: [
              { name: "Number of Islands", url: "https://leetcode.com/problems/number-of-islands/", difficulty: "Medium" },
              { name: "Clone Graph", url: "https://leetcode.com/problems/clone-graph/", difficulty: "Medium" },
              { name: "Max Area of Island", url: "https://leetcode.com/problems/max-area-of-island/", difficulty: "Medium" },
              { name: "Pacific Atlantic Water Flow", url: "https://leetcode.com/problems/pacific-atlantic-water-flow/", difficulty: "Medium" },
              { name: "Surrounded Regions", url: "https://leetcode.com/problems/surrounded-regions/", difficulty: "Medium" },
              { name: "Rotting Oranges", url: "https://leetcode.com/problems/rotting-oranges/", difficulty: "Medium" },
              { name: "Walls and Gates", url: "https://leetcode.com/problems/walls-and-gates/", difficulty: "Medium" },
              { name: "Course Schedule", url: "https://leetcode.com/problems/course-schedule/", difficulty: "Medium" },
              { name: "Course Schedule II", url: "https://leetcode.com/problems/course-schedule-ii/", difficulty: "Medium" },
              { name: "Redundant Connection", url: "https://leetcode.com/problems/redundant-connection/", difficulty: "Medium" },
              { name: "Word Ladder", url: "https://leetcode.com/problems/word-ladder/", difficulty: "Hard" }
            ]},
            { title: "Heaps & Priority Queues", items: [
              { name: "Kth Largest Element in a Stream", url: "https://leetcode.com/problems/kth-largest-element-in-a-stream/", difficulty: "Easy" },
              { name: "Last Stone Weight", url: "https://leetcode.com/problems/last-stone-weight/", difficulty: "Easy" },
              { name: "Top K Frequent Elements", url: "https://leetcode.com/problems/top-k-frequent-elements/", difficulty: "Medium" },
              { name: "Kth Largest Element in an Array", url: "https://leetcode.com/problems/kth-largest-element-in-an-array/", difficulty: "Medium" },
              { name: "Task Scheduler", url: "https://leetcode.com/problems/task-scheduler/", difficulty: "Medium" },
              { name: "K Closest Points to Origin", url: "https://leetcode.com/problems/k-closest-points-to-origin/", difficulty: "Medium" },
              { name: "Design Twitter", url: "https://leetcode.com/problems/design-twitter/", difficulty: "Medium" },
              { name: "Merge k Sorted Lists", url: "https://leetcode.com/problems/merge-k-sorted-lists/", difficulty: "Hard" },
              { name: "Find Median from Data Stream", url: "https://leetcode.com/problems/find-median-from-data-stream/", difficulty: "Hard" }
            ]},
            { title: "Dynamic Programming", items: [
              { name: "Climbing Stairs", url: "https://leetcode.com/problems/climbing-stairs/", difficulty: "Easy" },
              { name: "Min Cost Climbing Stairs", url: "https://leetcode.com/problems/min-cost-climbing-stairs/", difficulty: "Easy" },
              { name: "House Robber", url: "https://leetcode.com/problems/house-robber/", difficulty: "Medium" },
              { name: "House Robber II", url: "https://leetcode.com/problems/house-robber-ii/", difficulty: "Medium" },
              { name: "Coin Change", url: "https://leetcode.com/problems/coin-change/", difficulty: "Medium" },
              { name: "Longest Increasing Subsequence", url: "https://leetcode.com/problems/longest-increasing-subsequence/", difficulty: "Medium" },
              { name: "Unique Paths", url: "https://leetcode.com/problems/unique-paths/", difficulty: "Medium" },
              { name: "Jump Game", url: "https://leetcode.com/problems/jump-game/", difficulty: "Medium" },
              { name: "Word Break", url: "https://leetcode.com/problems/word-break/", difficulty: "Medium" },
              { name: "Partition Equal Subset Sum", url: "https://leetcode.com/problems/partition-equal-subset-sum/", difficulty: "Medium" },
              { name: "Decode Ways", url: "https://leetcode.com/problems/decode-ways/", difficulty: "Medium" },
              { name: "Longest Common Subsequence", url: "https://leetcode.com/problems/longest-common-subsequence/", difficulty: "Medium" },
              { name: "Edit Distance", url: "https://leetcode.com/problems/edit-distance/", difficulty: "Medium" },
              { name: "Burst Balloons", url: "https://leetcode.com/problems/burst-balloons/", difficulty: "Hard" }
            ]},
            { title: "Backtracking", items: [
              { name: "Subsets", url: "https://leetcode.com/problems/subsets/", difficulty: "Medium" },
              { name: "Subsets II", url: "https://leetcode.com/problems/subsets-ii/", difficulty: "Medium" },
              { name: "Permutations", url: "https://leetcode.com/problems/permutations/", difficulty: "Medium" },
              { name: "Combination Sum", url: "https://leetcode.com/problems/combination-sum/", difficulty: "Medium" },
              { name: "Combination Sum II", url: "https://leetcode.com/problems/combination-sum-ii/", difficulty: "Medium" },
              { name: "Letter Combinations of a Phone Number", url: "https://leetcode.com/problems/letter-combinations-of-a-phone-number/", difficulty: "Medium" },
              { name: "Word Search", url: "https://leetcode.com/problems/word-search/", difficulty: "Medium" },
              { name: "Palindrome Partitioning", url: "https://leetcode.com/problems/palindrome-partitioning/", difficulty: "Medium" },
              { name: "N-Queens", url: "https://leetcode.com/problems/n-queens/", difficulty: "Hard" }
            ]},
            { title: "Intervals & Greedy", items: [
              { name: "Meeting Rooms", url: "https://leetcode.com/problems/meeting-rooms/", difficulty: "Easy" },
              { name: "Merge Intervals", url: "https://leetcode.com/problems/merge-intervals/", difficulty: "Medium" },
              { name: "Insert Interval", url: "https://leetcode.com/problems/insert-interval/", difficulty: "Medium" },
              { name: "Non-overlapping Intervals", url: "https://leetcode.com/problems/non-overlapping-intervals/", difficulty: "Medium" },
              { name: "Meeting Rooms II", url: "https://leetcode.com/problems/meeting-rooms-ii/", difficulty: "Medium" },
              { name: "Jump Game II", url: "https://leetcode.com/problems/jump-game-ii/", difficulty: "Medium" }
            ]},
            { title: "Bit Manipulation", items: [
              { name: "Number of 1 Bits", url: "https://leetcode.com/problems/number-of-1-bits/", difficulty: "Easy" },
              { name: "Counting Bits", url: "https://leetcode.com/problems/counting-bits/", difficulty: "Easy" },
              { name: "Reverse Bits", url: "https://leetcode.com/problems/reverse-bits/", difficulty: "Easy" },
              { name: "Missing Number", url: "https://leetcode.com/problems/missing-number/", difficulty: "Easy" },
              { name: "Sum of Two Integers", url: "https://leetcode.com/problems/sum-of-two-integers/", difficulty: "Medium" }
            ]}
          ]
        },
        { type: "questions-header", scopeKey: "coding-f150" },
        {
          type: "question-table", scopeKey: "coding-f150",
          sections: [
            { title: "Arrays & Hashing", items: [
              { name: "Two Sum", url: "https://leetcode.com/problems/two-sum/", difficulty: "Easy" },
              { name: "Contains Duplicate", url: "https://leetcode.com/problems/contains-duplicate/", difficulty: "Easy" },
              { name: "Valid Anagram", url: "https://leetcode.com/problems/valid-anagram/", difficulty: "Easy" },
              { name: "Group Anagrams", url: "https://leetcode.com/problems/group-anagrams/", difficulty: "Medium" },
              { name: "Product of Array Except Self", url: "https://leetcode.com/problems/product-of-array-except-self/", difficulty: "Medium" },
              { name: "Subarray Sum Equals K", url: "https://leetcode.com/problems/subarray-sum-equals-k/", difficulty: "Medium" },
              { name: "Top K Frequent Elements", url: "https://leetcode.com/problems/top-k-frequent-elements/", difficulty: "Medium" },
              { name: "Encode and Decode Strings", url: "https://leetcode.com/problems/encode-and-decode-strings/", difficulty: "Medium" },
              { name: "Longest Consecutive Sequence", url: "https://leetcode.com/problems/longest-consecutive-sequence/", difficulty: "Medium" },
              { name: "Trapping Rain Water", url: "https://leetcode.com/problems/trapping-rain-water/", difficulty: "Hard" }
            ]},
            { title: "Two Pointers & Sliding Window", items: [
              { name: "Valid Palindrome", url: "https://leetcode.com/problems/valid-palindrome/", difficulty: "Easy" },
              { name: "Best Time to Buy and Sell Stock", url: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/", difficulty: "Easy" },
              { name: "3Sum", url: "https://leetcode.com/problems/3sum/", difficulty: "Medium" },
              { name: "Container With Most Water", url: "https://leetcode.com/problems/container-with-most-water/", difficulty: "Medium" },
              { name: "Longest Substring Without Repeating Characters", url: "https://leetcode.com/problems/longest-substring-without-repeating-characters/", difficulty: "Medium" },
              { name: "Longest Repeating Character Replacement", url: "https://leetcode.com/problems/longest-repeating-character-replacement/", difficulty: "Medium" },
              { name: "Permutation in String", url: "https://leetcode.com/problems/permutation-in-string/", difficulty: "Medium" },
              { name: "Minimum Window Substring", url: "https://leetcode.com/problems/minimum-window-substring/", difficulty: "Hard" },
              { name: "Sliding Window Maximum", url: "https://leetcode.com/problems/sliding-window-maximum/", difficulty: "Hard" }
            ]},
            { title: "Trees", items: [
              { name: "Invert Binary Tree", url: "https://leetcode.com/problems/invert-binary-tree/", difficulty: "Easy" },
              { name: "Maximum Depth of Binary Tree", url: "https://leetcode.com/problems/maximum-depth-of-binary-tree/", difficulty: "Easy" },
              { name: "Diameter of Binary Tree", url: "https://leetcode.com/problems/diameter-of-binary-tree/", difficulty: "Easy" },
              { name: "Same Tree", url: "https://leetcode.com/problems/same-tree/", difficulty: "Easy" },
              { name: "Binary Tree Level Order Traversal", url: "https://leetcode.com/problems/binary-tree-level-order-traversal/", difficulty: "Medium" },
              { name: "Validate Binary Search Tree", url: "https://leetcode.com/problems/validate-binary-search-tree/", difficulty: "Medium" },
              { name: "Binary Tree Maximum Path Sum", url: "https://leetcode.com/problems/binary-tree-maximum-path-sum/", difficulty: "Hard" },
              { name: "Serialize and Deserialize Binary Tree", url: "https://leetcode.com/problems/serialize-and-deserialize-binary-tree/", difficulty: "Hard" }
            ]},
            { title: "Graphs", items: [
              { name: "Number of Islands", url: "https://leetcode.com/problems/number-of-islands/", difficulty: "Medium" },
              { name: "Pacific Atlantic Water Flow", url: "https://leetcode.com/problems/pacific-atlantic-water-flow/", difficulty: "Medium" },
              { name: "Course Schedule", url: "https://leetcode.com/problems/course-schedule/", difficulty: "Medium" },
              { name: "Course Schedule II", url: "https://leetcode.com/problems/course-schedule-ii/", difficulty: "Medium" },
              { name: "Word Ladder", url: "https://leetcode.com/problems/word-ladder/", difficulty: "Hard" }
            ]},
            { title: "Dynamic Programming", items: [
              { name: "House Robber", url: "https://leetcode.com/problems/house-robber/", difficulty: "Medium" },
              { name: "Coin Change", url: "https://leetcode.com/problems/coin-change/", difficulty: "Medium" },
              { name: "Longest Increasing Subsequence", url: "https://leetcode.com/problems/longest-increasing-subsequence/", difficulty: "Medium" },
              { name: "Word Break", url: "https://leetcode.com/problems/word-break/", difficulty: "Medium" },
              { name: "Edit Distance", url: "https://leetcode.com/problems/edit-distance/", difficulty: "Medium" },
              { name: "Burst Balloons", url: "https://leetcode.com/problems/burst-balloons/", difficulty: "Hard" }
            ]}
          ]
        }
      ]
    },

    "coding-s30": {
      id: "coding-s30",
      breadcrumb: ["Coding", "Seasoned Coder", "30-Day Revision"],
      eyebrow: "Seasoned Coder",
      title: "30-Day Revision",
      lead: "One problem per day. Hits every pattern once. Not easy — these are problems that expose gaps even in experienced engineers.",
      content: [
        { type: "divider" },
        { type: "heading2", text: "Progress" },
        {
          type: "progress-dashboard", variant: "leetcode",
          scopeKey: "coding-s30",
          title: "30-Day Revision",
          subtitle: "One per day. Do it properly — write the solution, not just read it.",
          sections: [
            { title: "Week 1 — Arrays, Strings, Two Pointers", items: [
              { name: "Trapping Rain Water", url: "https://leetcode.com/problems/trapping-rain-water/", difficulty: "Hard" },
              { name: "Minimum Window Substring", url: "https://leetcode.com/problems/minimum-window-substring/", difficulty: "Hard" },
              { name: "Largest Rectangle in Histogram", url: "https://leetcode.com/problems/largest-rectangle-in-histogram/", difficulty: "Hard" },
              { name: "Sliding Window Maximum", url: "https://leetcode.com/problems/sliding-window-maximum/", difficulty: "Hard" },
              { name: "Product of Array Except Self", url: "https://leetcode.com/problems/product-of-array-except-self/", difficulty: "Medium" },
              { name: "Longest Consecutive Sequence", url: "https://leetcode.com/problems/longest-consecutive-sequence/", difficulty: "Medium" },
              { name: "Encode and Decode Strings", url: "https://leetcode.com/problems/encode-and-decode-strings/", difficulty: "Medium" }
            ]},
            { title: "Week 2 — Trees and Graphs", items: [
              { name: "Binary Tree Maximum Path Sum", url: "https://leetcode.com/problems/binary-tree-maximum-path-sum/", difficulty: "Hard" },
              { name: "Serialize and Deserialize Binary Tree", url: "https://leetcode.com/problems/serialize-and-deserialize-binary-tree/", difficulty: "Hard" },
              { name: "Word Ladder", url: "https://leetcode.com/problems/word-ladder/", difficulty: "Hard" },
              { name: "Alien Dictionary", url: "https://leetcode.com/problems/alien-dictionary/", difficulty: "Hard" },
              { name: "Lowest Common Ancestor of a Binary Tree", url: "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/", difficulty: "Medium" },
              { name: "Course Schedule II", url: "https://leetcode.com/problems/course-schedule-ii/", difficulty: "Medium" },
              { name: "Pacific Atlantic Water Flow", url: "https://leetcode.com/problems/pacific-atlantic-water-flow/", difficulty: "Medium" }
            ]},
            { title: "Week 3 — DP and Backtracking", items: [
              { name: "Regular Expression Matching", url: "https://leetcode.com/problems/regular-expression-matching/", difficulty: "Hard" },
              { name: "Burst Balloons", url: "https://leetcode.com/problems/burst-balloons/", difficulty: "Hard" },
              { name: "Distinct Subsequences", url: "https://leetcode.com/problems/distinct-subsequences/", difficulty: "Hard" },
              { name: "Edit Distance", url: "https://leetcode.com/problems/edit-distance/", difficulty: "Medium" },
              { name: "Partition Equal Subset Sum", url: "https://leetcode.com/problems/partition-equal-subset-sum/", difficulty: "Medium" },
              { name: "Word Break", url: "https://leetcode.com/problems/word-break/", difficulty: "Medium" },
              { name: "N-Queens", url: "https://leetcode.com/problems/n-queens/", difficulty: "Hard" }
            ]},
            { title: "Week 4 — System Design Coding + Advanced", items: [
              { name: "LFU Cache", url: "https://leetcode.com/problems/lfu-cache/", difficulty: "Hard" },
              { name: "LRU Cache", url: "https://leetcode.com/problems/lru-cache/", difficulty: "Medium" },
              { name: "Find Median from Data Stream", url: "https://leetcode.com/problems/find-median-from-data-stream/", difficulty: "Hard" },
              { name: "Merge k Sorted Lists", url: "https://leetcode.com/problems/merge-k-sorted-lists/", difficulty: "Hard" },
              { name: "Word Search II", url: "https://leetcode.com/problems/word-search-ii/", difficulty: "Hard" },
              { name: "Maximum Profit in Job Scheduling", url: "https://leetcode.com/problems/maximum-profit-in-job-scheduling/", difficulty: "Hard" },
              { name: "Critical Connections in a Network", url: "https://leetcode.com/problems/critical-connections-in-a-network/", difficulty: "Hard" },
              { name: "Median of Two Sorted Arrays", url: "https://leetcode.com/problems/median-of-two-sorted-arrays/", difficulty: "Hard" },
              { name: "Reverse Nodes in k-Group", url: "https://leetcode.com/problems/reverse-nodes-in-k-group/", difficulty: "Hard" }
            ]}
          ]
        },
        { type: "questions-header", scopeKey: "coding-s30" },
        {
          type: "question-table", scopeKey: "coding-s30",
          sections: [
            { title: "Week 1 — Arrays, Strings, Two Pointers", items: [
              { name: "Trapping Rain Water", url: "https://leetcode.com/problems/trapping-rain-water/", difficulty: "Hard" },
              { name: "Minimum Window Substring", url: "https://leetcode.com/problems/minimum-window-substring/", difficulty: "Hard" },
              { name: "Largest Rectangle in Histogram", url: "https://leetcode.com/problems/largest-rectangle-in-histogram/", difficulty: "Hard" },
              { name: "Sliding Window Maximum", url: "https://leetcode.com/problems/sliding-window-maximum/", difficulty: "Hard" },
              { name: "Product of Array Except Self", url: "https://leetcode.com/problems/product-of-array-except-self/", difficulty: "Medium" },
              { name: "Longest Consecutive Sequence", url: "https://leetcode.com/problems/longest-consecutive-sequence/", difficulty: "Medium" },
              { name: "Encode and Decode Strings", url: "https://leetcode.com/problems/encode-and-decode-strings/", difficulty: "Medium" }
            ]},
            { title: "Week 2 — Trees and Graphs", items: [
              { name: "Binary Tree Maximum Path Sum", url: "https://leetcode.com/problems/binary-tree-maximum-path-sum/", difficulty: "Hard" },
              { name: "Serialize and Deserialize Binary Tree", url: "https://leetcode.com/problems/serialize-and-deserialize-binary-tree/", difficulty: "Hard" },
              { name: "Word Ladder", url: "https://leetcode.com/problems/word-ladder/", difficulty: "Hard" },
              { name: "Alien Dictionary", url: "https://leetcode.com/problems/alien-dictionary/", difficulty: "Hard" },
              { name: "Lowest Common Ancestor of a Binary Tree", url: "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/", difficulty: "Medium" },
              { name: "Course Schedule II", url: "https://leetcode.com/problems/course-schedule-ii/", difficulty: "Medium" },
              { name: "Pacific Atlantic Water Flow", url: "https://leetcode.com/problems/pacific-atlantic-water-flow/", difficulty: "Medium" }
            ]},
            { title: "Week 3 — DP and Backtracking", items: [
              { name: "Regular Expression Matching", url: "https://leetcode.com/problems/regular-expression-matching/", difficulty: "Hard" },
              { name: "Burst Balloons", url: "https://leetcode.com/problems/burst-balloons/", difficulty: "Hard" },
              { name: "Distinct Subsequences", url: "https://leetcode.com/problems/distinct-subsequences/", difficulty: "Hard" },
              { name: "Edit Distance", url: "https://leetcode.com/problems/edit-distance/", difficulty: "Medium" },
              { name: "Partition Equal Subset Sum", url: "https://leetcode.com/problems/partition-equal-subset-sum/", difficulty: "Medium" },
              { name: "Word Break", url: "https://leetcode.com/problems/word-break/", difficulty: "Medium" },
              { name: "N-Queens", url: "https://leetcode.com/problems/n-queens/", difficulty: "Hard" }
            ]},
            { title: "Week 4 — System Design Coding + Advanced", items: [
              { name: "LFU Cache", url: "https://leetcode.com/problems/lfu-cache/", difficulty: "Hard" },
              { name: "LRU Cache", url: "https://leetcode.com/problems/lru-cache/", difficulty: "Medium" },
              { name: "Find Median from Data Stream", url: "https://leetcode.com/problems/find-median-from-data-stream/", difficulty: "Hard" },
              { name: "Merge k Sorted Lists", url: "https://leetcode.com/problems/merge-k-sorted-lists/", difficulty: "Hard" },
              { name: "Word Search II", url: "https://leetcode.com/problems/word-search-ii/", difficulty: "Hard" },
              { name: "Maximum Profit in Job Scheduling", url: "https://leetcode.com/problems/maximum-profit-in-job-scheduling/", difficulty: "Hard" },
              { name: "Critical Connections in a Network", url: "https://leetcode.com/problems/critical-connections-in-a-network/", difficulty: "Hard" },
              { name: "Median of Two Sorted Arrays", url: "https://leetcode.com/problems/median-of-two-sorted-arrays/", difficulty: "Hard" },
              { name: "Reverse Nodes in k-Group", url: "https://leetcode.com/problems/reverse-nodes-in-k-group/", difficulty: "Hard" }
            ]}
          ]
        }
      ]
    },

    "coding-s100": {
      id: "coding-s100",
      breadcrumb: ["Coding", "Seasoned Coder", "Think Hard 100"],
      eyebrow: "Seasoned Coder",
      title: "Think Hard 100",
      lead: "100 problems with no obvious solutions. Every one of these requires you to stop, think, and reason from first principles. Not for grinding — for growing.",
      content: [
        { type: "divider" },
        { type: "heading2", text: "Progress" },
        {
          type: "progress-dashboard", variant: "leetcode",
          scopeKey: "coding-s100",
          title: "Think Hard 100",
          subtitle: "Skews Hard. Do not rush these.",
          sections: [
            { title: "Arrays — Non-trivial", items: [
              { name: "Trapping Rain Water", url: "https://leetcode.com/problems/trapping-rain-water/", difficulty: "Hard" },
              { name: "Largest Rectangle in Histogram", url: "https://leetcode.com/problems/largest-rectangle-in-histogram/", difficulty: "Hard" },
              { name: "Maximum Product Subarray", url: "https://leetcode.com/problems/maximum-product-subarray/", difficulty: "Medium" },
              { name: "First Missing Positive", url: "https://leetcode.com/problems/first-missing-positive/", difficulty: "Hard" },
              { name: "Sliding Window Maximum", url: "https://leetcode.com/problems/sliding-window-maximum/", difficulty: "Hard" },
              { name: "Jump Game II", url: "https://leetcode.com/problems/jump-game-ii/", difficulty: "Medium" },
              { name: "Candy", url: "https://leetcode.com/problems/candy/", difficulty: "Hard" }
            ]},
            { title: "Strings — Think Harder", items: [
              { name: "Minimum Window Substring", url: "https://leetcode.com/problems/minimum-window-substring/", difficulty: "Hard" },
              { name: "Regular Expression Matching", url: "https://leetcode.com/problems/regular-expression-matching/", difficulty: "Hard" },
              { name: "Wildcard Matching", url: "https://leetcode.com/problems/wildcard-matching/", difficulty: "Hard" },
              { name: "Palindrome Pairs", url: "https://leetcode.com/problems/palindrome-pairs/", difficulty: "Hard" },
              { name: "Distinct Subsequences", url: "https://leetcode.com/problems/distinct-subsequences/", difficulty: "Hard" },
              { name: "Edit Distance", url: "https://leetcode.com/problems/edit-distance/", difficulty: "Medium" }
            ]},
            { title: "Linked Lists — Edge Case Heavy", items: [
              { name: "Reverse Nodes in k-Group", url: "https://leetcode.com/problems/reverse-nodes-in-k-group/", difficulty: "Hard" },
              { name: "Merge k Sorted Lists", url: "https://leetcode.com/problems/merge-k-sorted-lists/", difficulty: "Hard" },
              { name: "Copy List with Random Pointer", url: "https://leetcode.com/problems/copy-list-with-random-pointer/", difficulty: "Medium" },
              { name: "Find the Duplicate Number", url: "https://leetcode.com/problems/find-the-duplicate-number/", difficulty: "Medium" },
              { name: "LRU Cache", url: "https://leetcode.com/problems/lru-cache/", difficulty: "Medium" },
              { name: "LFU Cache", url: "https://leetcode.com/problems/lfu-cache/", difficulty: "Hard" }
            ]},
            { title: "Trees — Recursive Thinking", items: [
              { name: "Binary Tree Maximum Path Sum", url: "https://leetcode.com/problems/binary-tree-maximum-path-sum/", difficulty: "Hard" },
              { name: "Serialize and Deserialize Binary Tree", url: "https://leetcode.com/problems/serialize-and-deserialize-binary-tree/", difficulty: "Hard" },
              { name: "Maximum Width of Binary Tree", url: "https://leetcode.com/problems/maximum-width-of-binary-tree/", difficulty: "Medium" },
              { name: "Recover Binary Search Tree", url: "https://leetcode.com/problems/recover-binary-search-tree/", difficulty: "Medium" },
              { name: "Vertical Order Traversal", url: "https://leetcode.com/problems/vertical-order-traversal-of-a-binary-tree/", difficulty: "Hard" },
              { name: "Distribute Coins in Binary Tree", url: "https://leetcode.com/problems/distribute-coins-in-binary-tree/", difficulty: "Medium" }
            ]},
            { title: "Graphs — Hard to See", items: [
              { name: "Alien Dictionary", url: "https://leetcode.com/problems/alien-dictionary/", difficulty: "Hard" },
              { name: "Critical Connections in a Network", url: "https://leetcode.com/problems/critical-connections-in-a-network/", difficulty: "Hard" },
              { name: "Swim in Rising Water", url: "https://leetcode.com/problems/swim-in-rising-water/", difficulty: "Hard" },
              { name: "Word Ladder II", url: "https://leetcode.com/problems/word-ladder-ii/", difficulty: "Hard" },
              { name: "Cheapest Flights Within K Stops", url: "https://leetcode.com/problems/cheapest-flights-within-k-stops/", difficulty: "Medium" },
              { name: "Network Delay Time", url: "https://leetcode.com/problems/network-delay-time/", difficulty: "Medium" },
              { name: "Reconstruct Itinerary", url: "https://leetcode.com/problems/reconstruct-itinerary/", difficulty: "Hard" },
              { name: "Bus Routes", url: "https://leetcode.com/problems/bus-routes/", difficulty: "Hard" }
            ]},
            { title: "Dynamic Programming — No Patterns", items: [
              { name: "Burst Balloons", url: "https://leetcode.com/problems/burst-balloons/", difficulty: "Hard" },
              { name: "Strange Printer", url: "https://leetcode.com/problems/strange-printer/", difficulty: "Hard" },
              { name: "Stone Game", url: "https://leetcode.com/problems/stone-game/", difficulty: "Medium" },
              { name: "Stone Game IV", url: "https://leetcode.com/problems/stone-game-iv/", difficulty: "Hard" },
              { name: "Maximum Profit in Job Scheduling", url: "https://leetcode.com/problems/maximum-profit-in-job-scheduling/", difficulty: "Hard" },
              { name: "Minimum Cost to Cut a Stick", url: "https://leetcode.com/problems/minimum-cost-to-cut-a-stick/", difficulty: "Hard" },
              { name: "Maximal Rectangle", url: "https://leetcode.com/problems/maximal-rectangle/", difficulty: "Hard" },
              { name: "Interleaving String", url: "https://leetcode.com/problems/interleaving-string/", difficulty: "Medium" },
              { name: "Longest Common Subsequence", url: "https://leetcode.com/problems/longest-common-subsequence/", difficulty: "Medium" },
              { name: "Number of Longest Increasing Subsequence", url: "https://leetcode.com/problems/number-of-longest-increasing-subsequence/", difficulty: "Medium" }
            ]},
            { title: "Backtracking — State Heavy", items: [
              { name: "N-Queens II", url: "https://leetcode.com/problems/n-queens-ii/", difficulty: "Hard" },
              { name: "Sudoku Solver", url: "https://leetcode.com/problems/sudoku-solver/", difficulty: "Hard" },
              { name: "Expression Add Operators", url: "https://leetcode.com/problems/expression-add-operators/", difficulty: "Hard" },
              { name: "Zuma Game", url: "https://leetcode.com/problems/zuma-game/", difficulty: "Hard" },
              { name: "Word Search II", url: "https://leetcode.com/problems/word-search-ii/", difficulty: "Hard" },
              { name: "Remove Boxes", url: "https://leetcode.com/problems/remove-boxes/", difficulty: "Hard" }
            ]},
            { title: "Heaps & Design — Non-trivial", items: [
              { name: "Find Median from Data Stream", url: "https://leetcode.com/problems/find-median-from-data-stream/", difficulty: "Hard" },
              { name: "Sliding Window Median", url: "https://leetcode.com/problems/sliding-window-median/", difficulty: "Hard" },
              { name: "IPO", url: "https://leetcode.com/problems/ipo/", difficulty: "Hard" },
              { name: "Smallest Range Covering Elements from K Lists", url: "https://leetcode.com/problems/smallest-range-covering-elements-from-k-lists/", difficulty: "Hard" },
              { name: "Design In-Memory File System", url: "https://leetcode.com/problems/design-in-memory-file-system/", difficulty: "Hard" },
              { name: "Design Search Autocomplete System", url: "https://leetcode.com/problems/design-search-autocomplete-system/", difficulty: "Hard" }
            ]},
            { title: "Math & Bit Manipulation", items: [
              { name: "Single Number III", url: "https://leetcode.com/problems/single-number-iii/", difficulty: "Medium" },
              { name: "Maximum XOR of Two Numbers in an Array", url: "https://leetcode.com/problems/maximum-xor-of-two-numbers-in-an-array/", difficulty: "Medium" },
              { name: "Bitwise AND of Numbers Range", url: "https://leetcode.com/problems/bitwise-and-of-numbers-range/", difficulty: "Medium" },
              { name: "Pow(x, n)", url: "https://leetcode.com/problems/powx-n/", difficulty: "Medium" },
              { name: "Integer to English Words", url: "https://leetcode.com/problems/integer-to-english-words/", difficulty: "Hard" }
            ]},
            { title: "Intervals & Sweep Line", items: [
              { name: "The Skyline Problem", url: "https://leetcode.com/problems/the-skyline-problem/", difficulty: "Hard" },
              { name: "Meeting Rooms III", url: "https://leetcode.com/problems/meeting-rooms-iii/", difficulty: "Hard" },
              { name: "Maximum Profit in Job Scheduling", url: "https://leetcode.com/problems/maximum-profit-in-job-scheduling/", difficulty: "Hard" },
              { name: "My Calendar III", url: "https://leetcode.com/problems/my-calendar-iii/", difficulty: "Hard" },
              { name: "Employee Free Time", url: "https://leetcode.com/problems/employee-free-time/", difficulty: "Hard" }
            ]}
          ]
        },
        { type: "questions-header", scopeKey: "coding-s100" },
        {
          type: "question-table", scopeKey: "coding-s100",
          sections: [
            { title: "Arrays — Non-trivial", items: [
              { name: "Trapping Rain Water", url: "https://leetcode.com/problems/trapping-rain-water/", difficulty: "Hard" },
              { name: "Largest Rectangle in Histogram", url: "https://leetcode.com/problems/largest-rectangle-in-histogram/", difficulty: "Hard" },
              { name: "Maximum Product Subarray", url: "https://leetcode.com/problems/maximum-product-subarray/", difficulty: "Medium" },
              { name: "First Missing Positive", url: "https://leetcode.com/problems/first-missing-positive/", difficulty: "Hard" },
              { name: "Sliding Window Maximum", url: "https://leetcode.com/problems/sliding-window-maximum/", difficulty: "Hard" },
              { name: "Jump Game II", url: "https://leetcode.com/problems/jump-game-ii/", difficulty: "Medium" },
              { name: "Candy", url: "https://leetcode.com/problems/candy/", difficulty: "Hard" }
            ]},
            { title: "Strings — Think Harder", items: [
              { name: "Minimum Window Substring", url: "https://leetcode.com/problems/minimum-window-substring/", difficulty: "Hard" },
              { name: "Regular Expression Matching", url: "https://leetcode.com/problems/regular-expression-matching/", difficulty: "Hard" },
              { name: "Wildcard Matching", url: "https://leetcode.com/problems/wildcard-matching/", difficulty: "Hard" },
              { name: "Palindrome Pairs", url: "https://leetcode.com/problems/palindrome-pairs/", difficulty: "Hard" },
              { name: "Distinct Subsequences", url: "https://leetcode.com/problems/distinct-subsequences/", difficulty: "Hard" },
              { name: "Edit Distance", url: "https://leetcode.com/problems/edit-distance/", difficulty: "Medium" }
            ]},
            { title: "Linked Lists — Edge Case Heavy", items: [
              { name: "Reverse Nodes in k-Group", url: "https://leetcode.com/problems/reverse-nodes-in-k-group/", difficulty: "Hard" },
              { name: "Merge k Sorted Lists", url: "https://leetcode.com/problems/merge-k-sorted-lists/", difficulty: "Hard" },
              { name: "Copy List with Random Pointer", url: "https://leetcode.com/problems/copy-list-with-random-pointer/", difficulty: "Medium" },
              { name: "Find the Duplicate Number", url: "https://leetcode.com/problems/find-the-duplicate-number/", difficulty: "Medium" },
              { name: "LRU Cache", url: "https://leetcode.com/problems/lru-cache/", difficulty: "Medium" },
              { name: "LFU Cache", url: "https://leetcode.com/problems/lfu-cache/", difficulty: "Hard" }
            ]},
            { title: "Trees — Recursive Thinking", items: [
              { name: "Binary Tree Maximum Path Sum", url: "https://leetcode.com/problems/binary-tree-maximum-path-sum/", difficulty: "Hard" },
              { name: "Serialize and Deserialize Binary Tree", url: "https://leetcode.com/problems/serialize-and-deserialize-binary-tree/", difficulty: "Hard" },
              { name: "Vertical Order Traversal", url: "https://leetcode.com/problems/vertical-order-traversal-of-a-binary-tree/", difficulty: "Hard" },
              { name: "Recover Binary Search Tree", url: "https://leetcode.com/problems/recover-binary-search-tree/", difficulty: "Medium" },
              { name: "Distribute Coins in Binary Tree", url: "https://leetcode.com/problems/distribute-coins-in-binary-tree/", difficulty: "Medium" }
            ]},
            { title: "Graphs — Hard to See", items: [
              { name: "Alien Dictionary", url: "https://leetcode.com/problems/alien-dictionary/", difficulty: "Hard" },
              { name: "Critical Connections in a Network", url: "https://leetcode.com/problems/critical-connections-in-a-network/", difficulty: "Hard" },
              { name: "Swim in Rising Water", url: "https://leetcode.com/problems/swim-in-rising-water/", difficulty: "Hard" },
              { name: "Word Ladder II", url: "https://leetcode.com/problems/word-ladder-ii/", difficulty: "Hard" },
              { name: "Reconstruct Itinerary", url: "https://leetcode.com/problems/reconstruct-itinerary/", difficulty: "Hard" },
              { name: "Bus Routes", url: "https://leetcode.com/problems/bus-routes/", difficulty: "Hard" }
            ]},
            { title: "Dynamic Programming — No Patterns", items: [
              { name: "Burst Balloons", url: "https://leetcode.com/problems/burst-balloons/", difficulty: "Hard" },
              { name: "Strange Printer", url: "https://leetcode.com/problems/strange-printer/", difficulty: "Hard" },
              { name: "Maximum Profit in Job Scheduling", url: "https://leetcode.com/problems/maximum-profit-in-job-scheduling/", difficulty: "Hard" },
              { name: "Minimum Cost to Cut a Stick", url: "https://leetcode.com/problems/minimum-cost-to-cut-a-stick/", difficulty: "Hard" },
              { name: "Maximal Rectangle", url: "https://leetcode.com/problems/maximal-rectangle/", difficulty: "Hard" },
              { name: "Interleaving String", url: "https://leetcode.com/problems/interleaving-string/", difficulty: "Medium" }
            ]},
            { title: "Backtracking — State Heavy", items: [
              { name: "N-Queens II", url: "https://leetcode.com/problems/n-queens-ii/", difficulty: "Hard" },
              { name: "Sudoku Solver", url: "https://leetcode.com/problems/sudoku-solver/", difficulty: "Hard" },
              { name: "Expression Add Operators", url: "https://leetcode.com/problems/expression-add-operators/", difficulty: "Hard" },
              { name: "Word Search II", url: "https://leetcode.com/problems/word-search-ii/", difficulty: "Hard" }
            ]},
            { title: "Heaps & Design — Non-trivial", items: [
              { name: "Find Median from Data Stream", url: "https://leetcode.com/problems/find-median-from-data-stream/", difficulty: "Hard" },
              { name: "Sliding Window Median", url: "https://leetcode.com/problems/sliding-window-median/", difficulty: "Hard" },
              { name: "Smallest Range Covering Elements from K Lists", url: "https://leetcode.com/problems/smallest-range-covering-elements-from-k-lists/", difficulty: "Hard" },
              { name: "Design Search Autocomplete System", url: "https://leetcode.com/problems/design-search-autocomplete-system/", difficulty: "Hard" }
            ]},
            { title: "Intervals & Sweep Line", items: [
              { name: "The Skyline Problem", url: "https://leetcode.com/problems/the-skyline-problem/", difficulty: "Hard" },
              { name: "Meeting Rooms III", url: "https://leetcode.com/problems/meeting-rooms-iii/", difficulty: "Hard" },
              { name: "My Calendar III", url: "https://leetcode.com/problems/my-calendar-iii/", difficulty: "Hard" },
              { name: "Employee Free Time", url: "https://leetcode.com/problems/employee-free-time/", difficulty: "Hard" }
            ]}
          ]
        }
      ]
    },

    "coding-company-focus": {
      id: "coding-company-focus",
      breadcrumb: ["Coding", "Company Focus"],
      eyebrow: "Coding Interview Prep",
      title: "Company Focus",
      lead: "662 companies. Pick yours and drill their most recently asked questions — sourced from real interview reports.",
      content: [
        { type: "divider" },
        { type: "company-picker", scopeKey: "coding-company-focus" }
      ]
    },

    "realtime-updates": {
      id: "realtime-updates",
      breadcrumb: ["Learn System Design", "Patterns", "Real-time Updates"],
      eyebrow: "Patterns",
      title: "Real-time Updates",
      lead: "Dummy content for now.",
      content: [
        { type: "divider" },
        { type: "paragraph", text: "TODO: Real-time Updates pattern. Placeholder page." }
      ]
    },
    "scaling-reads": {
      id: "scaling-reads",
      breadcrumb: ["Learn System Design", "Patterns", "Scaling Reads"],
      eyebrow: "Patterns",
      title: "Scaling Reads",
      lead: "Dummy content for now.",
      content: [
        { type: "divider" },
        { type: "paragraph", text: "TODO: Scaling Reads pattern. Placeholder page." }
      ]
    },
    "scaling-writes": {
      id: "scaling-writes",
      breadcrumb: ["Learn System Design", "Patterns", "Scaling Writes"],
      eyebrow: "Patterns",
      title: "Scaling Writes",
      lead: "Dummy content for now.",
      content: [
        { type: "divider" },
        { type: "paragraph", text: "TODO: Scaling Writes pattern. Placeholder page." }
      ]
    },
    "large-blobs": {
      id: "large-blobs",
      breadcrumb: ["Learn System Design", "Patterns", "Handling Large Blobs"],
      eyebrow: "Patterns",
      title: "Handling Large Blobs",
      lead: "Dummy content for now.",
      content: [
        { type: "divider" },
        { type: "paragraph", text: "TODO: Handling Large Blobs pattern. Placeholder page." }
      ]
    },
    "multi-step": {
      id: "multi-step",
      breadcrumb: ["Learn System Design", "Patterns", "Multi-step Processes"],
      eyebrow: "Patterns",
      title: "Multi-step Processes",
      lead: "Dummy content for now.",
      content: [
        { type: "divider" },
        { type: "paragraph", text: "TODO: Multi-step Processes pattern. Placeholder page." }
      ]
    },
    "contention": {
      id: "contention",
      breadcrumb: ["Learn System Design", "Patterns", "Dealing with Contention"],
      eyebrow: "Patterns",
      title: "Dealing with Contention",
      lead: "Dummy content for now.",
      content: [
        { type: "divider" },
        { type: "paragraph", text: "TODO: Dealing with Contention pattern. Placeholder page." }
      ]
    }

  } // end pages
}; // end SITE_CONFIG
// ============================================================
//  SEED DATA
//  Pre-populated solutions and explanations.
//  Format:
//    key      : matches q.url (the localStorage key used by solution.html)
//    solutions: array of { id, name, langs: { "C++": "..code.." }, explanation: {...} }
//
//  These are seeded into localStorage ONCE on first visit to solution.html.
//  To force re-seed, delete the hi:seeded:<key> flag from localStorage.
// ============================================================

window.SEED_DATA = [
  {
    key: "https://leetcode.com/problems/two-sum/",
    solutions: [
      {
        id: "seed_twosum_brute",
        name: "Brute Force",
        langs: {
          "C++": `class Solution {\npublic:\n    vector<int> twoSum(vector<int>& nums, int target) {\n        int n = nums.size();\n        for (int i = 0; i < n; i++) {\n            for (int j = i + 1; j < n; j++) {\n                if (nums[i] + nums[j] == target)\n                    return {i, j};\n            }\n        }\n        return {};\n    }\n};`,
          "Java": `class Solution {\n    public int[] twoSum(int[] nums, int target) {\n        int n = nums.length;\n        for (int i = 0; i < n; i++) {\n            for (int j = i + 1; j < n; j++) {\n                if (nums[i] + nums[j] == target)\n                    return new int[]{i, j};\n            }\n        }\n        return new int[]{};\n    }\n}`,
          "Python": `class Solution:\n    def twoSum(self, nums: List[int], target: int) -> List[int]:\n        n = len(nums)\n        for i in range(n):\n            for j in range(i + 1, n):\n                if nums[i] + nums[j] == target:\n                    return [i, j]\n        return []`,
        },
        explanation: {
          algorithms:      ["Array"],
          approaches:      ["Brute Force"],
          prerequisites:   ["Arrays", "Nested loops"],
          companies:       ["Google", "Amazon", "Meta", "Microsoft", "Apple", "Adobe", "Bloomberg"],
          timeComplexity:  "O(n²)",
          spaceComplexity: "O(1)",
          howToThink:      "The simplest instinct: check every possible pair (i, j) where i < j and see if they sum to the target.\n\nThis works but is slow for large inputs — you're doing redundant work by re-scanning the array for each element. It's a good starting point to mention in an interview before optimizing.",
          explanation:     "Iterate over all pairs (i, j) with i < j using two nested loops.\n\nFor each pair, check if nums[i] + nums[j] == target. If yes, return {i, j} immediately.\n\nTime complexity is O(n²) because for each of n elements we scan up to n more elements. Space is O(1) since we use no extra data structures.\n\nThis solution is correct but too slow for large inputs (n up to 10⁴). Always mention this and transition to the optimal approach.",
        }
      },
      {
        id: "seed_twosum_optimal",
        name: "Optimal — Hash Map",
        langs: {
          "C++": `class Solution {\npublic:\n    vector<int> twoSum(vector<int>& nums, int target) {\n        unordered_map<int, int> seen; // value -> index\n        for (int i = 0; i < (int)nums.size(); i++) {\n            int complement = target - nums[i];\n            if (seen.count(complement))\n                return {seen[complement], i};\n            seen[nums[i]] = i;\n        }\n        return {};\n    }\n};`,
          "Java": `class Solution {\n    public int[] twoSum(int[] nums, int target) {\n        Map<Integer, Integer> seen = new HashMap<>();\n        for (int i = 0; i < nums.length; i++) {\n            int complement = target - nums[i];\n            if (seen.containsKey(complement))\n                return new int[]{seen.get(complement), i};\n            seen.put(nums[i], i);\n        }\n        return new int[]{};\n    }\n}`,
          "Python": `class Solution:\n    def twoSum(self, nums: List[int], target: int) -> List[int]:\n        seen = {}  # value -> index\n        for i, num in enumerate(nums):\n            complement = target - num\n            if complement in seen:\n                return [seen[complement], i]\n            seen[num] = i\n        return []`,
          "JavaScript": `var twoSum = function(nums, target) {\n    const seen = new Map(); // value -> index\n    for (let i = 0; i < nums.length; i++) {\n        const complement = target - nums[i];\n        if (seen.has(complement))\n            return [seen.get(complement), i];\n        seen.set(nums[i], i);\n    }\n    return [];\n};`,
          "Rust": `use std::collections::HashMap;\n\nimpl Solution {\n    pub fn two_sum(nums: Vec<i32>, target: i32) -> Vec<i32> {\n        let mut seen: HashMap<i32, i32> = HashMap::new();\n        for (i, &num) in nums.iter().enumerate() {\n            let complement = target - num;\n            if let Some(&j) = seen.get(&complement) {\n                return vec![j, i as i32];\n            }\n            seen.insert(num, i as i32);\n        }\n        vec![]\n    }\n}`,
        },
        explanation: {
          algorithms:      ["Hash Map", "Array"],
          approaches:      ["Optimal", "Single Pass"],
          prerequisites:   ["Hash Maps", "Complement lookup", "Arrays"],
          companies:       ["Google", "Amazon", "Meta", "Microsoft", "Apple", "Adobe", "Bloomberg"],
          timeComplexity:  "O(n)",
          spaceComplexity: "O(n)",
          howToThink:      "The brute force re-scans the array for every element — O(n²). Ask yourself: for each number x, you need target - x. What if you could look it up in O(1) instead of scanning?\n\nThat's the hash map insight. As you walk the array once, store each number you've seen in a map (value → index). For every new number, check if its complement (target - x) is already in the map.\n\nKey mental shift: instead of 'find two numbers that sum to target', reframe it as 'for each number, has its complement appeared before?' The answer only requires one pass.",
          explanation:     "Create an empty hash map `seen` that maps value → index.\n\nFor each index i, compute complement = target - nums[i].\n\nIf complement is already in seen, we found our pair — return {seen[complement], i}.\n\nOtherwise, store nums[i] → i in the map and continue.\n\nThis works in a single O(n) pass. By the time we reach the second element of a valid pair, the first is already stored in the map.\n\nCrucial edge case: we check the map BEFORE inserting the current element. This prevents using the same index twice (e.g. target=6, nums=[3,3] — we need indices 0 and 1, not index 0 twice).\n\nSpace complexity is O(n) in the worst case — we may store all n elements before finding the pair.",
        }
      }
    ]
  }
  // Add more problems here following the same structure
];