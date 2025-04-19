//1. capitalize each first letter of an array of words

const arr = ['Hello', 'there!', 'How', 'are', 'you', 'doing?'];

function capitalize(words) {
    // Your code here
}

// Solution
function capitalize(words) {
    return words.map(function(word) {
        return word[0].toUpperCase() + word.slice(1);
    });
}
const CAP = capitalize(arr);
console.log(CAP);

// 2. Filter out all numbers that are odd -
const arr2 = [1, 2, 3, 4, 5];
function isEven(integers) {
    // Your code here
}

// Solution
function isEven(integers) {
    return integers.filter(function(num) {
        if(num % 2) {
            return false;
        }

        return true;
    });
}
const EVEN = isEven(arr2);
console.log(EVEN);

// 3. Write a function add that takes in an array of numbers. Return the sum of the numbers.
const arr3 = [7, 9, 12, 2];

function add(numbers) {

}

// Solution
function add(numbers) {
    return numbers.reduce(function(total, next) {
        return total + next;
    }, 0); // <- Last argument (0) makes the function work
           // for empty arrays as well
}

const ADD = add(arr3);
console.log(ADD);
