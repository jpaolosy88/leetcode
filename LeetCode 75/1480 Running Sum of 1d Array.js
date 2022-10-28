// https://leetcode.com/problems/running-sum-of-1d-array

var runningSum = function (nums) {
  let result = [];

  for (let i = 0; i < nums.length; i++) {
    if (result[i - 1]) {
      result.push(result[i - 1] + nums[i]);
    } else {
      result.push(nums[i]);
    }
  }
  return result;
};
