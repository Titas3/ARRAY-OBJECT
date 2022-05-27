console.log(checkSubarray([1, 2, 5, 4, 3, 6, 7]));
function checkSubarray(arr) {
  let n = arr.length;
  let i;
  for (i = 1; i < n && arr[i - 1] < arr[i]; i++) {}
  if (i === n) {
    return true;
  }
  let j = i;

  while (j < n && arr[j - 1] >= arr[j]) {
    if (i > 1 && arr[i - 2] > arr[j]) {
      return false;
    }
    j++;
  }
  if (j === n) {
    return true;
  }
  let k = j;
  if (arr[i - 1] > arr[k]) {
    return false;
  }
  
  while (k < n) {
    if (arr[k - 1] > arr[k]) {
      return false;
    }
    k++;
  }
  return true;
}
