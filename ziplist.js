function ziplist(list1, list2) {
  const length = list1.length + list2.length;
  const newArr = [];
  let j = 0;
  let k = 0;
  for (let i = 0; i < length; i++) {
    if (i % 2 === 0) {
      newArr[i] = list1[j];
      j++;
    } else {
      newArr[i] = list2[k];
      k++;
    }
  }
  return newArr;
}

function ziplistTheSimpleWay(list1, list2) {
  const newArr = _.flatten(_.zip(list1, list2));
  return newArr;
}

const arr = [1, 2, 3];
const arr2 = ['a', 'b'];
console.log(ziplistTheSimpleWay(arr, arr2));
console.log(ziplist(arr, arr2));
console.log("test");

