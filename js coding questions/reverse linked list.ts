/*
Given the head of a singly linked list, reverse the list, and return the reversed list.
Input: head = [1,2,3,4,5]
Output: [5,4,3,2,1]
*/

/**
 * Definition for singly-linked list.
 */
class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

//recursive implementation
function reverseList(head: ListNode | null): ListNode | null {
  if (!head) return head;
  function reverse(curr: ListNode, parent: ListNode | null): ListNode {
    const next = curr.next;
    curr = new ListNode(curr.val, parent);
    if (!next) return curr;
    return reverse(next, curr);
  }
  return reverse(head, null);
}

//iterative implementation

function reverseListIterative(head: ListNode | null): ListNode | null {
  let prev: ListNode | null = null;

  while (head) {
    let next = head.next;
    head.next = prev;
    prev = head;
    head = next;
  }

  return prev;
}

// Test cases

const head1 = new ListNode(1);
const head2 = new ListNode(1, new ListNode(2));
const head3 = new ListNode(1, new ListNode(2, new ListNode(3)));
const head4 = new ListNode(
  1,
  new ListNode(2, new ListNode(3, new ListNode(4)))
);
const head5 = new ListNode(
  1,
  new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5))))
);

console.log(reverseList(head5)?.val); // 5
console.log(reverseListIterative(head5)?.val); //5
