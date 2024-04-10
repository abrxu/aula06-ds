const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let arr = [];

rl.question("Digite a quantidade de pessoas que deseja adicionar ao array: ", (n) => {

  const readNames = (count) => {
    if (count <= 0) {
      console.log("Array preenchido:");
      if (arr.length > 0) {
      console.log(arr);
      }
      console.log("Array ordenado:");
      if (arr.length > 0) {
      console.log(heapSort(arr));
      }
      rl.close();
      return;
    }

    rl.question("Digite um nome: ", (name) => {
      arr.push(name);
      readNames(count - 1);
    });
  };

  readNames(parseInt(n));
});

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