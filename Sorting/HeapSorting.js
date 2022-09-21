// Хорошиее видео по теме https://www.youtube.com/watch?v=z7Wkp0-U8kM

function maxHeap(arr) {
  let i = Math.floor(arr.length / 2 - 1);
  while (i >= 0) {
    heapify(arr, i, arr.length);
    i -= 1;
  }
}

function heapify(heap, i, max) {
  let index;
  let leftChild;
  let rightChild;

  while (i < max) {
    index = i;

    leftChild = 2 * i + 1;
    rightChild = leftChild + 1;
    if (leftChild < max && heap[leftChild] > heap[index]) {
      index = leftChild;
    }

    if (rightChild < max && heap[rightChild] > heap[index]) {
      index = rightChild;
    }

    if (index === i) {
      return;
    }

    swap(heap, i, index);

    i = index;
  }
}

function swap(arr, firstItemIdx, lastItemIdx) {
  const temp = arr[firstItemIdx];
  arr[firstItemIdx] = arr[lastItemIdx];
  arr[lastItemIdx] = temp;
}

function heapSort(arr) {
  maxHeap(arr);
  lastElement = arr.length - 1;
  // K - требуемое количество максимальных чисел массива
  while (lastElement > 0) {
    swap(arr, 0, lastElement);
    heapify(arr, 0, lastElement);
    lastElement -= 1;
  }
  return arr;
}

let array = [19, 20, 5, 10, 2, 20, 7, 9, 1, 3, 13, 14, 3, 3, 4];
console.log(heapSort(array));

// Сортировку можно адаптировать под поиск K наибольших значений в массиве, тогда нужно переделать функцию heapSort так:
// function heapSort(arr, K) {
//     maxHeap(arr);
//     lastElement = arr.length - 1;
//     // K - требуемое количество максимальных чисел массива
//     while (lastElement > arr.length-K-1) {
//       swap(arr, 0, lastElement);
//       heapify(arr, 0, lastElement);
//       lastElement -= 1;
//     }
//     return arr;
//   }

// Последние K элементов в полученном массиве будут самые большие, остальные останутся не сортрованными
