/*
 * @lc app=leetcode.cn id=1456 lang=javascript
 *
 * [1456] 定长子串中元音的最大数目
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function (s, k) {
  let res = 0;
  let x = 0;
  for (let i = 0; i < s.length; i++) {
    if (
      s[i] === "a" ||
      s[i] === "e" ||
      s[i] === "i" ||
      s[i] === "o" ||
      s[i] === "u"
    ) {
      x++;
    }

    // R - L + 1 =  k
    let left = i - k + 1;
    if (left < 0) {
      continue;
    }
    res = Math.max(res, x);

    let c = s[i - k + 1];
    if (c === "a" || c === "e" || c === "i" || c === "o" || c === "u") {
      x--;
    }
  }
  return res;

  // const vowels = ["a", "e", "i", "o", "u"];
  // let res = 0;
  // for (let i = 0; i <= s.length - k; i++) {
  //   const ss = s.slice(i, i + k);
  //   let x = 0;

  //   for (let j = 0; j < k; j++) {
  //     if (vowels.includes(ss[j])) {
  //       x++;
  //     }
  //   }
  //   if (x > res) {
  //     res = x;
  //   }
  // }
  // return res;
};
// @lc code=end

console.log("-------------", maxVowels("abciiidef", 3));
console.log("-------------", maxVowels("aeiou", 2));
