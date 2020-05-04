// Write a recursive function that counts how many sheep jump over the fence. Your program should take a number as input. That number should be the number of sheep you have. The function should display the number along with the message "Another sheep jumps over the fence" until no more sheep are left.

// Input: 3
// Output:
// 3: Another sheep jumps over the fence
// 2: Another sheep jumps over the fence
// 1: Another sheep jumps over the fence
// All sheep jumped over the fence

function countSheep(num) {

    if(num === 0) {
        console.log('Another sheep jumps over the fence');
        return '';
    }

    console.log('All sheep jumped over the fence');
    countSheep(num - 1);
}

// Write a function called powerCalculator() that takes two parameters, an integer as a base, and another integer as an exponent. The function returns the value of the base raised to the power of the exponent. Use only exponents greater than or equal to 0 (positive numbers)

// powerCalculator(10,2) should return 100
// powerCalculator(10,-2) should return exponent should be >= 0

function powerCalculator(x, n) {
    if (n === 0) {
        console.log(x);
    } else {
        console.log(n * powerCalculator(x-1, n));
        return n * powerCalculator(x-1, n);
    }
}

powerCalculator(2,4);

function reverseString(str){
//   console.log(str.split('').reverse().join(""));
//   return '';    

    //flip character at position if str.length % 2 !== 0
    //hello -> oellh -> olleh
//G O O D B Y E [0, 1, 2, 3, 4, 5, 6] LENGTH = 7

//(char(0 + 1), char(str.length - 1))
let reverse = function (str) {
    //include one of options A or B  or C from above

    return reverse;
}

};

reverseString('hello')



// 4. nth Triangular Number
// Calculate the nth triangular number. A triangular number counts the objects that can form an equilateral triangle. The nth triangular number is the number of dots composing a triangle with n dots on a side, and is equal to the sum of the n natural numbers from 1 to n. This is the Triangular Number Sequence: 1, 3, 6, 10, 15, 21, 28, 36, 45.

//                           *
//             *           *    *
// *     |   *   *  |   *    *    *  |

//  1st       2nd           3rd             nth?  
function triangular(n) {
    //Base Case
    if (n <= 1) {
        return n;
    } else {
        //General Case    
        return n + tri(n - 1)
    }
}


// 5. String Splitter
//    Write a recursive function that splits a string based on a separator
//    (similar to String.prototype.split). 
//Don't use JS array's split function to solve this problem.
// Input: 02/20/2020
// Output: ["02", "20", "2020"]
function stringSplitter(str, delimiter) {
    if(str.length < 3) {

    } else if() {
    
    } 
}

//6. Fibonacci
// Write a recursive function that prints the Fibonacci sequence of a given number. The 
// Fibonacci sequence is a series of numbers in which each number is the sum of the 2 
// preceding numbers. For example, the 7th Fibonacci number 
// in a Fibonacci sequence is 13. The sequence looks as follows: 1, 1, 2, 3, 5, 8, 13.
//

function fibonacci() {
  if (n < 2){
    return n
  }
  return fib(n - 1) + fib (n - 2)
}


function factorial() {

}

function maze() {

}

function mazeAll() {

}

function anagrams() {

}

function organizationChart() {

}

function binaryRepresentation() {

}