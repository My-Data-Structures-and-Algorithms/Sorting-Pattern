/**
 * To implement radix sort, we first need some helper functions
 */

//getDigit helper function
//it returns the digit within a number at a given place value
//Examples: 
//getDigit(12345,0) //returns 5
//getDigit(12345,1) //returns 4
//getDigit(12345,2) //returns 3
//getDigit(12345,3) //returns 2
//getDigit(12345,4) //returns 1
//getDigit(12345,5) //returns 0

let getDigit = (num, i) => {
    return Math.floor(Math.abs(num) / Math.pow(10,i)) % 10;
}

// console.log(getDigit(12345,0));
// console.log(getDigit(12345,1));
// console.log(getDigit(12345,2));

//digitCount helper function
//returns the number of digits in a given number
//Examples
//digitCount(1) //returns 1
//digitCount(25) //returns 2
//digitCount(314) //returns 3

let digitCount = (num) => {
    if (num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}

// console.log(digitCount(1));
// console.log(digitCount(25));
// console.log(digitCount(314));

//mostDigit helper function
//given an array of numbers, it returns the number of digits
//in the largest number in the list
//Examples:
//mostDigits([1234,56,7]) //returns 4
//mostDigits([1,1,11111,1]) //returns 5
//mostDigits([12,34,56,78]) //returns 2

let mostDigits = (nums) => {
    let maxDigits = 0;
    for (let i = 0; i < nums.length; i++) {
        maxDigits = Math.max(maxDigits, digitCount(nums[i]));
    }
    return maxDigits;
}

// console.log(mostDigits([1234,56,7]));
// console.log(mostDigits([1,1,11111,1]));
// console.log(mostDigits([12,34,56,78]));

//implementing the radix sort algorithm while utilizing our
//helper functions
let radixSort = (nums) => {
    let maxDigitCount = mostDigits(nums);
    for (let k = 0; k < maxDigitCount; k++) {
        let digitBucket = Array.from({length: 10}, () => []);
        for (let i = 0; i < nums.length; i++) {
            let digit = getDigit(nums[i],k);
            digitBucket[digit].push(nums[i]);           
        }
        nums = [].concat(...digitBucket);
    }
    return nums;
}

console.log(radixSort([23,345,5467,12,2345,9852]));