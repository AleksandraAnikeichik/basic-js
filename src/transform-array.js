const { NotImplementedError } = require('../extensions/index.js');

function transform(arr) {
  let transformArr = [];
  if (Array.isArray(arr)) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == "--discard-next") {
      i = i + 1;
    } else if (arr[i] == "--discard-prev") {
      if (i != 0 & transformArr.at(-1) == arr[i-1]) {
         transformArr.splice(i-1, 1);
       } 
    } else if (arr[i] == "--double-next") {
      if (i != arr.length - 1) {
      transformArr.push(arr[i+1]);}
    } else if (arr[i] == "--double-prev") {
      if (i != 0 & transformArr.at(-1) == arr[i-1]) {
        transformArr.push(arr[i-1]);
      }
    } else {
      transformArr.push(arr[i]);
    }
  }
  return transformArr;
}
throw new Error("'arr' parameter must be an instance of the Array!");
}

module.exports = {
  transform
};
