/*
 * @lc app=leetcode.cn id=238 lang=javascript
 *
 * [238] 除自身以外数组的乘积
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  const n = nums.length;
  const suf = new Array(n);
  suf[n - 1] = 1;
  for (let i = n - 2; i >= 0; i--) {
    suf[i] = suf[i + 1] * nums[i + 1];
  }

  let pre = 1;
  for (let i = 0; i < n; i++) {
    suf[i] = pre * suf[i];
    pre = pre * nums[i];
  }
  return suf;
};
// @lc code=end

// var productExceptSelf = function (nums) {
//   const n = nums.length;
//   const pre = new Array(n);
//   pre[0] = 1;
//   for (let i = 1; i < n; i++) {
//     pre[i] = pre[i - 1] * nums[i - 1];
//   }

//   const suf = new Array(n);
//   suf[n - 1] = 1;
//   for (let i = n - 2; i >= 0; i--) {
//     suf[i] = suf[i + 1] * nums[i + 1];
//   }

//   const ans = new Array(n);
//   for (let i = 0; i < n; i ++) {
//     ans[i] = pre[i] * suf[i];
//   }
//   return ans
// };
