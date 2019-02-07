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

function bubbleSort(arr, n) {
  var swaped = false;
  do {
    swaped = false;
    for (var i = 1; i < n; i++) {
      if (arr[i] < arr[i - 1]) {
        swaped = true;
        var temp = arr[i];
        arr[i] = arr[i - 1];
        arr[i - 1] = temp;
      }
    }
    n = n - 1;
  } while (swaped);
  console.log(arr);
}

function shellSort(arr, n) {
  // h = 1, 4, 7, 10, 13
  var h = 1;
  if (h < n / 3) {
    h = 3 * h + 1;
  }
  while (h >= 1) {
    for (let i = h; i < n; i++) {
      var j;
      var temp = arr[i];
      for (j = i; j >= h && temp < arr[j - h]; j -= h) {
        arr[j] = arr[j - h];
      }
      arr[j] = temp;
    }
    h = h / 3;
  }
}

function __merge(arr, l, mid, r) {
  var a = [];
  for (var e = l; e <= r; e++) {
    a[e - l] = arr[e];
  }
  var i = l;
  var j = mid + 1;
  for (var k = l; k <= r; k++) {
    if (i > mid) {
      arr[k] = a[j - l];
      j++;
    } else if (j > r) {
      arr[k] = a[i - l];
      i++;
    } else if (a[i - l] <= a[j - l]) {
      arr[k] = a[i - l];
      i++;
    } else {
      arr[k] = a[j - l];
      j++;
    }
  }
}

function mergeSortBU(arr, n) {
  for (var sz = 1; sz <= n; sz += sz) {
    for (var i = 0; i + sz < n; i += sz + sz)
      if (arr[i + sz - 1] > arr[i + sz])
        __merge(arr, i, i + sz - 1, Math.min(i + sz + sz - 1, n - 1));
  }
}

function insertionSort1(arr, l, r) {
  for (var i = l + 1; i <= r; i++) {
    var temp = arr[i];
    var j;
    for (j = i; j > l && arr[j - 1] > temp; j--) {
      arr[j] = arr[j - 1];
    }
    arr[j] = temp;
  }
}

function __mergeSort(arr, l, r) {
  if (l >= r) return;
  var mid = parseInt((l + r) / 2);
  __mergeSort(arr, l, mid);
  __mergeSort(arr, mid + 1, r);
  if (arr[mid] > arr[mid + 1]) {
    __merge(arr, l, mid, r);
  }
}

function mergeSort(arr, n) {
  __mergeSort(arr, 0, n - 1);
}

function swap(arr, i, j) {
  var temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function __partition2(arr, l, r) {
  var v = parseInt(Math.random() * (r - l + 1)) + l;
  swap(arr, v, l);
  var temp = arr[l];
  var i, j;
  i = l + 1;
  j = r;
  // arr[l+1...i) <= v; arr(j...r] >= v
  while (true) {
    while (i <= r && arr[i] < temp) i++;
    while (j >= l + 1 && arr[j] > temp) j--;
    if (i > j) break;
    swap(arr, i, j);
    i++;
    j--;
  }
  swap(arr, l, j);
  return j;
}

// arr[l+1...lt] < v
// arr[lt+1...i-1] = v
// arr[gt...r] > v

function __partition(arr, l, r) {
  var v = parseInt(Math.random() * (r - l + 1)) + l;
  swap(arr, v, l);
  var temp = arr[l];
  var j = l;
  for (var i = l + 1; i <= r; i++) {
    if (arr[i] < temp) {
      j++;
      swap(arr, j, i);
    }
  }
  swap(arr, l, j);
  return j;
}

function __quickSort3(arr, l, r) {
  if (r - l <= 15) {
    insertionSort1(arr, l, r);
    return;
  }
  var v = parseInt(Math.random() * (r - l + 1)) + l;
  swap(arr, v, l);
  var temp = arr[l];

  // arr[l+1...lt] < v
  var lt = l;
  // arr[gt...r] > v
  var gt = r + 1;
  // arr[lt+1...i) === v
  var i = l + 1;
  while (i < gt) {
    if (arr[i] < temp) {
      swap(arr, i, lt + 1);
      lt++;
      i++;
    } else if (arr[i] > v) {
      swap(arr, i, gt - 1);
      gt--;
    } else {
      i++;
    }
  }
  swap(arr, l, lt);
  __quickSort3(arr, l, lt - 1);
  __quickSort3(arr, gt, r);
}

function __quickSort(arr, l, r) {
  if (l > r) {
    return;
  }
  var v = __partition(arr, l, r);
  __quickSort(arr, l, v - 1);
  __quickSort(arr, v + 1, r);
}

function quickSort(arr, n) {
  console.log("quickSort");
  __quickSort3(arr, 0, n - 1);
}

function __shiftDown(arr, n, k) {
  // var temp = arr[k]
  while (2 * k + 1 < n) {
    var j = 2 * k + 1;
    if (j + 1 < n && arr[j + 1] > arr[j]) j += 1;
    if (arr[k] >= arr[j]) break;
    swap(arr, k, j);
    k = j;
  }
}

function heapSort(arr, n) {
  // heapify
  for (var i = parseInt((n - 1) / 2); i >= 0; i--) {
    __shiftDown(arr, n, i);
  }
  console.log(arr);
  for (var i = n - 1; i > 0; i--) {
    swap(arr, 0, i);
    __shiftDown(arr, i, 0);
  }
}
