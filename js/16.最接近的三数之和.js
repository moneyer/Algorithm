/*
 * @lc app=leetcode.cn id=16 lang=javascript
 *
 * [16] 最接近的三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
  nums.sort((a, b) => a - b);
  let res = 0;
  const n = nums.length;
  let minDiff = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i < n - 2; i++) {
    const x = nums[i];
    if (i > 0 && x === nums[i - 1]) {
      continue; // 优化三
    }

    // 优化一
    let sum = x + nums[i + 1] + nums[i + 2];
    if (sum > target) {
      // 后面无论怎么选，选出的三个数的和不会比 sum 还小
      if (sum - target < minDiff) {
        res = sum; // 由于下面直接 break，这里无需更新 minDiff
      }
      break;
    }

    // 优化二
    sum = x + nums[n - 1] + nums[n - 2];
    if (sum < target) {
      // x 加上后面任意两个数都不超过 sum，所以下面的双指针就不需要跑了
      if (target - sum < minDiff) {
        res = sum;
        minDiff = target - sum;
      }
      continue;
    }

    // 双指针
    let left = i + 1;
    let right = n - 1;

    while (left < right) {
      sum = x + nums[left] + nums[right];
      if (sum > target) {
        if (sum - target < minDiff) {
          minDiff = sum - target;
          res = sum;
        }
        right--;
      } else if (sum < target) {
        if (target - sum < minDiff) {
          minDiff = target - sum;
          res = sum;
        }
        left++;
      } else {
        return target;
      }
    }
  }
  return res;
};
// @lc code=end

/**
 * 未优化版本
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// var threeSumClosest = function (nums, target) {
//   nums.sort((a, b) => a - b);
//   let res = nums[0] + nums[1] + nums[2];
//   for (let i = 0; i < n - 2; i++) {
//     let left = i + 1;
//     let right = n - 1;
//     while (left < right) {
//       const sum = x + nums[left] + nums[right];
//       if (sum > target) {
//         if (sum - target < Math.abs(res - target)) {
//           res = sum;
//         }
//         right--;
//       } else if (sum < target) {
//         if (target - sum < Math.abs(res - target)) {
//           res = sum;
//         }
//         left++;
//       } else {
//         return target
//       }
//     }
//   }
//   return res;
// };

console.log(
  "---------------[-1,2,1,-4],2",
  threeSumClosest([-1, 2, 1, -4], 1) === 2,
  threeSumClosest([-1, 2, 1, -4], 1)
);
console.log(
  "---------------[0,0,0],1",
  threeSumClosest([0, 0, 0], 1) === 0,
  threeSumClosest([0, 0, 0], 1)
);
