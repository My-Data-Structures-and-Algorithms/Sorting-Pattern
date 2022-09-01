/**
 * Quick sort
 * 
 * Example: quickSort([5,2,1,8,4,7,6,3]) //returns [1,2,3,4,5,6,7,8]
 */

//pivot picker helper function
let pivotHelper = (arr, start = 0, end = arr.length - 1) => {
    const swap = (arr, idx1, idx2) => {
        [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
    }

    let pivot = arr[start]; //5
    let pivotTracker = start; //0

    for (let i = start + 1; i < arr.length; i++) {
        if (pivot > arr[i]) { //5>2,
            pivotTracker++;//1,
            swap(arr, pivotTracker, i); //
        }        
    }

    swap(arr, start, pivotTracker);

    return pivotTracker;
}

let quickSort = (arr, left = 0, right = arr.length - 1) => {
    if (left < right) {
        let pivotIndex = pivotHelper(arr, left, right);
        //sorting the left side
        quickSort(arr, left, pivotIndex - 1);
        //sorting the right side
        quickSort(arr, pivotIndex + 1, right);
    }
    
    return arr;
}

let arr = [5,2,1,8,4,7,6,3];
let arr1 = [78,43,23,0,91,25,64];

console.log(quickSort(arr));
console.log(quickSort(arr1));