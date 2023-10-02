/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
  }
}

function hasCycle(head: ListNode | null): boolean {
  if (head === null || head.next === null) return false
  let slow:ListNode = head
  let fast:ListNode = head.next
  while (fast !== null && fast.next !== null && slow !== fast) {
    slow = slow.next
    fast = fast.next.next
  } 
  if (slow === fast) return true
  return false
};