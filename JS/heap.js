function swap(arr, i, j) {
  var temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function shiftUp(arr, i) {
  while (i > 1 && arr[parseInt(i / 2)] < arr[i]) {
    swap(arr, parseInt(i / 2), i);
    i = parseInt(i / 2);
  }
}

function shiftDown(arr, i) {
  while (2 * i <= arr.length - 1) {
    var j = 2 * i;
    if (j + 1 < arr.length - 1 && arr[j + 1] > arr[j]) {
      j++;
    }
    if (arr[i] > arr[j]) break;
    swap(arr, i, j);
    i = j;
  }
}

function extractMax(arr) {
  var ret = arr[1];
  swap(arr, 1, arr.length - 1);
  arr.pop();
  shiftDown(arr, 1);
  return ret;
}

function heap(arr) {
  var maxheap = [];
  // shiftUp建堆
  // for (var i = 0; i < arr.length; i++) {
  //   maxheap[i + 1] = arr[i];
  //   shiftUp(maxheap, i + 1);
  // }

  // heapify
  for (var i = 0; i < arr.length; i++) {
    maxheap[i + 1] = arr[i];
  }

  var count = arr.length - 1;
  for (var i = parseInt(count / 2); i >= 1; i--) {
    shiftDown(maxheap, i);
  }

  console.log(maxheap);
  for (var i = 0; i < arr.length; i++) {
    console.log(extractMax(maxheap));
  }
  console.log(maxheap);
}

