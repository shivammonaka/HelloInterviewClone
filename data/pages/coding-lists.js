// Coding question lists — Foundations 50/100/150, Seasoned 30/100

window.SITE_CONFIG = window.SITE_CONFIG || {};
window.SITE_CONFIG.pages = Object.assign(window.SITE_CONFIG.pages || {}, {

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

});
