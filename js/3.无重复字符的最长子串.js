/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let ans = 0;
  let left = 0;
  const window = new Set();
  for (let right = 0; right < s.length; right++) {
    const c = s[right];

    while (window.has(c)) {
      window.delete(s[left]);
      left++;
    }
    window.add(c);
    const length = right - left + 1;
    if (ans < length) {
      ans = length;
    }
  }
  return ans;
};
// @lc code=end

/**
 * 方法一 map
 * @param {string} s
 * @return {number}
 */
// var lengthOfLongestSubstring = function (s) {
//   let ans = 0;
//   let left = 0;
//   const cmp = new Map();
//   for (let right = 0; right < s.length; right++) {
//     const c = s[right];
//     cmp.set(c, (cmp.get(c) ?? 0) + 1);
//     while (cmp.get(c) > 1) {
//       cmp.set(s[left], cmp.get(s[left]) - 1);
//       left++;
//     }
//     const length = right - left + 1;
//     if (ans < length) {
//       ans = length;
//     }
//   }
//   return ans;
// };

console.log(
  lengthOfLongestSubstring("abcabcbb"),
  lengthOfLongestSubstring("abcabcbb") === 3
);

console.log(
  lengthOfLongestSubstring("bbbbb"),
  lengthOfLongestSubstring("bbbbb") === 1
);
