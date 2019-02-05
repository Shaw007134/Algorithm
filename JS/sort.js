function selectionSort(arr, n) {
  for (let i = 0; i < n - 1; i++) {
    let minIndex = i;
    for (let j = i; j < n; j++) {
      if (arr[j] < arr[i]) minIndex = j;
    }
    let temp = arr[i];
    arr[i] = arr[minIndex];
    arr[minIndex] = temp;
  }
  console.log(arr);
}

function insertionSort(arr, n) {
  for (let i = 1; i < n; i++) {
    let temp = arr[i];
    let j;
    for (j = i; j > 0 && arr[j - 1] > temp; j--) {
      arr[j] = arr[j - 1];
    }
    arr[j] = temp;
  }
  console.log(arr);
}
