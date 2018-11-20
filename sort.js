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
