let arr = [3, 4, 9, 2, 5, 8, 2, 1, 7, 4, 6, 2, 9, 8, 5, 1]

function merge(left, right) {
  let resultArray = [],
    leftIndex = 0,
    rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      resultArray.push(left[leftIndex]);

      leftIndex++;
    } else {
      resultArray.push(right[rightIndex]);

      rightIndex++;
    }
  }

  while (leftIndex < left.length) {
    resultArray.push(left[leftIndex]);
    leftIndex++;
  }

  while (rightIndex < right.length) {
    resultArray.push(right[rightIndex]);

    rightIndex++;
  }

  return resultArray;
}

function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  const middle = Math.floor(arr.length / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);
  return merge(mergeSort(left), mergeSort(right));
}

console.log("Merge Sort:" + mergeSort(arr))

// Desordenando o array novamente para fazer com Insertion Sort!
let arr2 = [3, 4, 9, 2, 5, 8, 2, 1, 7, 4, 6, 2, 9, 8, 5, 1]

function insertionSort(arr) {
  let i, key, j;
  for (i = 1; i < arr.length ; i++) {
    key = arr[i];
    j = i - 1;
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = key;
  }
  return arr
}

console.log("Insertion Sort: " + insertionSort(arr2))