/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  const ans = [];
  nums.sort((a, b) => a - b);
  const n = nums.length;
  for (let i = 0; i < n - 2; i++) {
    const x = nums[i];
    if (i > 0 && x === nums[i - 1]) continue; // 去重
    if (x + nums[i + 1] + nums[i + 2] > 0) break; // 优化一
    if (x + nums[n - 1] + nums[n - 2] < 0) continue; // 优化二
    let j = i + 1;
    let k = n - 1;

    while (j < k) {
      sum = nums[i] + nums[j] + nums[k];
      if (sum > 0) {
        k--;
      } else if (sum < 0) {
        j++;
      } else {
        // 三数之和为 0
        // j = i+1 表示刚开始双指针，此时 j 左边没有数字
        // nums[j] != nums[j-1] 说明与上一轮循环的三元组不同
        if (j === i + 1 || nums[j] !== nums[j - 1]) {
          ans.push([nums[i], nums[j], nums[k]]);
        }
        j++;
        k--;
      }
    }
  }
  return ans;
};
// @lc code=end

console.log("----------", threeSum([-1, 0, 1, 2, -1, -4]));
