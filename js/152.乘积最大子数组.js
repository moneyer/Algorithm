/*
 * @lc app=leetcode.cn id=152 lang=javascript
 *
 * [152] 乘积最大子数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {

  let ans = -Infinity;
  let max, min;
  max = min = 1;
  for (let i = 0; i < nums.length; i++) {
    const element = nums[i];
    const mx = max;
    max = Math.max(max * element, min * element, element);
    min = Math.min(mx * element, min * element, element);
    ans = Math.max(max, ans)
  }
  return ans;


    // const n = nums.length;
    // const fMax = new Array(n);
    // const fMin = new Array(n);
    // fMax[0] = fMin[0] = nums[0];
    // for (let i = 1; i < n; i ++) {
    //   const x = nums[i];
    //   fMax[i] = Math.max(fMax[i - 1] * x, fMin[i - 1] * x, x );
    //   fMin[i] = Math.min(fMax[i - 1] * x, fMin[i - 1] * x, x );
    // }
    // return Math.max(...fMax)
};
// @lc code=end

// console.log('--------------maxProduct', maxProduct([2,3,-2,4]));