// https://leetcode.com/problems/isomorphic-string

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
  s = s.split("");
  t = t.split("");
  let sIndex = {};
  let tIndex = {};
  let sTransformed = [];
  let tTransformed = [];

  s.forEach((element, i) => {
    if (!sIndex.hasOwnProperty(element)) {
      sIndex[element] = i;
    }
  });
  t.forEach((element, i) => {
    if (!tIndex.hasOwnProperty(element)) {
      tIndex[element] = i;
    }
  });

  s.forEach((element) => {
    sTransformed.push(sIndex[element]);
  });
  t.forEach((element) => {
    tTransformed.push(tIndex[element]);
  });

  console.log(sIndex);
  console.log(tIndex);
  console.log(sTransformed);
  console.log(tTransformed);

  if (JSON.stringify(sTransformed) == JSON.stringify(tTransformed)) {
    console.log("true");
    return true;
  } else {
    console.log("false");
    return false;
  }
};
