/**
 * 
 * Merge Sort
 * 
 */

//Merging two sorted arrays
//Example: merge([1,10,50],[2,14,99,100]) //returns [1,2,10,14,50,99,100]
//function that implements merging of two sorted arrays
let merge = (arr1, arr2) => {
    let result = [];
    let i = 0;
    let j = 0;

    while (i < arr1.length && j < arr2.length) {
        if (arr2[j] > arr1[i]) {
            result.push(arr1[i]);
            i++;
        } else {
            result.push(arr2[j]);
            j++;
        }
    }

    while (i < arr1.length) {
        result.push(arr1[i]);
        i++;
    }

    while (j < arr2.length) {
        result.push(arr2[j]);
        j++;
    }

    return result;
}

// console.log(merge([1,10,50],[2,14,99,100])); //returns [1,2,10,14,50,99,100]
// console.log(merge([10,20,50],[30,44,90])); //returns [1,2,10,14,50,99,100]

// //mergeSort implementation without refactoring
// let mergeSort = (arr) => {
//     //base case - stop merge sort when arr of our length
//     //has zero or one element in it
//     if (arr.length <= 1) {
//         return arr;
//     }

//     //middle point of our array
//     let middle = Math.floor((arr.length) / 2);

//     //left portion of array after splitting it into two
//     let left = arr.slice(0,middle);

//     //right portion of array after splitting it into two
//     let right = arr.slice(middle,arr.length);

//     //make recursive call on left side to split it further
//     let leftSide = mergeSort(left);

//     //make recursive call on right side to split it further
//     let rightSide = mergeSort(right);
     
//     //merge all the smaller arrays back together using the
//     //merge function defined above
//     return merge(leftSide, rightSide);
// }

//mergeSort implemention after refactoring
let mergeSort = (arr) => {
    if (arr.length <= 1) return arr;
    let middle = Math.floor((arr.length) / 2);
    let left = mergeSort(arr.slice(0,middle));
    let right = mergeSort(arr.slice(middle,arr.length));
    return merge(left, right);
}

let arr = [99,2,100,14]
console.log(mergeSort(arr));



