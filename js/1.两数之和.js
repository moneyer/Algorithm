/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const preNums = {};

  for (let i = 0; i < nums.length; i++) {
    const targetNum = target - nums[i];
    const targetNumIndex = preNums[targetNum]
    // targetNumIndex 可能为0
    if (targetNumIndex !== undefined) {
      return [preNums[targetNum], i];
    } else {
      preNums[nums[i]] = i;
    }
  }

  // 暴力解法
  // let left,right
  // for (let i = 0; i < nums.length; i ++) {
  //   for (let j = nums.length -1; j > i; j --) {
  //     if (nums[i] + nums[j] === target) {
  //       left = i;
  //       right = j;
  //       break;
  //     }
  //   }
  // }

  // return [left, right];
};
// @lc code=end

console.log("---------", twoSum([3, 3], 6));
