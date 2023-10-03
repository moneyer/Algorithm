/*
 * @lc app=leetcode.cn id=744 lang=javascript
 *
 * [744] 寻找比目标字母大的最小字母
 */

// @lc code=start
/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
// 方法二: 二分查找
 var nextGreatestLetter = function(letters, target) {
  const length = letters.length
  if (target >= letters[length - 1]) {
    return letters[0]
  }
  let left = 0, right = length - 1
  while (left < right) {
    const mid = Math.floor((right - left) / 2) + left
    if (letters[mid] > target) {
      right = mid
    } else {
      left = mid + 1
    }
  }

  return letters[left]
};
// 方法一: for循环
// var nextGreatestLetter = function(letters, target) {
//   let nextGreater = letters[0]
//   for (let i = 0; i < letters.length; i ++) {
//     if (letters[i] > target) {
//       nextGreater = letters[i]
//       break
//     }
//   }

//   return nextGreater
// };
// @lc code=end

