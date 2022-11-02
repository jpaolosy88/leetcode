// https://leetcode.com/problems/reverse-linked-list/submissions

var reverseList = function (head) {
  let previous = null;
  let current = head;
  let next = null;

  while (current != null) {
    next = current.next;
    current.next = previous;
    previous = current;
    current = next;
  }
  head = previous;
  return head;
};
