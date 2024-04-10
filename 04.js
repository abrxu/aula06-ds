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

let name = "dcba"
const arr = name.split("")

console.log("Array desordenado\n" + arr)
console.log("Array ordenado\n" + quickSort(arr))