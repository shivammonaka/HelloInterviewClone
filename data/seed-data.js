// Default solution seeds shown on first visit to a solution page
// Add pre-filled solutions here keyed by LeetCode URL

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
