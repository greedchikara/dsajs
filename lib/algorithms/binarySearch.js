function binarySearchUtil(haystack, needle, low, high) {

  const middle = Math.floor((low + high) / 2);
  if (haystack[middle] === needle) {
    return middle;
  }

  if (low < high) {
    if (needle < haystack[middle]) {
      return binarySearchUtil(haystack, needle, low, middle - 1);
    }
    if (needle > haystack[middle]) {
      return binarySearchUtil(haystack, needle, middle + 1, high);
    }
  }
  return -1;
}

function binarySearch(haystack, needle) {

  return binarySearchUtil(haystack, needle, 0, haystack.length);
}

export default binarySearch;
