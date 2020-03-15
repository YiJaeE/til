// Linear search
function linearSearch(array, target) {
  for (let i = 0; i < array.length; i++) {
    if (target === array[i]) return i;
  } return -1;
}

console.log(linearSearch([1, 2, 3, 4, 5, 6], 1)); // 0
console.log(linearSearch([1, 2, 3, 4, 5, 6], 3)); // 2
console.log(linearSearch([1, 2, 3, 4, 5, 6], 5)); // 4
console.log(linearSearch([1, 2, 3, 4, 5, 6], 6)); // 5
console.log(linearSearch([1, 2, 3, 4, 5, 6], -1)); // -1
console.log(linearSearch([1, 2, 3, 4, 5, 6], 0)); // -1
console.log(linearSearch([1, 2, 3, 4, 5, 6], 7)); // 2


// Binary search
function binarySearch(array, target) {
  let start = 0;
  let end = array.length - 1;
  while (start <= end) {
    const mid = Math.floor((start + end) / 2);
    if (target > array[mid]) {
      start = mid + 1;
    } else if (target < array[mid]) {
      end = mid - 1;
    } else return mid;
  } return -1;
}

console.log(binarySearch([1, 2, 3, 4, 5, 6], 1)); // 0
console.log(binarySearch([1, 2, 3, 4, 5, 6], 3)); // 2
console.log(binarySearch([1, 2, 3, 4, 5, 6], 5)); // 4
console.log(binarySearch([1, 2, 3, 4, 5, 6], 6)); // 5
console.log(binarySearch([1, 2, 3, 4, 5, 6], -1)); // -1
console.log(binarySearch([1, 2, 3, 4, 5, 6], 0)); // -1
console.log(binarySearch([1, 2, 3, 4, 5, 6], 7)); // -1


// Bubble sort
function bubbleSort(array) {
  const arrLength = array.length - 1;
  for (let i = 0; i < arrLength; i++) {
    for (let j = 0; j < arrLength - i; j++) {
      if (array[j] > array[j + 1]) {
        const temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  } return array;
}

console.log(bubbleSort([2, 4, 5, 1, 3])); // [1, 2, 3, 4, 5]
console.log(bubbleSort([5, 2, 1, 3, 4, 6])); // [1, 2, 3, 4, 5, 6]
console.log(bubbleSort([3, 1, 0, -1, 4, 2])); // [-1, 0, 1, 2, 3, 4]
console.log(bubbleSort([1, 3, 0, -1, 4, 2, -2])); // [-2, -1, 0, 1, 2, 3, 4]
console.log(bubbleSort([4, 1, 100, 3, -1, -100, -2, 0])); // [-100, -2, -1, 0, 1, 3, 4, 100]


// Selection Sort
function selectionSort(array) {
  const arrLength = array.length;
  for (let i = 0; i < arrLength - 1; i++) {
    let minIdx = i;
    for (let j = i + 1; j < arrLength; j++) {
      if (array[j] < array[minIdx]) {
        minIdx = j;
      }
    }
    const temp = array[minIdx];
    array[minIdx] = array[i];
    array[i] = temp;
  } return array;
}

console.log(selectionSort([2, 4, 5, 1, 3])); // [1, 2, 3, 4, 5]
console.log(selectionSort([5, 2, 1, 3, 4, 6])); // [1, 2, 3, 4, 5, 6]
console.log(selectionSort([3, 1, 0, -1, 4, 2])); // [-1, 0, 1, 2, 3, 4]
console.log(selectionSort([1, 3, 0, -1, 4, 2, -2])); // [-2, -1, 0, 1, 2, 3, 4]
console.log(selectionSort([4, 1, 100, 3, -1, -100, -2, 0])); // [-100, -2, -1, 0, 1, 3, 4, 100]


// Insertion Sort
function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    let temp = array[i];
    let prev = i - 1;
    while (array[prev] > temp) {
      array[prev + 1] = array[prev];
      prev--;
    } array[prev + 1] = temp;
  } return array;
}

console.log(insertionSort([2, 4, 5, 1, 3])); // [1, 2, 3, 4, 5]
console.log(insertionSort([5, 2, 1, 3, 4, 6])); // [1, 2, 3, 4, 5, 6]
console.log(insertionSort([3, 1, 0, -1, 4, 2])); // [-1, 0, 1, 2, 3, 4]
console.log(insertionSort([1, 3, 0, -1, 4, 2, -2])); // [-2, -1, 0, 1, 2, 3, 4]
console.log(insertionSort([4, 1, 100, 3, -1, -100, -2, 0])); // [-100, -2, -1, 0, 1, 3, 4, 100]


function insertionSort2(array) {
  for (let i = 1; i < array.length; i++) {
    let temp = array[i];
    let prev = i - 1;
    for (prev; prev > -1; prev--) {
      if (array[prev] > temp) {
        array[prev + 1] = array[prev]
      } else break;
    } array[prev + 1] = temp;
  } return array;
}

console.log(insertionSort2([2, 4, 5, 1, 3])); // [1, 2, 3, 4, 5]
console.log(insertionSort2([5, 2, 1, 3, 4, 6])); // [1, 2, 3, 4, 5, 6]
console.log(insertionSort2([3, 1, 0, -1, 4, 2])); // [-1, 0, 1, 2, 3, 4]
console.log(insertionSort2([1, 3, 0, -1, 4, 2, -2])); // [-2, -1, 0, 1, 2, 3, 4]
console.log(insertionSort2([4, 1, 100, 3, -1, -100, -2, 0])); // [-100, -2, -1, 0, 1, 3, 4, 100]


// Quick Sort
function quickSort() {

}

console.log(quickSort());


// Merge Sort
function mergeSort() {

}

console.log(mergeSort());


// Counting Sort
function countingSort() {

}

console.log(countingSort());
