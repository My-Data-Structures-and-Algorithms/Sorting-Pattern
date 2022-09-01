/**
 * Insertion Sort Pseudo code
 * 
 * 1. Start by picking the second element in the array
 * 2. Now compare the second element with the one before it and swap
 *    if necessary
 * 3. Continue to the next element and if it is in the incorrect order
 *    iterate through the sorted portion (i.e. the left side) to place
 *    the element in the correct place
 * 4. Repeat until the array is sorted
 * 
 * Example: insertionSort([2,1,9,76,4]); //returns [1,2,4,9,76]
 */
 "use strict"

let insertionSort = (arr) => {
    for (let i = 1; i < arr.length; i++) {
        let currentVal = arr[i]; //1
        let j;

        for (j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
            arr[j+1] = arr[j];
        }

        arr[j+1] = currentVal;
    }

    return arr;
}

let arr = [2,1,9,76,4]
let arr2 = [3,4,2,1]

console.log(insertionSort(arr));
console.log(insertionSort(arr2));