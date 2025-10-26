/*
 * @lc app=leetcode.cn id=189 lang=javascript
 *
 * [189] 轮转数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  // 3次翻转
  function reserve(i, j) {
    while (i < j) {
      [nums[i], nums[j]] = [nums[j], nums[i]];
      i++;
      j--;
    }
  }
  const n = nums.length;
  k = k % n;
  reserve(0, n - 1);
  reserve(0, k - 1);
  reserve(k, n - 1);
};
// @lc code=end

// var rotate = function(nums, k) {
//   const n = nums.length;
//   const newNums = new Array(n);
//   for (let i = 0; i < n; i++) {
//     newNums[(i + k) % n] = nums[i]
//   }
//   for (let i = 0; i < n; i++) {
//     nums[i] = newNums[i]
//   }
// };

// let nums = [1, 2, 3, 4, 5, 6, 7];
// rotate(nums, 3);
// console.log(nums);

