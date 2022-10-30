// https://leetcode.com/problems/is-subsequence

var isSubsequence = function (s, t) {
  s = s.split("");
  t = t.split("");
  let resultArray = [];
  let lastIndex = 0;

  s.forEach((element) => {
    lastIndex = t.indexOf(element, lastIndex);
    resultArray.push(t[lastIndex]);
    if (lastIndex != -1) {
      lastIndex++;
    }
  });
  console.log(resultArray);
  if (resultArray.includes(undefined)) {
    return false;
  } else {
    return true;
  }
};
