// A sequence or a series, in mathematics, is a string of objects, like numbers, that follow a particular pattern. The individual elements in a sequence are called terms. A simple example is 3, 6, 9, 12, 15, 18, 21, ..., where the pattern is: "add 3 to the previous term".

// In this kata, we will be using a more complicated sequence: 0, 1, 3, 6, 10, 15, 21, 28, ... This sequence is generated with the pattern: "the nth term is the sum of numbers from 0 to n, inclusive".

// [ 0,  1,    3,      6,   ...]
//   0  0+1  0+1+2  0+1+2+3

// Your Task

// Complete the function that takes an integer n and returns a list/array of length abs(n) + 1 of the arithmetic series explained above. Whenn < 0 return the sequence with negative terms.
// Examples

//  5  -->  [0,  1,  3,  6,  10,  15]
// -5  -->  [0, -1, -3, -6, -10, -15]
//  7  -->  [0,  1,  3,  6,  10,  15,  21,  28]


//my solution
function sumOfN(n) {
    let length = Math.abs(n) + 1
    let arr = []
    for(let i = 0; i< length; i++){
      arr.push(i)
    }
    let arr2 = []
    for(let j = 1 ; j <= length; j++){
      if( n > 0){
      arr2.push((arr.slice(0,j)).reduce((a,b)=> a+b, 0))}
      else{arr2.push((arr.slice(0,j)).reduce((a,b)=> a-b, 0)) }
    }
    return arr2  
  };

//best solutiohn
function sumOfN(n) {
    for (var i = 0, list = []; i <= Math.abs(n); i++) {
      list.push((list[i - 1] || 0) + i * (n < 0 ? -1 : 1))
    }
    
    return list
  }