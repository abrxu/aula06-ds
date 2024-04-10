// Bubble Sort: Melhor caso: O(n) Média: O(n^2) Pior caso: O(n^2)
function bubbleSort(arr, n) {
  let i, j, temp;
  let swapped;
  for (i = 0; i < n - 1; i++) {
    swapped = false;
    for (j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        swapped = true;
      }
    }
    if (swapped == false) {
      break;
    }
  }
}

// Insertion Sort: Melhor caso: O(n) Média: O(n^2) Pior caso: O(n^2)
function insertionSort(arr, n) {
  let i, key, j;
  for (i = 1; i < n; i++) {
    key = arr[i];
    j = i - 1;
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = key;
  }
}

// Selection Sort: Melhor caso: O(n^2) Média: O(n^2) Pior caso: O(n^2)
function selectionSort(arr) {
  const len = arr.length;
  for (let i = 0; i < len - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < len; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    if (minIndex !== i) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
  }
  return arr;
}

// Merge Sort: Melhor caso: O(n log(n)) Média: O(n log(n)) Pior caso: On log(n))
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

// Quick Sort: Melhor caso: O(n log(n)) Média: O(n log(n)) Pior caso: O(n^2)
function swap(arr, i, j) {
  const temp = arr[i];

  arr[i] = arr[j];

  arr[j] = temp;
}

function partition(arr, low, high) {
  const pivot = arr[high]; 
  let i = low - 1; 

  for (let j = low; j < high; j++) {
    if (arr[j] <= pivot) {
      i++;
      swap(arr, i, j); 
    }
  }

  swap(arr, i + 1, high);

  return i + 1;
}

function quickSort(arr, low = 0, high = arr.length - 1) {
  if (low < high) {
    const pivotIndex = partition(arr, low, high);

    quickSort(arr, low, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, high);
  }

  return arr;
}

// Heap Short: Melhor caso: O(n log(n)) Média: O(n log(n)) Pior caso: O(n log(n))
function heapify(arr, n, i) {
  let largest = i; 

  const left = 2 * i + 1; 
  const right = 2 * i + 2; 
  
  if (left < n && arr[left] > arr[largest]) {
    largest = left;
  }
  if (right < n && arr[right] > arr[largest]) {
    largest = right;
  }
  if (largest !== i) {
    [arr[i], arr[largest]] = [arr[largest], arr[i]];
    heapify(arr, n, largest);
  }
}

function heapSort(arr) {
  const n = arr.length;

  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    heapify(arr, n, i);
  }

  for (let i = n - 1; i > 0; i--) {
    [arr[0], arr[i]] = [arr[i], arr[0]];
    heapify(arr, i, 0);
  }

  return arr;
}
