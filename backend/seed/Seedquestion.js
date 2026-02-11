const Question = require("../model/Question");

async function seed() {
  await Question.insertMany([

    {
      title: "Maximum Element in Array",
      topic: "Arrays",
      difficulty: "easy",
      description: "Given an integer array nums, return the maximum value present in the array.",
      constraints: [
        "1 ≤ nums.length ≤ 10^5",
        "-10^9 ≤ nums[i] ≤ 10^9"
      ],
      testcase: [
        { input: "1 3 2 9 5", expectedOutput: "9" },
        { input: "-5 -1 -10", expectedOutput: "-1" }
      ]
    },
    {
      title: "Sum of Array Elements",
      topic: "Arrays",
      difficulty: "easy",
      description: "Return the sum of all elements in the given integer array.",
      constraints: [
        "0 ≤ nums.length ≤ 10^5",
        "-10^4 ≤ nums[i] ≤ 10^4"
      ],
      testcase: [
        { input: "1 2 3", expectedOutput: "6" },
        { input: "", expectedOutput: "0" }
      ]
    },

    {
      title: "Count Even Numbers",
      topic: "Arrays",
      difficulty: "easy",
      description: "Count the number of even integers in the array.",
      constraints: [
        "0 ≤ nums.length ≤ 10^5"
      ],
      testcase: [
        { input: "1 2 4 7", expectedOutput: "2" },
        { input: "1 3 5", expectedOutput: "0" }
      ]
    },

    {
      title: "Find Second Largest Element",
      topic: "Arrays",
      difficulty: "easy",
      description: "Return the second largest element in the array. All elements are distinct.",
      constraints: [
        "nums.length ≥ 2",
        "All elements are distinct"
      ],
      testcase: [
        { input: "10 5 20 8", expectedOutput: "10" },
        { input: "3 1", expectedOutput: "1" }
      ]
    },

    {
      title: "Check If Array Is Sorted",
      topic: "Arrays",
      difficulty: "easy",
      description: "Return true if the array is sorted in non-decreasing order, otherwise return false.",
      constraints: [
        "1 ≤ nums.length ≤ 10^5"
      ],
      testcase: [
        { input: "1 2 3 4", expectedOutput: "true" },
        { input: "1 3 2", expectedOutput: "false" }
      ]
    },

    {
      title: "Rotate Array by K",
      topic: "Arrays",
      difficulty: "medium",
      description: "Rotate the array to the right by k positions.",
      constraints: [
        "1 ≤ nums.length ≤ 10^5",
        "0 ≤ k ≤ 10^9"
      ],
      testcase: [
        { input: "1 2 3 4 5\n2", expectedOutput: "4 5 1 2 3" },
        { input: "1\n10", expectedOutput: "1" }
      ]
    },

    {
      title: "Remove Duplicates from Sorted Array",
      topic: "Arrays",
      difficulty: "medium",
      description: "Remove duplicates from a sorted array and return the count of unique elements.",
      constraints: [
        "Array is sorted",
        "1 ≤ nums.length ≤ 10^5"
      ],
      testcase: [
        { input: "1 1 2 2 3", expectedOutput: "3" },
        { input: "1 1 1", expectedOutput: "1" }
      ]
    },

    {
      title: "Majority Element",
      topic: "Arrays",
      difficulty: "medium",
      description: "Return the element that appears more than ⌊n/2⌋ times.",
      constraints: [
        "Majority element always exists",
        "1 ≤ nums.length ≤ 10^5"
      ],
      testcase: [
        { input: "3 3 4 2 3 3 3", expectedOutput: "3" },
        { input: "1 1 2", expectedOutput: "1" }
      ]
    },

    {
      title: "Maximum Product of Two Elements",
      topic: "Arrays",
      difficulty: "medium",
      description: "Return the maximum product of any two elements in the array.",
      constraints: [
        "2 ≤ nums.length ≤ 10^5"
      ],
      testcase: [
        { input: "3 4 5 2", expectedOutput: "20" },
        { input: "-10 -3 5 6", expectedOutput: "60" }
      ]
    },

    {
      title: "Leaders in an Array",
      topic: "Arrays",
      difficulty: "medium",
      description: "Return all elements that are greater than all elements to their right.",
      constraints: [
        "1 ≤ nums.length ≤ 10^5"
      ],
      testcase: [
        { input: "16 17 4 3 5 2", expectedOutput: "17 5 2" },
        { input: "7 10 4 10 6 5 2", expectedOutput: "10 6 5 2" }
      ]
    },

    {
      title: "Maximum Subarray Sum",
      topic: "Arrays",
      difficulty: "hard",
      description: "Find the contiguous subarray with the maximum sum and return its sum.",
      constraints: [
        "1 ≤ nums.length ≤ 10^5"
      ],
      testcase: [
        { input: "-2 1 -3 4 -1 2 1", expectedOutput: "6" },
        { input: "-1", expectedOutput: "-1" }
      ]
    },

    {
      title: "Longest Subarray with Given Sum",
      topic: "Arrays",
      difficulty: "hard",
      description: "Return the length of the longest subarray whose sum equals k.",
      constraints: [
        "1 ≤ nums.length ≤ 10^5"
      ],
      testcase: [
        { input: "10 5 2 7 1 9\n15", expectedOutput: "4" },
        { input: "1 2 3 7 5\n12", expectedOutput: "3" }
      ]
    },

    {
      title: "Merge Intervals",
      topic: "Arrays",
      difficulty: "hard",
      description: "Merge all overlapping intervals and return the resulting intervals.",
      constraints: [
        "1 ≤ intervals.length ≤ 10^5"
      ],
      testcase: [
        { input: "1 3\n2 6\n8 10", expectedOutput: "1 6\n8 10" },
        { input: "1 4\n4 5", expectedOutput: "1 5" }
      ]
    },

    {
      title: "Product of Array Except Self",
      topic: "Arrays",
      difficulty: "hard",
      description: "Return an array such that each element is the product of all other elements.",
      constraints: [
        "1 ≤ nums.length ≤ 10^5"
      ],
      testcase: [
        { input: "1 2 3 4", expectedOutput: "24 12 8 6" },
        { input: "2 3 4 5", expectedOutput: "60 40 30 24" }
      ]
    },

    {
      title: "Subarray Sum Equals K",
      topic: "Arrays",
      difficulty: "hard",
      description: "Return the total number of subarrays whose sum equals k.",
      constraints: [
        "1 ≤ nums.length ≤ 10^5"
      ],
      testcase: [
        { input: "1 1 1\n2", expectedOutput: "2" },
        { input: "3 4 7 2 -3 1 4 2\n7", expectedOutput: "4" }
      ]
    },
        {
      title: "Reverse an Array",
      topic: "Two-Pointers",
      difficulty: "easy",
      description: "Given an integer array nums, reverse the array and return the result.",
      constraints: [
        "1 ≤ nums.length ≤ 10^5"
      ],
      testcase: [
        { input: "1 2 3", expectedOutput: "3 2 1" },
        { input: "5", expectedOutput: "5" }
      ]
    },

    {
      title: "Check Palindrome String",
      topic: "Two-Pointers",
      difficulty: "easy",
      description: "Given a string s, return true if it is a palindrome, otherwise return false.",
      constraints: [
        "String contains lowercase English letters only"
      ],
      testcase: [
        { input: "madam", expectedOutput: "true" },
        { input: "hello", expectedOutput: "false" }
      ]
    },

    {
      title: "Move Zeros to End",
      topic: "Two-Pointers",
      difficulty: "easy",
      description: "Move all zeros in the array to the end while maintaining the order of non-zero elements.",
      constraints: [
        "0 ≤ nums.length ≤ 10^5"
      ],
      testcase: [
        { input: "0 1 0 3 12", expectedOutput: "1 3 12 0 0" },
        { input: "0 0 1 2", expectedOutput: "1 2 0 0" }
      ]
    },

    {
      title: "Remove Element",
      topic: "Two-Pointers",
      difficulty: "easy",
      description: "Remove all occurrences of a target value from the array and return the resulting array.",
      constraints: [
        "0 ≤ nums.length ≤ 10^5"
      ],
      testcase: [
        { input: "3 2 2 3\n3", expectedOutput: "2 2" },
        { input: "1 2 3 4 5\n6", expectedOutput: "1 2 3 4 5" }
      ]
    },

    {
      title: "Reverse String",
      topic: "Two-Pointers",
      difficulty: "easy",
      description: "Reverse the given string and return the result.",
      constraints: [
        "1 ≤ s.length ≤ 10^5"
      ],
      testcase: [
        { input: "abcd", expectedOutput: "dcba" },
        { input: "a", expectedOutput: "a" }
      ]
    },

    {
      title: "Two Sum (Sorted Array)",
      topic: "Two-Pointers",
      difficulty: "medium",
      description: "Given a sorted array and a target, return indices of the two numbers that add up to the target.",
      constraints: [
        "Array is sorted",
        "Exactly one valid solution exists"
      ],
      testcase: [
        { input: "2 7 11 15\n9", expectedOutput: "0 1" },
        { input: "1 3 4 6 8 11\n10", expectedOutput: "1 3" }
      ]
    },

    {
      title: "Remove Duplicates from Sorted Array",
      topic: "Two-Pointers",
      difficulty: "medium",
      description: "Remove duplicates from a sorted array and return the count of unique elements.",
      constraints: [
        "Array is sorted",
        "1 ≤ nums.length ≤ 10^5"
      ],
      testcase: [
        { input: "1 1 2 2 3", expectedOutput: "3" },
        { input: "1 1 1", expectedOutput: "1" }
      ]
    },

    {
      title: "Merge Two Sorted Arrays",
      topic: "Two-Pointers",
      difficulty: "medium",
      description: "Merge two sorted arrays into a single sorted array.",
      constraints: [
        "Both arrays are sorted"
      ],
      testcase: [
        { input: "1 3 5\n2 4 6", expectedOutput: "1 2 3 4 5 6" },
        { input: "\n1 2 3", expectedOutput: "1 2 3" }
      ]
    },

    {
      title: "Container With Most Water",
      topic: "Two-Pointers",
      difficulty: "medium",
      description: "Given heights of vertical lines, find the maximum amount of water a container can store.",
      constraints: [
        "2 ≤ nums.length ≤ 10^5"
      ],
      testcase: [
        { input: "1 8 6 2 5 4 8 3 7", expectedOutput: "49" },
        { input: "1 1", expectedOutput: "1" }
      ]
    },

    {
      title: "Longest Palindromic Substring Length",
      topic: "Two-Pointers",
      difficulty: "medium",
      description: "Return the length of the longest palindromic substring in the given string.",
      constraints: [
        "1 ≤ s.length ≤ 10^5"
      ],
      testcase: [
        { input: "babad", expectedOutput: "3" },
        { input: "cbbd", expectedOutput: "2" }
      ]
    },

    {
      title: "Trapping Rain Water",
      topic: "Two-Pointers",
      difficulty: "hard",
      description: "Given elevation heights, compute how much water can be trapped after raining.",
      constraints: [
        "1 ≤ nums.length ≤ 10^5"
      ],
      testcase: [
        { input: "0 1 0 2 1 0 1 3 2 1 2 1", expectedOutput: "6" },
        { input: "4 2 0 3 2 5", expectedOutput: "9" }
      ]
    },

    {
      title: "Minimum Window Subarray Sum",
      topic: "Two-Pointers",
      difficulty: "hard",
      description: "Return the minimum length of a contiguous subarray whose sum is at least target.",
      constraints: [
        "All elements are positive"
      ],
      testcase: [
        { input: "2 3 1 2 4 3\n7", expectedOutput: "2" },
        { input: "1 4 4\n4", expectedOutput: "1" }
      ]
    },

    {
      title: "Pair With Difference K",
      topic: "Two-Pointers",
      difficulty: "hard",
      description: "Determine if there exists a pair of numbers with an absolute difference equal to k.",
      constraints: [
        "Array is sorted",
        "1 ≤ nums.length ≤ 10^5"
      ],
      testcase: [
        { input: "1 3 5 8 10\n2", expectedOutput: "true" },
        { input: "1 3 5\n4", expectedOutput: "false" }
      ]
    },

    {
      title: "Count Valid Pairs",
      topic: "Two-Pointers",
      difficulty: "hard",
      description: "Count the number of pairs whose sum is less than a given target.",
      constraints: [
        "Array is sorted",
        "1 ≤ nums.length ≤ 10^5"
      ],
      testcase: [
        { input: "1 2 3 4 5\n6", expectedOutput: "4" },
        { input: "1 1 2 2 3\n4", expectedOutput: "4" }
      ]
    },

    {
      title: "Longest Substring Without Repeating Characters",
      topic: "Two-Pointers",
      difficulty: "hard",
      description: "Return the length of the longest substring without repeating characters.",
      constraints: [
        "1 ≤ s.length ≤ 10^5"
      ],
      testcase: [
        { input: "abcabcbb", expectedOutput: "3" },
        { input: "bbbbb", expectedOutput: "1" }
      ]
    },
        {
      title: "Binary Search",
      topic: "Binary-Search",
      difficulty: "easy",
      description: "Given a sorted array and a target value, return the index of the target if it exists, otherwise return -1.",
      constraints: [
        "Array is sorted in ascending order",
        "1 ≤ nums.length ≤ 10^5"
      ],
      testcase: [
        { input: "1 3 5 7\n5", expectedOutput: "2" },
        { input: "1 3 5 7\n6", expectedOutput: "-1" }
      ]
    },

    {
      title: "First Occurrence of Element",
      topic: "Binary-Search",
      difficulty: "easy",
      description: "Return the index of the first occurrence of the target element in a sorted array.",
      constraints: [
        "Array is sorted",
        "Duplicates may exist"
      ],
      testcase: [
        { input: "1 2 2 2 3\n2", expectedOutput: "1" },
        { input: "5 5 5 6 7\n5", expectedOutput: "0" }
      ]
    },

    {
      title: "Last Occurrence of Element",
      topic: "Binary-Search",
      difficulty: "easy",
      description: "Return the index of the last occurrence of the target element in a sorted array.",
      constraints: [
        "Array is sorted",
        "Duplicates may exist"
      ],
      testcase: [
        { input: "1 2 2 2 3\n2", expectedOutput: "3" },
        { input: "4 5 6 6 6 7\n6", expectedOutput: "4" }
      ]
    },

    {
      title: "Count Occurrences",
      topic: "Binary-Search",
      difficulty: "easy",
      description: "Count the number of times a target element appears in a sorted array.",
      constraints: [
        "Array is sorted"
      ],
      testcase: [
        { input: "1 2 2 2 3\n2", expectedOutput: "3" },
        { input: "4 4 4 4 5 6\n4", expectedOutput: "4" }
      ]
    },

    {
      title: "Floor of a Number",
      topic: "Binary-Search",
      difficulty: "easy",
      description: "Find the greatest element in the array that is less than or equal to the target.",
      constraints: [
        "Array is sorted"
      ],
      testcase: [
        { input: "1 2 4 6 8\n5", expectedOutput: "4" }
      ]
    },

    {
      title: "Search in Rotated Sorted Array",
      topic: "Binary-Search",
      difficulty: "medium",
      description: "Return the index of the target in a rotated sorted array, or -1 if it does not exist.",
      constraints: [
        "Array contains distinct elements"
      ],
      testcase: [
        { input: "4 5 6 7 0 1 2\n0", expectedOutput: "4" },
        { input: "2 3 5 7 9\n1", expectedOutput: "-1" }
      ]
    },

    {
      title: "Find Minimum in Rotated Sorted Array",
      topic: "Binary-Search",
      difficulty: "medium",
      description: "Return the minimum element in a rotated sorted array.",
      constraints: [
        "Array contains distinct elements"
      ],
      testcase: [
        { input: "3 4 5 1 2", expectedOutput: "1" },
        { input: "4 5 6 7 0 1 2", expectedOutput: "0" }
      ]
    },

    {
      title: "Peak Element",
      topic: "Binary-Search",
      difficulty: "medium",
      description: "Return the index of any peak element.",
      constraints: [
        "1 ≤ nums.length ≤ 10^5"
      ],
      testcase: [
        { input: "1 2 3 1", expectedOutput: "2" },
        { input: "1 3 2 4 1", expectedOutput: "3" }
      ]
    },

    {
      title: "Square Root of a Number",
      topic: "Binary-Search",
      difficulty: "medium",
      description: "Return the integer part of the square root of a non-negative integer.",
      constraints: [
        "0 ≤ x ≤ 10^9"
      ],
      testcase: [
        { input: "16", expectedOutput: "4" },
        { input: "20", expectedOutput: "4" }
      ]
    },

    {
      title: "Kth Missing Positive Number",
      topic: "Binary-Search",
      difficulty: "medium",
      description: "Find the kth missing positive number from a sorted array of positive integers.",
      constraints: [
        "Array is sorted"
      ],
      testcase: [
        { input: "2 3 4 7 11\n5", expectedOutput: "9" },
        { input: "1 2 3 4\n2", expectedOutput: "6" }
      ]
    },

    {
      title: "Allocate Minimum Pages",
      topic: "Binary-Search",
      difficulty: "hard",
      description: "Allocate books to students such that the maximum pages assigned is minimized.",
      constraints: [
        "Books must be allocated contiguously"
      ],
      testcase: [
        { input: "12 34 67 90\n2", expectedOutput: "113" },
        { input: "10 20 30 40\n2", expectedOutput: "60" }
      ]
    },

    {
      title: "Aggressive Cows",
      topic: "Binary-Search",
      difficulty: "hard",
      description: "Place cows in stalls such that the minimum distance between any two cows is maximized.",
      constraints: [
        "Stalls positions are integers"
      ],
      testcase: [
        { input: "1 2 4 8 9\n3", expectedOutput: "3" },
        { input: "1 3 5 7 9\n3", expectedOutput: "4" }
      ]
    },

    {
      title: "Koko Eating Bananas",
      topic: "Binary-Search",
      difficulty: "hard",
      description: "Find the minimum eating speed such that Koko can eat all bananas within h hours.",
      constraints: [
        "1 ≤ piles.length ≤ 10^5"
      ],
      testcase: [
        { input: "3 6 7 11\n8", expectedOutput: "4" },
        { input: "30 11 23 4 20\n5", expectedOutput: "30" }
      ]
    },

    {
      title: "Minimum Days to Make Bouquets",
      topic: "Binary-Search",
      difficulty: "hard",
      description: "Return the minimum number of days needed to make m bouquets using k adjacent flowers.",
      constraints: [
        "1 ≤ bloomDay.length ≤ 10^5"
      ],
      testcase: [
        { input: "1 10 3 10 2\n3\n1", expectedOutput: "3" },
        { input: "7 7 7 7 12 7 7\n2\n3", expectedOutput: "12" }
      ]
    },

    {
      title: "Ship Packages Within D Days",
      topic: "Binary-Search",
      difficulty: "hard",
      description: "Find the minimum ship capacity required to ship all packages within D days.",
      constraints: [
        "1 ≤ weights.length ≤ 10^5"
      ],
      testcase: [
        { input: "1 2 3 4 5 6 7 8 9 10\n5", expectedOutput: "15" },
        { input: "3 2 2 4 1 4\n3", expectedOutput: "6" }
      ]
    },
        {
      title: "Print Numbers from 1 to N",
      topic: "Recursion",
      difficulty: "easy",
      description: "Print numbers from 1 to N using recursion.",
      constraints: [
        "1 ≤ n ≤ 10^5"
      ],
      testcase: [
        { input: "5", expectedOutput: "1 2 3 4 5" },
        { input: "1", expectedOutput: "1" }
      ]
    },

    {
      title: "Factorial of a Number",
      topic: "Recursion",
      difficulty: "easy",
      description: "Return the factorial of a given number using recursion.",
      constraints: [
        "0 ≤ n ≤ 12"
      ],
      testcase: [
        { input: "5", expectedOutput: "120" },
        { input: "0", expectedOutput: "1" }
      ]
    },

    {
      title: "Fibonacci Number",
      topic: "Recursion",
      difficulty: "easy",
      description: "Return the nth Fibonacci number using recursion.",
      constraints: [
        "0 ≤ n ≤ 30"
      ],
      testcase: [
        { input: "6", expectedOutput: "8" },
        { input: "1", expectedOutput: "1" }
      ]
    },

    {
      title: "Sum of Digits",
      topic: "Recursion",
      difficulty: "easy",
      description: "Return the sum of digits of a number using recursion.",
      constraints: [
        "0 ≤ n ≤ 10^9"
      ],
      testcase: [
        { input: "1234", expectedOutput: "10" },
        { input: "9", expectedOutput: "9" }
      ]
    },

    {
      title: "Count Digits",
      topic: "Recursion",
      difficulty: "easy",
      description: "Return the number of digits in a given number using recursion.",
      constraints: [
        "0 ≤ n ≤ 10^9"
      ],
      testcase: [
        { input: "12345", expectedOutput: "5" },
        { input: "7", expectedOutput: "1" }
      ]
    },

    {
      title: "Power of a Number",
      topic: "Recursion",
      difficulty: "medium",
      description: "Compute x raised to the power n using recursion.",
      constraints: [
        "-10 ≤ x ≤ 10",
        "0 ≤ n ≤ 10^9"
      ],
      testcase: [
        { input: "2\n5", expectedOutput: "32" },
        { input: "3\n3", expectedOutput: "27" }
      ]
    },

    {
      title: "Check Palindrome (Recursive)",
      topic: "Recursion",
      difficulty: "medium",
      description: "Check whether a string is a palindrome using recursion.",
      constraints: [
        "1 ≤ length ≤ 10^5",
        "Lowercase letters only"
      ],
      testcase: [
        { input: "madam", expectedOutput: "true" },
        { input: "hello", expectedOutput: "false" }
      ]
    },

    {
      title: "Count Ways to Climb Stairs",
      topic: "Recursion",
      difficulty: "medium",
      description: "Given n steps, you can climb 1 or 2 steps at a time.",
      constraints: [
        "1 ≤ n ≤ 45"
      ],
      testcase: [
        { input: "4", expectedOutput: "5" },
        { input: "2", expectedOutput: "2" }
      ]
    },

    {
      title: "Binary Representation of a Number",
      topic: "Recursion",
      difficulty: "medium",
      description: "Return the binary representation of a number using recursion.",
      constraints: [
        "0 ≤ n ≤ 10^9"
      ],
      testcase: [
        { input: "5", expectedOutput: "101" },
        { input: "1", expectedOutput: "1" }
      ]
    },

    {
      title: "Reverse a String (Recursive)",
      topic: "Recursion",
      difficulty: "medium",
      description: "Reverse a string using recursion.",
      constraints: [
        "1 ≤ length ≤ 10^5"
      ],
      testcase: [
        { input: "abcd", expectedOutput: "dcba" },
        { input: "a", expectedOutput: "a" }
      ]
    },

    {
      title: "Generate All Balanced Parentheses",
      topic: "Recursion",
      difficulty: "hard",
      description: "Generate all combinations of well-formed parentheses using recursion.",
      constraints: [
        "1 ≤ n ≤ 8"
      ],
      testcase: [
        { input: "2", expectedOutput: "(()) ()()" },
        { input: "1", expectedOutput: "()" }
      ]
    },

    {
      title: "Tower of Hanoi",
      topic: "Recursion",
      difficulty: "hard",
      description: "Return the minimum number of moves required.",
      constraints: [
        "1 ≤ n ≤ 20"
      ],
      testcase: [
        { input: "3", expectedOutput: "7" },
        { input: "1", expectedOutput: "1" }
      ]
    },

    {
      title: "Josephus Problem",
      topic: "Recursion",
      difficulty: "hard",
      description: "Return the position of the last remaining person.",
      constraints: [
        "1 ≤ n ≤ 10^5"
      ],
      testcase: [
        { input: "7\n3", expectedOutput: "4" },
        { input: "5\n2", expectedOutput: "3" }
      ]
    },

    {
      title: "Subset Sum",
      topic: "Recursion",
      difficulty: "hard",
      description: "Return true if there exists a subset with sum equal to target.",
      constraints: [
        "1 ≤ n ≤ 20"
      ],
      testcase: [
        { input: "3 34 4 12 5 2\n9", expectedOutput: "true" },
        { input: "1 2 3\n7", expectedOutput: "false" }
      ]
    },

    {
      title: "Generate All Permutations of a String",
      topic: "Recursion",
      difficulty: "hard",
      description: "Generate all permutations of a string using recursion.",
      constraints: [
        "1 ≤ length ≤ 8"
      ],
      testcase: [
        { input: "abc", expectedOutput: "abc acb bac bca cab cba" },
        { input: "ab", expectedOutput: "ab ba" }
      ]
    },
        {
      title: "Climbing Stairs",
      topic: "dynamic-programming",
      difficulty: "easy",
      description: "Return the number of distinct ways to climb to the top when you can take 1 or 2 steps.",
      constraints: [
        "1 ≤ n ≤ 45"
      ],
      testcase: [
        { input: "4", expectedOutput: "5" },
        { input: "2", expectedOutput: "2" }
      ]
    },

    {
      title: "Fibonacci Number (DP)",
      topic: "dynamic-programming",
      difficulty: "easy",
      description: "Return the nth Fibonacci number using dynamic programming.",
      constraints: [
        "0 ≤ n ≤ 30"
      ],
      testcase: [
        { input: "6", expectedOutput: "8" },
        { input: "0", expectedOutput: "0" }
      ]
    },

    {
      title: "Minimum Cost Climbing Stairs",
      topic: "Dynamic-Programming",
      difficulty: "easy",
      description: "Return the minimum cost to reach the top of the floor.",
      constraints: [
        "2 ≤ cost.length ≤ 1000"
      ],
      testcase: [
        { input: "10 15 20", expectedOutput: "15" },
        { input: "1 100 1 1 1 100 1 1 100 1", expectedOutput: "6" }
      ]
    },

    {
      title: "Decode Ways",
      topic: "Dynamic-Programming",
      difficulty: "easy",
      description: "Return the number of ways to decode a string of digits.",
      constraints: [
        "1 ≤ s.length ≤ 100"
      ],
      testcase: [
        { input: "12", expectedOutput: "2" },
        { input: "226", expectedOutput: "3" }
      ]
    },

    {
      title: "Coin Change",
      topic: "Dynamic-Programming",
      difficulty: "medium",
      description: "Return the minimum number of coins needed to make up a given amount.",
      constraints: [
        "1 ≤ coins.length ≤ 12",
        "0 ≤ amount ≤ 10^4"
      ],
      testcase: [
        { input: "1 2 5\n11", expectedOutput: "3" },
        { input: "2\n3", expectedOutput: "-1" }
      ]
    },

    {
      title: "Longest Increasing Subsequence",
      topic: "Dynamic-Programming",
      difficulty: "medium",
      description: "Return the length of the longest strictly increasing subsequence.",
      constraints: [
        "1 ≤ nums.length ≤ 2500"
      ],
      testcase: [
        { input: "10 9 2 5 3 7 101 18", expectedOutput: "4" },
        { input: "0 1 0 3 2 3", expectedOutput: "4" }
      ]
    },

    {
      title: "Unique Paths",
      topic: "Dynamic-Programming",
      difficulty: "medium",
      description: "Return the number of unique paths from top-left to bottom-right of a grid.",
      constraints: [
        "1 ≤ m, n ≤ 100"
      ],
      testcase: [
        { input: "3\n7", expectedOutput: "28" },
        { input: "3\n2", expectedOutput: "3" }
      ]
    },

    {
      title: "Partition Equal Subset Sum",
      topic: "Dynamic-Programming",
      difficulty: "medium",
      description: "Return true if the array can be partitioned into two subsets with equal sum.",
      constraints: [
        "1 ≤ nums.length ≤ 200"
      ],
      testcase: [
        { input: "1 5 11 5", expectedOutput: "true" },
        { input: "1 2 3 5", expectedOutput: "false" }
      ]
    },

    {
      title: "Longest Common Subsequence",
      topic: "Dynamic-Programming",
      difficulty: "medium",
      description: "Return the length of the longest common subsequence of two strings.",
      constraints: [
        "1 ≤ text1.length, text2.length ≤ 1000"
      ],
      testcase: [
        { input: "abcde\nace", expectedOutput: "3" },
        { input: "abc\nabc", expectedOutput: "3" }
      ]
    },

    {
      title: "0/1 Knapsack",
      topic: "Dynamic-Programming",
      difficulty: "hard",
      description: "Return the maximum value that can be put in a knapsack of given capacity.",
      constraints: [
        "1 ≤ n ≤ 100",
        "1 ≤ W ≤ 10^4"
      ],
      testcase: [
        { input: "1 3 4 5\n1 4 5 7\n7", expectedOutput: "9" },
        { input: "2 3 4\n4 5 6\n5", expectedOutput: "6" }
      ]
    },

    {
      title: "Edit Distance",
      topic: "Dynamic-Programming",
      difficulty: "hard",
      description: "Return the minimum number of operations to convert one string to another.",
      constraints: [
        "1 ≤ word1.length, word2.length ≤ 500"
      ],
      testcase: [
        { input: "horse\nros", expectedOutput: "3" },
        { input: "intention\nexecution", expectedOutput: "5" }
      ]
    },

    {
      title: "Burst Balloons",
      topic: "Dynamic-Programming",
      difficulty: "hard",
      description: "Return the maximum coins you can collect by bursting balloons wisely.",
      constraints: [
        "1 ≤ nums.length ≤ 300"
      ],
      testcase: [
        { input: "3 1 5 8", expectedOutput: "167" },
        { input: "1 5", expectedOutput: "10" }
      ]
    },

    {
      title: "Matrix Chain Multiplication",
      topic: "Dynamic-Programming",
      difficulty: "hard",
      description: "Return the minimum number of multiplications needed to multiply matrices.",
      constraints: [
        "2 ≤ n ≤ 100"
      ],
      testcase: [
        { input: "1 2 3 4", expectedOutput: "18" },
        { input: "10 20 30", expectedOutput: "6000" }
      ]
    },

    {
      title: "Word Break",
      topic: "Dynamic-Programming",
      difficulty: "hard",
      description: "Return true if the string can be segmented into words from the dictionary.",
      constraints: [
        "1 ≤ s.length ≤ 300"
      ],
      testcase: [
        { input: "leetcode\nleet code", expectedOutput: "true" },
        { input: "catsandog\ncats dog sand and cat", expectedOutput: "false" }
      ]
    }



  ]);
}

module.exports = seed;
