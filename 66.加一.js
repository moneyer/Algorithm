/*
 * @lc app=leetcode.cn id=66 lang=javascript
 *
 * [66] 加一
 */

// @lc code=start
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  const n = digits.length;
  for (let i = n - 1; i >= 0; i--) {
    if (digits[i] !== 9) {
      // 非9的位置加一，如果是进位，则其后面都变0
      digits[i] ++
      for (let j = i + 1; j < n; j ++) {
        digits[j] = 0
      }
      return digits
    }
  }
  // 如果全是9 999 =》 1000
  let res = new Array(n + 1).fill(0)
  res[0] = 1
  return res
};
// 1. 自己第一次的解法
//  var plusOne = function(digits) {
//   let result = digits
//   const length = result.length
//   for (let i = length - 1; i >= 0; i --) {
//     if (i === length - 1) {
//       result[i] = result[i] + 1
//     }
//     if (result[i] > 9) {
//       result[i] = 0
//       if (i - 1 >= 0) {
//         result[i-1] = result[i-1] + 1
//       } else {
//         result.unshift(1)
//       }
//     }
//   }
//   return result
// };
// @lc code=end

// const test1 = [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]

// const result = plusOne(test1)
// console.log(result);
