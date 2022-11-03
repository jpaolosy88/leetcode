// https://leetcode.com/problems/middle-of-the-linked-list

var middleNode = function (head) {
  let count = 0;
  let current = head;
  let next = null;
  while (current != null) {
    count++;
    next = current.next;
    current = next;
  }

  let middlePointer = count / 2;

  if (middlePointer % 1 != 0) {
    middlePointer = Math.ceil(middlePointer);
  } else {
    middlePointer++;
  }

  count = 0;
  console.log(middlePointer);
  console.log(head);

  while (count != middlePointer - 1) {
    count++;
    head = head.next;
  }
  return head;
};
