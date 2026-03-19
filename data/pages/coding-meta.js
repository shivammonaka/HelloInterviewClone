// Coding track shell pages — home, DSA concepts, company focus

window.SITE_CONFIG = window.SITE_CONFIG || {};
window.SITE_CONFIG.pages = Object.assign(window.SITE_CONFIG.pages || {}, {

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

});
