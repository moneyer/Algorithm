/*
 * @lc app=leetcode.cn id=141 lang=javascript
 *
 * [141] 环形链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
//  var hasCycle = function(head) {
//   if (head === null || head.next === null) return false
//   let slow = head
//   let fast = head.next
//   while (fast !== null && fast.next !== null && slow !== fast) {
//     slow = slow.next
//     fast = fast.next.next
//   } 
//   if (slow === fast) return true
//   return false
// };

var hasCycle = function(head) {
  if (head === null) return false
  let slow = head
  let fast = head.next
  while (fast && fast.next && slow !== fast) {
    slow = slow.next
    fast = fast.next.next
  } 
  return slow === fast
};

// O(1)内存 用集合不符合要求
// var hasCycle = function(head) {
//   if (head === null || head.next === null) return false
//   let current = head
//   let set = new Set()
//   while (current !== null) {
//     if (set.has(current)) {
//       return true
//     } else {
//       set.add(current)
//     }
//     current = current.next
//   }
//   return false
// };
// @lc code=end

