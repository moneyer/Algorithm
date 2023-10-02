/*
 * @lc app=leetcode.cn id=118 lang=javascript
 *
 * [118] 杨辉三角
 */

// @lc code=start
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
  let res = []
  for (let row = 0; row < numRows; row ++) {
    if (row === 0) {
      res.push([1])
    // } else if (row === 1){
    //   res.push([ 1, 1 ])
    } else {
      let temp = []
      let lastRow = res[row - 1]
      // console.log('---',res, row, lastRow);
      for (let column = 0; column <= row - 1; column ++) {
        let count = 1
        if (column !== 0) {
          count = (lastRow[column - 1] || 1) + (lastRow[column ] || 0)
        }
        // console.log('count', count, '==', lastRow[column] , (lastRow[column + 1] || 0))
        temp.push(count)
      }
      temp.push(1)
      res.push(temp)
    }
  }
  return res
};
// @lc code=end

