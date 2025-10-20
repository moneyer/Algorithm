/*
 * @lc app=leetcode.cn id=18 lang=javascript
 *
 * [18] 四数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
  nums.sort((a, b) => a - b);
  const n = nums.length;
  const res = [];
  for (let a = 0; a < n - 3; a++) {
    let x = nums[a];
    if (a > 0 && x === nums[a - 1]) continue; // 去重
    if (x + nums[a + 1] + nums[a + 2] + nums[a + 3] > target) break; // 优化一
    if (x + nums[n - 1] + nums[n - 2] + nums[n - 3] < target) continue; // 优化二

    for (let b = a + 1; b < n - 1; b++) {
      const y = nums[b];
      if (b > a + 1 && y === nums[b - 1]) continue; // 去重

      if (x + y + nums[b + 1] + nums[b + 2] > target) break; // 优化一
      if (x + y + nums[n - 1] + nums[n - 2] < target) continue; // 优化二

      let c = b + 1,
        d = n - 1;
      while (c < d) {
        const s = x + y + nums[c] + nums[d];
        if (s > target) {
          d--;
        } else if (s < target) {
          c++;
        } else {
          // 第三个数不相等 则 必然不同于上一组
          if (c === b + 1 || nums[c] !== nums[c - 1]) {
            res.push([x, y, nums[c], nums[d]]);
          }
          c++;
          d--;
        }
      }
    }
  }

  return res;
};
// @lc code=end

console.log("----------", fourSum([1, 0, -1, 0, -2, 2], 0));
