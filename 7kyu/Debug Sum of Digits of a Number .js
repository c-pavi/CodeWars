// Debug   function getSumOfDigits that takes positive integer to calculate sum of its digits. Assume that argument is an integer.

// my solution
function getSumOfDigits(integer) {
    let sum = 0;
    let arr = integer.toString().split('').reduce((a,b) => Number(a) + Number(b))
    return integer.toString().length == 1 ? integer : arr
  }


// best solution
function getSumOfDigits(integer) {
    return (integer+'').split('').reduce((sum, d) => sum + (+d || 0), 0);
  }