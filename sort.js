//选择排序，每次选择最小的插入到最前面
var selection = function(a){
  if(a instanceof Array && a.length != 0){
    let min
    if(a.length === 1) return a
    for(i=0; i<a.length; i++){
      min = i
      for(j=i+1; j<a.length;j++){
        min = a[j] > a[min] ? min : j
      }
      temp = a[i]
      a[i] = a[min]
      a[min] = temp
    }
    return a
  }else{
    console.log('input error')
  }
}

//冒泡排序，每次两两对比，最大数下沉
var bubble = function(a){
  if(a instanceof Array && a.length != 0){
    let temp
    if(a.length === 1) return a
    for(i=0; i<a.length; i++){
      for(j=0; j<a.length-i;j++){
        if(a[j]>a[j+1]){
          temp = a[j]
          a[j] = a[j+1]
          a[j+1] = temp
        }
      }
    }
    return a
  }else{
    console.log('input error')
  }
}

//插入排序，需要一个临时数组，a[]
function insertionSort(array) {
  if (Object.prototype.toString.call(array).slice(8, -1) === 'Array') {
      for (var i = 1; i < array.length; i++) {
          var key = array[i];
          var j = i - 1;
          while (j >= 0 && array[j] > key) {
              array[j + 1] = array[j];
              j--;
          }
          array[j + 1] = key;
      }
      return array;
  } else {
      return 'array is not an Array!';
  }
}

//二分插入
function binaryInsertionSort(array) {
  if (Object.prototype.toString.call(array).slice(8, -1) === 'Array') {
      for (var i = 1; i < array.length; i++) {
          var key = array[i], left = 0, right = i - 1;
          while (left <= right) {
              var middle = parseInt((left + right) / 2);
              if (key < array[middle]) {
                  right = middle - 1;
              } else {
                  left = middle + 1;
              }
          }
          for (var j = i - 1; j >= left; j--) {
              array[j + 1] = array[j];
          }
          array[left] = key;
      }
      return array;
  } else {
      return 'array is not an Array!';
  }
}

function selectionSort(array) {
  if (Object.prototype.toString.call(array).slice(8, -1) === 'Array') {
      var len = array.length, temp;
      for (var i = 0; i < len - 1; i++) {
          var min = array[i];
          for (var j = i + 1; j < len; j++) {
              if (array[j] < min) {
                  temp = min;
                  min = array[j];
                  array[j] = temp;
              }
          }
          array[i] = min;
      }
      return array;
  } else {
      return 'array is not an Array!';
  }
}


function bubbleSort(arr){
  //外层循环，共要进行arr.length次求最大值操作
  for(var i=0;i<arr.length;i++){
      //内层循环，找到第i大的元素，并将其和第i个元素交换
      for(var j=i;j<arr.length;j++){
          if(arr[i]<arr[j]){
              //交换两个元素的位置
              var temp=arr[i];
              arr[i]=arr[j];
              arr[j]=temp;
          }
      }
  }
}


var quickSort = function(arr) {

  　　if (arr.length <= 1) { return arr; }
  
  　　var pivotIndex = Math.floor(arr.length / 2);
  
  　　var pivot = arr.splice(pivotIndex, 1)[0];
  
  　　var left = [];
  
  　　var right = [];
  
  　　for (var i = 0; i < arr.length; i++){
  
  　　　　if (arr[i] < pivot) {
  
  　　　　　　left.push(arr[i]);
  
  　　　　} else {
  
  　　　　　　right.push(arr[i]);
  
  　　　　}
  
  　　}
  
  　　return quickSort(left).concat([pivot], quickSort(right));
  
  };


  /*方法说明：堆排序
@param  array 待排序数组*/           
function heapSort(array) {
  if (Object.prototype.toString.call(array).slice(8, -1) === 'Array') {
      //建堆
      var heapSize = array.length, temp;
      for (var i = Math.floor(heapSize / 2); i >= 0; i--) {
          heapify(array, i, heapSize);
      }

      //堆排序
      for (var j = heapSize - 1; j >= 1; j--) {
          temp = array[0];
          array[0] = array[j];
          array[j] = temp;
          heapify(array, 0, --heapSize);
      }
  } else {
      return 'array is not an Array!';
  }
}
/*方法说明：维护堆的性质
@param  arr 数组
@param  x   数组下标
@param  len 堆大小*/
function heapify(arr, x, len) {
  if (Object.prototype.toString.call(arr).slice(8, -1) === 'Array' && typeof x === 'number') {
      var l = 2 * x, r = 2 * x + 1, largest = x, temp;
      if (l < len && arr[l] > arr[largest]) {
          largest = l;
      }
      if (r < len && arr[r] > arr[largest]) {
          largest = r;
      }
      if (largest != x) {
          temp = arr[x];
          arr[x] = arr[largest];
          arr[largest] = temp;
          heapify(arr, largest, len);
      }
  } else {
      return 'arr is not an Array or x is not a number!';
  }
}



  


