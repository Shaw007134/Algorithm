#include <iostream>
#include <algorithm>
#include <ctime>
#include <cassert>
using namespace std;
namespace SortTestHelper
{
int *generateNearlyOrderedArray(int n, int swapTimes)
{
  int *arr = new int[n];
  for (int i = 0; i < n; i++)
    arr[i] = i;

  srand(time(NULL));
  for (int i = 0; i < swapTimes; i++)
  {
    int posx = rand() % n;
    int posy = rand() % n;
    swap(arr[posx], arr[posy]);
  }
  return arr;
}

int *generateRandomArray(int n, int rangeL, int rangeR)
{
  assert(rangeL <= rangeR);
  int *arr = new int[n];
  srand(time(NULL));
  for (int i = 0; i < n; i++)
    arr[i] = rand() % (rangeR - rangeL + 1) + rangeL;
  return arr;
}

template <typename T>
void printArray(T arr[], int n)
{
  for (int i = 0; i < n; i++)
    cout << arr[i] << " ";
  cout << endl;
  return;
}

template <typename T>
bool isSorted(T arr[], int n)
{
  for (int i = 0; i < n - 1; i++)
    if (arr[i] > arr[i + 1])
      return false;
  return true;
}

//模板函数
template <typename T>
void testSort(string sortName, void (*sort)(T[], int), T arr[], int n)
{
  clock_t startTime = clock();
  sort(arr, n);
  clock_t endTime = clock();
  cout << sortName << " : " << double(endTime - startTime) / CLOCKS_PER_SEC << " s" << endl;
  assert(isSorted(arr, n));
  return;
}

int *copyIntArray(int a[], int n)
{
  int *arr = new int[n];
  for (int i = 0; i < n; i++)
  {
    arr[i] = a[i];
  }
  return arr;
}
} // namespace SortTestHelper
