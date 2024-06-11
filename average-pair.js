// add whatever parameters you deem necessary
function averagePair(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let avg = (arr[left] + arr[right]) / 2;
    if (avg === target) {
      return true;
    } else if (avg < target) {
      left++;
    } else {
      right--;
    }
  }
  return false;
}

let results3 = averagePair([1, 2, 3], 2.5);
