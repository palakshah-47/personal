/**
 * Definition for singly-linked list.
 */
  class ListNode {
     val
     next
     constructor(val, next) {
         this.val = (val===undefined ? 0 : val)
         this.next = (next===undefined ? null : next)
     }
  }
  

function detectCycle(head){
    if (!head || !head.next) return null;
    
    let slow = head;
    let fast = head;
    
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
        if (slow === fast) break;
    }
    
    if (!fast || !fast.next) return null;
    
    slow = head;
    while (slow !== fast) {
        slow = slow.next;
        fast = fast.next;
    }
    
    return slow;
};