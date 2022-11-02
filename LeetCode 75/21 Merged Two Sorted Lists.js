// https://leetcode.com/problems/merge-two-sorted-lists/

var mergeTwoLists = function (list1, list2) {
  let mergedList = new ListNode();
  let head = mergedList;

  while (list1 && list2) {
    if (list1.val < list2.val) {
      mergedList.next = list1;
      list1 = list1.next;
    } else {
      mergedList.next = list2;
      list2 = list2.next;
    }
    mergedList = mergedList.next;
  }

  if (!list1) {
    mergedList.next = list2;
  } else if (!list2) {
    mergedList.next = list1;
  }
  return head.next;
};
