/*
 * @lc app=leetcode.cn id=2824 lang=javascript
 *
 * [2824] 统计和小于目标的下标对数目
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var countPairs = function (nums, target) {
  // 双指针法
  nums.sort((a, b) => a - b);
  let left = 0,
    right = nums.length - 1;
  let res = 0;
  while (left < right) {
    if (nums[left] + nums[right] < target) {
      res += right - left;
      left++;
    } else {
      right--;
    }
  }
  return res;
};
// @lc code=end

/**
 * 方法一  暴力解法
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// var countPairs = function(nums, target) {
//   const n = nums.length;
//   let ans = 0;
//   for (let i = 0; i < n - 1; i ++) {
//     for (let j = i + 1; j < n ; j ++) {
//       if (nums[i] + nums[j] < target) {
//         ans ++;
//       }
//     }
//   }
//   return ans
// };

// console.log("-----------", countPairs([-1, 1, 2, 3, 1], 2));
