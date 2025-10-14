/*
 * @lc app=leetcode.cn id=283 lang=javascript
 *
 * [283] 移动零
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let left = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[left] = nums[i];
      left ++
    }
  }


  for (let i = left; i < nums.length; i++) {
    nums[i] = 0;
  }
  return nums;

  // 方法2  低效
  // const zerosIndexArray = [];
  // for (let i = 0; i < nums.length; i++) {
  //   if (nums[i] === 0) {
  //     zerosIndexArray.push(i);
  //   }
  // }
  // for (let j = 0; j < zerosIndexArray.length; j ++) {
  //   nums.splice(zerosIndexArray[j] - j, 1);
  //   nums.push(0);
  // }
  // return nums;

  // 方法1 低效的算法 15ms 击败7.15%
  // let next = true;
  // const zeroIndex = nums.length;
  // for (let i = 0; i < zeroIndex; next ? i++ : (next = true)) {
  //   if (nums[i] === 0) {
  //     next = false;
  //     nums.splice(i, 1);
  //     nums.push(0);
  //     zeroIndex--;
  //   }
  // }
  // return nums;

  // let i = 0;
  // while(i < nums.length) {
  //   if (nums[i] === 0) {
  //     nums.splice(i, 1);
  //     nums.push(0);
  //   } else {
  //     i ++
  //   }
  // }
  // return nums
};
// @lc code=end

// console.log(moveZeroes([0, 1, 0, 3, 12]));
