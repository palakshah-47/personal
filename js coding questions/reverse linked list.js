/*
Given the head of a singly linked list, reverse the list, and return the reversed list.
Input: head = [1,2,3,4,5]
Output: [5,4,3,2,1]
*/
var _a, _b;
/**
 * Definition for singly-linked list.
 */
var ListNode = /** @class */ (function () {
    function ListNode(val, next) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
    return ListNode;
}());
//recursive implementation
function reverseList(head) {
    if (!head)
        return head;
    function reverse(curr, parent) {
        var next = curr.next;
        curr = new ListNode(curr.val, parent);
        if (!next)
            return curr;
        return reverse(next, curr);
    }
    return reverse(head, null);
}
//iterative implementation
function reverseListIterative(head) {
    var prev = null;
    while (head) {
        var next = head.next;
        head.next = prev;
        prev = head;
        head = next;
    }
    return prev;
}
// Test cases
var head1 = new ListNode(1);
var head2 = new ListNode(1, new ListNode(2));
var head3 = new ListNode(1, new ListNode(2, new ListNode(3)));
var head4 = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4))));
var head5 = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))));
console.log((_a = reverseList(head5)) === null || _a === void 0 ? void 0 : _a.val); // 5
console.log((_b = reverseListIterative(head5)) === null || _b === void 0 ? void 0 : _b.val); //5
