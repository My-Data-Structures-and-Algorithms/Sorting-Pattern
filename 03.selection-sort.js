/**
 * Selection sort Pseudocode
 * 
 * 1. Store the first element as the smallest value you've seen so far
 * 2. Compare this item to the next item in the array until you find a 
 *    smaller number
 * 3. If a smaller number is found, designate that smaller number to be
 *    the new "minimum" and continue until the end of the array
 * 4. If the "minimum" is not the value (index) you initially began with
 *    swap the two values
 * 5. Repeat this with the next element until the array is sorted
 * 
 * 
 * Example: selectionSort([5,3,4,1,2]) //[1,2,3,4,5] - ascending order
 */

//Brute force implementation
let selectionSort = (arr) => {
    const swap = (arr, idx1, idx2) => {
        [arr[idx1],arr[idx2]] = [arr[idx2],arr[idx1]];
    };

    for (let i = 0; i < arr.length; i++) {
        let smallest = i;
        for (let j = i+1; j < arr.length; j++) {
           if (arr[smallest] > arr[j]) {
               smallest = j;
           }
        }

        if (smallest !== i) {
            swap(arr,i,smallest);
        }
    }

    return arr;
} // Big O Notation - O(n^2);

let arr = [5,3,4,1,2];
console.log(selectionSort(arr));

