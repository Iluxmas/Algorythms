// //Definition for singly-linked list.
// function ListNode(val, next) {
//   this.val = val === undefined ? 0 : val;
//   this.next = next === undefined ? null : next;
// }

/**
 * @param {ListNode} head
 * @return {ListNode}
 */

// Option 1

var reverseList = function (head) {
  let prev = null;
  let curr = head;

  while (curr) {
    const next = curr.next;
    if (!next) {
      head = curr;
    }
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  return head;
};

// Option 2
var reverseList2 = function (head) {
  let result;
  while (head) {
    result = result ? new ListNode(head.val, result) : new ListNode(head.val);
    head = head.next;
  }
  return result || head;
};
