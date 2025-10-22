/*
 * @lc app=leetcode.cn id=49 lang=javascript
 *
 * [49] 字母异位词分组
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  const sMap = new Map()
  for (const s of strs) {
    const sortS = s.split('').sort().join('');
    if (!sMap.has(sortS)) {
      sMap.set(sortS, [])
    }
    sMap.get(sortS).push(s)
  }
  return Array.from(sMap.values())
};
// @lc code=end


/**
 * @param {string[]} strs
 * @return {string[][]}
 */
// var groupAnagrams = function(strs) {
//   const strMap = new Map()
//   const sortStr = strs.map(item => item.split('').sort().join(''));
//   // console.log('------------sortStr', sortStr);
//   const ans = []
//   for (let i = 0; i < strs.length; i++) {
//     // strMap.set(sortStr[i], (strMap.get(sortStr[i]) ?? []).push(i))
//     const value = strMap.get(sortStr[i])
//     // console.log('-----------------i, sortStr[i], value  ', i, sortStr[i], value);
//     if (value && Array.isArray(value)) {
//       strMap.set(sortStr[i], [...value, i])
//     } else {
//       strMap.set(sortStr[i], [i])
//     }
//   }
//   const keys = [...strMap.keys()];
//   keys.forEach(key => {
//     const value = strMap.get(key);
//     const arr = value.map(i => strs[i]);
//     // console.log('---------------strMap.get(key)',key,  value, Array.isArray(value));
//     ans.push(arr)
//   });
//   return ans
// };

console.log(groupAnagrams( ["eat", "tea", "tan", "ate", "nat", "bat"]));
