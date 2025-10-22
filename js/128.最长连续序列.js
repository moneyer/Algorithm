/*
 * @lc app=leetcode.cn id=128 lang=javascript
 *
 * [128] 最长连续序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  const s = new Set(nums);
  let ans = 0;
  for (const x of s) {
    if (s.has(x - 1)) {
      continue;
    }
    let y = x + 1;
    while (s.has(y)) {
      y++;
    }
    if (ans < y - x) {
      ans = y - x;
    }
  }
  return ans;
};
// @lc code=end

/**
 * @param {number[]} nums
 * @return {number}
 */
// var longestConsecutive = function (nums) {
//   const s = new Set(nums);
//   let ans = 0;
//   for (const x of s) {
//     if (s.has(x - 1)) {
//       continue;
//     }
//     let y = x + 1;
//     while (s.has(y)) {
//       y++;
//     }

//     if (ans < y - x) {
//       ans = y - x;
//     }
//   }

//   return ans;
// };

console.log(longestConsecutive([100, 4, 200, 1, 3, 2]));
