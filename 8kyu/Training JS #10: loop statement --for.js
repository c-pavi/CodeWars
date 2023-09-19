// Task

// The function pickIt accepts 1 parameter, arr, which is an array of numbers. We need to traverse arr by using a for loop. If an element is an odd number, push it to the odd array, and if it's an even number, push it to the evenarray.

// I've defined two arrays odd and even in the function, and also wrote the return statement. Your work is to write a for loop.

//my solution
function pickIt(arr){
    var odd=[],even=[];
    for(let i = 0; i < arr.length; i++){
      if(arr[i] % 2 == 1){odd.push(arr[i])}
      else{even.push(arr[i])}
    }
  
    return [odd,even];
  }

//best solution

function pickIt (arr) {
  
    let odd = []
    let even =[]
        
    for (var x of arr) {
        ((x % 2) ? odd : even).push(x)    
    }
        
    return [odd, even]
  }