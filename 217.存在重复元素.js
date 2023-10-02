/*
 * @lc app=leetcode.cn id=217 lang=javascript
 *
 * [217] 存在重复元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
  const obj = {};
  const length = nums.length
  for (let i = 0; i < length; i ++) {
    if (!obj[nums[i]]) {
      obj[nums[i]] = 1;
    } else {
      return true;
    }
  }
  return false;
};
// @lc code=end

