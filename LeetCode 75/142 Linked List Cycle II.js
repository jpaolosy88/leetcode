// https://leetcode.com/problems/linked-list-cycle-ii

var detectCycle = function (head) {
  let current = head;

  while (current != null) {
    if (current.seen) {
      return current;
    }
    current.seen = true;
    current = current.next;
  }
  return null;
};
