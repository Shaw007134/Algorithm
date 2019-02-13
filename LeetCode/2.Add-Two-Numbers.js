var addTwoNumbers = function(l1, l2) {
  var result = [];
  var length;
  if (l1.length > l2.length) {
    length = l2.length;
  } else {
    length = l1.length;
  }
  var tag = 0;
  for (var i = 0; i < length; i++) {
    var temp = l1[i] + l2[i] + tag;
    if (temp < 10) {
      result.push(temp);
      tag = 0;
    } else {
      result.push(0);
      tag = 1;
    }
    console.log(result);
  }
  return result;
};
