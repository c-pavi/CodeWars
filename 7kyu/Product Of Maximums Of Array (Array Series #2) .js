// Task

// Given an array/list [] of integers , Find the product of the k maximal numbers.
// Notes

//     Array/list size is at least 3 .

//     Array/list's numbers Will be mixture of positives , negatives and zeros

//     Repetition of numbers in the array/list could occur.

//my solution
function maxProduct(numbers, size){
    let ordered = numbers.sort((a,b) => b-a ) //[ 5, 4, 3 ]
    let sized = ordered.slice(0,size) // [ 5, 4 ]
    return sized.reduce((acc,c) => acc*c)
  }

//best solution

function maxProduct(numbers, size){
    return numbers.sort((a,b) => b-a).slice(0,size).reduce((acc,n) => acc*n);
  }