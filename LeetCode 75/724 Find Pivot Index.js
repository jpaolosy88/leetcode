// https://leetcode.com/problems/find-pivot-index

var pivotIndex = function (nums) {
  let result = -1;
  let leftSum = 0;
  let totalSum = 0;
  for (let i = 0; i < nums.length; i++) {
    totalSum += nums[i];
  }
  for (let i = 0; i < nums.length; i++) {
    if (leftSum === totalSum - nums[i] - leftSum) {
      return i;
    }
    leftSum += nums[i];
  }
  return result;
};
