#include <iostream>
#include <algorithm>
#include <string>
#include <ctime>
#include <cmath>
#include <cassert>
#include <typeinfo>
using namespace std;

template <typename Item>
class MaxHeap
{
private:
  Item *data;
  int *indexes;
  int count;
  int capacity;

  void shiftUp(int k)
  {
    while (k > 1 && data[indexes[k / 2]] < data[indexes[k]])
    {
      swap(indexes[k / 2], indexes[k]);
      k /= 2;
    }
  }

  void shiftDown(int k)
  {
    while (2 * k <= count)
    {
      int j = 2 * k;
      // 此轮循环中，data[k]与data[j]交换位置
      if (j + 1 <= count && data[indexes[j + 1]] > data[indexes[j]])
        j += 1;
      if (data[indexes[k]] > data[indexes[j]])
        break;
      swap(indexes[k], indexes[j]);
      k = j;
    }
  }

public:
  IndexMaxHeap(int capacity)
  {
    data = new Item[capacity + 1];
    indexes = new int[capacity + 1];
    count = 0;
    this->capacity = capacity;
  }

  MaxHeap(Item arr[], int n)
  {
    data = new Item[n + 1];
    capacity = n;
    for (int i = 0; i < n; i++)
      data[i + 1] = arr[i];
    count = n;

    for (int i = count / 2; i >= 1; i--)
      shiftDown(i);
  }

  ~MaxHeap()
  {
    delete[] data;
    delete[] indexes;
  }
  int size()
  {
    return count;
  }

  bool isEmpty()
  {
    return count == 0;
  }

  void insert(int i, Item item)
  {
    assert(count + 1 <= capacity);
    assert(i + 1 >= 1 && i + 1 <= capacity);

    i += 1;
    data[i] = item;
    indexes[count + 1] = i;

    count++;
    shiftUp(count);
  }

  Item extractMax()
  {
    assert(count > 0);

    // Item ret = data[indexes[1]];
    int ret = indexes[1] - 1;

    swap(indexes[1], indexes[count]);
    count--;
    shiftDown(1);

    return ret;
  }

  Item getItem(int i)
  {
    return data[i + 1];
  }

  void change(int i, Item newItem)
  {
    i += 1;
    data[i] = newItem;

    // 找到Indexes[j] = i, j表示data[i]在堆中的位置
    // 之后shiftUp(j), 再shiftDown(j)
    for (int j = 1; j <= count; j++)
      if (indexes[j] == i)
      {
        shiftUp(j);
        shiftDown(j);
        return;
      }
  }
};

template <typename T>
void __shiftDown(T arr[], int n, int k)
{
  while (2 * k + 1 <= count)
  {
    int j = 2 * k + 1;
    // 此轮循环中，arr[k]与arr[j]交换位置
    if (j + 1 < n && arr[j + 1] > arr[j])
      j += 1;
    if (arr[k] >= arr[j])
      break;
    swap(arr[k], arr[j]);
    k = j;
  }
}

template <typename T>
void heapSort(T arr[], int n)
{
  for (int i = (n - 1) / 2; i >= 0; i--)
    __shiftDown(arr, n, i);
  for (int i = n - 1; i > 0; i--)
  {
    swap(arr[0], arr[i]);
    __shiftDown(arr, i, 0);
  }
}

template <typename T>
void heapSort2(T arr[], int n)
{
  MaxHeap<T> maxheap = MaxHeap<T>(arr, n);
  for (int i = n - 1; i >= 0; i--)
    arr[i] = maxheap.extractMax();
}

template <typename T>
void heapSort1(T arr[], int n)
{
  MaxHeap<int> maxheap = MaxHeap<int>(n);
  for (int i = 0; i < n; i++)
    maxheap.insert(arr[i]);
  for (int i = n - 1; i >= 0; i--)
    arr[i] = maxheap.extractMax();
}

int main()
{
  int n = 1000000;
  return 0;
}