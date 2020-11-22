function canNest(arr1, arr2) {
  // sort both arrays 
  // compare first and last values
  arr1.sort();
  arr2.sort();
  if (arr1[0] > arr2[0] && arr1[arr1.length - 1] < arr2[arr2.length - 1]) {
    return true;
  } else {
    return false;
  }
}

canNest([1, 2, 3, 4], [0, 6])

canNest([3, 1], [4, 0])

canNest([9, 9, 8], [8, 9])

canNest([1, 2, 3, 4], [2, 3])