// System design page content — intro, how-to, delivery framework, patterns

window.SITE_CONFIG = window.SITE_CONFIG || {};
window.SITE_CONFIG.pages = Object.assign(window.SITE_CONFIG.pages || {}, {

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

});
