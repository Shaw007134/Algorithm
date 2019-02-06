#include <iostream>
#include <algorithm>
#include "InsertionSort.h"

using namespace std;
//将arr[l...mid]和arr[mid+1...r]两部分进行归并
template <typename T>
void __merge(T arr[], int l, int mid, int r)
{
  //VS不支持动态数组
  // T aux[r - l + 1];
  T *aux = new T[r - l + 1];
  for (int i = l; i <= r; i++)
    aux[i - l] = arr[i];

  int i = l, j = mid + 1;
  for (int k = l; k <= r; k++)
  {
    if (i > mid)
    {
      arr[k] = aux[j - l];
      j++;
    }
    else if (j > r)
    {
      arr[k] = aux[i - l];
      i++;
    }
    else if (aux[i - l] < aux[j - l])
    {
      arr[k] = aux[i - l];
      i++;
    }
    else
    {
      arr[k] = aux[j - l];
      j++;
    }
  }
  delete[] aux;
}

//前闭后闭，定义十分重要，后续使用要保持定义
//递归使用归并排序, 对arr[l...r]的范围进行排序
template <typename T>
void __mergeSort(T arr[], int l, int r)
{
  // if (l >= r)
  // 	return;

  if (r - l <= 15)
  {
    insertionSort(arr, l, r);
    return;
  }

  int mid = (l + r) / 2;
  __mergeSort(arr, l, mid);
  __mergeSort(arr, mid + 1, r);
  if (arr[mid] > arr[mid + 1])
    __merge(arr, l, mid, r);
}

template <typename T>
void mergeSort(T arr[], int n)
{
  __mergeSort(arr, 0, n - 1);
}

//自底向上由于没有使用数组通过索引获取元素，可以对链表进行排序
template <typename T>
void mergeSortBU(T arr[], int n)
{
  // for (int sz = 1; sz <= n; sz += sz)
  //   for (int i = 0; i + sz < n; i += sz + sz)
  //     // 对arr[i...i+sz-1]和arr[i+sz...i+2*sz-1]进行归并
  //     __merge(arr, i, i + sz - 1, min(i + sz + sz - 1, n - 1));

  // Merge Sort Bottom Up 优化
  // 对于小数组, 使用插入排序优化
  for (int i = 0; i < n; i += 16)
    insertionSort(arr, i, min(i + 15, n - 1));

  for (int sz = 16; sz < n; sz += sz)
    for (int i = 0; i < n - sz; i += sz + sz)
      // 对于arr[mid] <= arr[mid+1]的情况,不进行merge
      if (arr[i + sz - 1] > arr[i + sz])
        __merge(arr, i, i + sz - 1, min(i + sz + sz - 1, n - 1));
}