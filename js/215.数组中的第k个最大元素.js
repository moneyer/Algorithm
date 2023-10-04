/*
 * @lc app=leetcode.cn id=215 lang=javascript
 *
 * [215] 数组中的第K个最大元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
  // const list = nums.sort((a, b) => b -a)
  // console.log(list);
  // console.log(list[k - 1]);
  // return list[k - 1]
  nums.sort((a, b) => b -a)
  return nums[k - 1]
};
// @lc code=end

// const nums = [3,2,3,1,2,4,5,5,6]
// const k = 4
// findKthLargest(nums, k)
