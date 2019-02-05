#include <iostream>
#include <algorithm>
#include "Student.h"
#include "SortTestHelper.h"

using namespace std;

template <typename T>
void selectionSort(T arr[], int n)
{
	for (int i = 0; i < n; i++)
	{
		int minIndex = i;
		for (int j = i + 1; j < n; j++)
			if (arr[j] < arr[minIndex])
				minIndex = j;
		swap(arr[i], arr[minIndex]);
	}
}

template <typename T>
void insertionSort(T arr[], int n)
{
	for (int i = 1; i < n; i++)
	{
		//寻找元素arr[i]合适的插入位置
		T e = arr[i];
		int j; //j保存元素e应该插入的位置
		// 插入排序可以提前中止内层循环
		// 不直接交换，而是通过赋值
		for (int j = i; j > 0 && arr[j - 1] > e; j--)
		{
			arr[j] = arr[j - 1];
		}
		arr[j] = e;
	}
}

int main(int argc, char *argv[])
{
	int n = 10000;
	int *arr = SortTestHelper::generateNearlyOrderedArray(n, 10);
	int *arr2 = SortTestHelper::copyIntArray(arr, n);
	// selectionSort(arr, n);
	// SortTestHelper::printArray(arr, n);
	SortTestHelper::testSort("Selection Sort", selectionSort, arr, n);
	SortTestHelper::testSort("Insertion Sort", insertionSort, arr2, n);
	delete[] arr;
	delete[] arr2;
	return 0;
}