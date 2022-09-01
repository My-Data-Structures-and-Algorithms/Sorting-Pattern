//Javascript has a built in sort function
//It's default behaviour without telling it how to sort is based on each
//character's unicode value
//let us look at Javascript's built in sort function default behavior
let topics = ["Steele", "Colt", "Data Structures", "Algorithms"];
console.log(topics.sort());

let marks = [6,4,15,10];
console.log(marks.sort());

//You can tell Javascript how to sort
//use a comparator function and based on it's return value, Javascript
//will know how it needs to sort the data it has
//the comparator takes in two values, say (a and b)
//if it returns a negative number, a should come before b
//if it returns a positive number, a should come after b
//if it returns 0, a and b are equal as far as sort is concerned


//sorting numbers from smallest to largest
let numberCompare = (num1, num2) => {
    return num1 - num2;
}

console.log(marks.sort(numberCompare));

//sorting strings from longest to shortest
let compareByLen = (str1, str2) => {
    return str1.length - str2.length;
}

console.log(topics.sort(compareByLen));