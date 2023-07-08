// Your task in this kata is to implement a function that calculates the sum of the integers inside a string. For example, in the string "The30quick20brown10f0x1203jumps914ov3r1349the102l4zy dog", the sum of the integers is 3635.

// Note: only positive integers will be tested.


//my solution
function sumOfIntegersInString(s){
    let numArr = [] 
    let current = ''
    let arr = s.split('')
    for(let i = 0; i < arr.length; i++){
      if(Number.isInteger(Number(arr[i]))){
        current += arr[i]}
      else{ numArr.push(Number(current))
           current = ''}}
    if(current){numArr.push(Number(current))}
      return numArr.reduce((a,b) => a+b, 0)
  }

//best solution
function sumOfIntegersInString(s) {
    return (s.match(/\d+/g) || []).reduce((s, n) => s + +n, 0);
  }