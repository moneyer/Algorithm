/*
 * @lc app=leetcode.cn id=643 lang=javascript
 *
 * [643] 子数组最大平均数 I
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
  let max = Number.MIN_SAFE_INTEGER;
  let s = 0;
  for (let i = 0; i <nums.length; i ++) {
    s += nums[i]

    // R -L + 1 = k;  L = r-k + 1
    let left = i - k + 1;
    if (left < 0) {
      continue;
    }
    if (s > max) {
      max = s
    }
    s -= nums[left]
  }
  return max/k
};
// @lc code=end


console.log('-----------', findMaxAverage([1,12,-5,-6,50,3], 4));
