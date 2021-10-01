function search(array, value) {
  // your code here
}

function binarySearch(arr, l, r, x){
  if (r >= l) {
      let mid = l + Math.floor((r - l) / 2);

      // If the element is present at the middle
      // itself
      if (arr[mid] == x)
          return mid;

      // If element is smaller than mid, then
      // it can only be present in left subarray
      if (arr[mid] > x)
          return binarySearch(arr, l, mid - 1, x);

      // Else the element can only be present
      // in right subarray
      return binarySearch(arr, mid + 1, r, x);
  }

  // We reach here when element is not
  // present in array
  return -1;
}

var arr = [1, 3, 16, 22, 31, 33, 34]
console.log(search(arr, 31)); // => 4