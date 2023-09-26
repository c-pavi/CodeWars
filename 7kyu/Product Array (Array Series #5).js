// Task

// Given an array/list [] of integers , Construct a product array Of same size Such That prod[i] is equal to The Product of all the elements of Arr[] except Arr[i].
// Notes

//     Array/list size is at least 2 .

//     Array/list's numbers Will be only Positives

//     Repetition of numbers in the array/list could occur.

// Input >> Output Examples

// productArray ({12,20}) ==>  return {20,12}

// Explanation:

//     The first element in prod [] array 20 is the product of all array's elements except the first element

//     The second element 12 is the product of all array's elements except the second element .


//my solution
function productArray(numbers){
    let sum = []
    let final = numbers.reduce((a,b) => a*b)
    for(let i = 0; i < numbers.length; i++){
      sum.push(final/numbers[i])
    }
    return sum
  }

//best solution
function productArray(numbers){
    return numbers.map(x => numbers.reduce((a,b) => a * b) / x)
  }