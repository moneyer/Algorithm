/*
 * @lc app=leetcode.cn id=56 lang=javascript
 *
 * [56] 合并区间
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  intervals.sort((p, q) => p[0] - q[0]); // 按照左端点从小到大排序
  const ans = [];
  for (const p of intervals) {
    console.log('---p', p, 'start');
    const m = ans.length;
    if (m && p[0] <= ans[m - 1][1]) {
      // 可以合并
      ans[m - 1][1] = Math.max(ans[m - 1][1], p[1]); // 更新右端点最大值
    } else {
      // 不相交，无法合并
      console.log("---p", p);
      ans.push(p); // 新的合并区间
    }
  }
  return ans;
};
// @lc code=end

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  const ans = [];
  intervals.sort((a, b) => a[0] - b[0]);
  for (let i = 0; i < intervals.length; i++) {
    let r = i + 1;
    let el = [...intervals[i]];
    while (
      r < intervals.length &&
      intervals[r][0] <= el[1]
    ) {
      if (intervals[r][1] > el[1]) {
        el[1] = intervals[r][1];
      }
      i = r;
      r++;
    }
    ans.push(el);
  }
  return ans;
};

console.log(
  merge([
    [1, 3],
    [2, 6],
    [8, 10],
    [15, 18],
  ])
);

console.log(
  merge([
    [1, 2],
    [4, 5],
    [1, 6],
  ])
);
