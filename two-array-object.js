// add whatever parameters you deem necessary
function twoArrayObject(keyArr, valArr) {
  let emptyObj = {};

  for (let i = 0; i < keyArr.length; i++) {
    if (valArr[i]) {
      emptyObj[keyArr[i]] = valArr[i];
    } else {
      emptyObj[keyArr[i]] = null;
    }
  }
  return emptyObj;
}

// key array params, value array params
// combine them into a key value pairs if there isnt enough
// values for each key set them as null

// empty obj
// for every index in array
// if value[index]
// emptyObj[arr[index]] = value[key]
// else
// emptyobj[arr[index]] = null
// return empty object
