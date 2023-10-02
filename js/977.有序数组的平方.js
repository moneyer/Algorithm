/*
 * @lc app=leetcode.cn id=977 lang=javascript
 *
 * [977] 有序数组的平方
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
  const temp = nums.map(num => num * num)
  return temp.sort((a, b) => (a - b))
};
// @lc code=end

