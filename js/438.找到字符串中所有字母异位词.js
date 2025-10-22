/*
 * @lc app=leetcode.cn id=438 lang=javascript
 *
 * [438] 找到字符串中所有字母异位词
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {

  if(s.length < p.length) {
    return []
  }
  const ans = [];
  const cntS = new Array(26).fill(0);
  const cntP = new Array(26).fill(0);
  for (const c of p) {
    cntP[c.charCodeAt() - "a".charCodeAt()]++;
  }
  for (let right = 0; right < s.length; right++) {
    cntS[s[right].charCodeAt() - "a".charCodeAt()]++;
    const left = right - p.length + 1;
    if (left < 0) {
      continue;
    }

    if (cntS.toString() === cntP.toString()) {
      ans.push(left);
    }
    cntS[s[left].charCodeAt() - "a".charCodeAt()]--;
  }
  return ans;
};
// @lc code=end


console.log(findAnagrams('cbaebabacd', 'abc'));
