/**
 * Bubblesort Pseudocode
 * 1. Define a function called bubblesort that takes in an array of numbers
 * 2. Start looping with a variable called i, at the end of the array 
 *    towards the beginning
 * 3. Start an inner loop with a variable called j from the beginning until
 *    i - 1
 * 4. If arr[j] is greater than arr[j+1], swap those two values
 * 5. Return the sorted array
 * 
 * Example: bubbleSort([6,4,15,10]) //[4,6,10,15] - ascending order
 */

//brute force version
// let bubbleSort = (arr) => {
//     const swap = (arr, idx1, idx2) => {
//         [arr[idx1],arr[idx2]] = [arr[idx2],arr[idx1]];
//     };

//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 0; j < arr.length; j++) {
//             if (arr[j] > arr[j+1]) {
//                 swap(arr,j,j+1);
//             }            
//         }
//     }

//     return arr;
// } //- Big O is O(n^2)

//None optimised version of bubble sort
// let bubbleSort = (arr) => {
//     const swap = (arr, idx1, idx2) => {
//         [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]; //swapping elements
//     };

//     for (let i = arr.length; i > 0; i--) {
//         for (let j = 0; j < i - 1; j++) {
//             if (arr[j] > arr[j+1]) {
//                 swap(arr, j, j+1);
//             }            
//         }
//     }

//     return arr;
// }

// //Optimized solution for bubble sort
let bubbleSort = (arr) => {
    const swap = (arr, idx1, idx2) => {
        [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]; //swapping elements
    };

    let noSwaps;

    for (let i = arr.length; i > 0; i--) {
        noSwaps = true;
        for (let j = 0; j < i - 1; j++) {
            if (arr[j] > arr[j+1]) {
                swap(arr, j, j+1);
                noSwaps = false;
            }            
        }

        if (noSwaps) {
            break;
        }
    }

    return arr;
}

let arr = [6,4,15,10];
// let arr2 = [1,8,2,3,4,5,6];

console.log(bubbleSort(arr));
// console.log(bubbleSort(arr2));


