/*
 * @lc app=leetcode.cn id=322 lang=javascript
 *
 * [322] 零钱兑换
 */

// @lc code=start
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
  let dp = new Array(amount + 1).fill(amount + 1);
  dp[0] = 0;
  for ( let i = 0; i < dp.length; i ++) {
    for (let coin of coins) {
      if (i - coin < 0) {
        continue;
      }
      dp[i] = Math.min(dp[i], 1 + dp[i - coin])
    }
  }
  return dp[amount] === amount + 1 ? -1 : dp[amount];
  // return dp(coins, amount)
};

// 超时
// function dp (coins, amount) {

//   if (amount === 0) return 0;
//   if (amount < 0) return -1;

//   let res = Number.MAX_SAFE_INTEGER;
//   for ( let coin of coins) {
//     let subProblem = dp(coins, amount - coin);
//     if (subProblem === -1) continue;
//     res = Math.min(res, subProblem +1)
//   }

//   return res === Number.MAX_SAFE_INTEGER ? -1 : res;
// };
// @lc code=end

// console.log(coinChange([1, 2, 5], 11));

