// Write a function that removes every lone 9 that is inbetween 7s.

// "79712312" --> "7712312"
// "79797"    --> "777"



//my solution
function sevenAte9(str) {
    let arr = str.split('')
    let newArr = []
    for(let i = 0; i < str.length; i++){
      if(arr[i] == '9' & arr[i-1] == '7' & arr[i+1] == '7'){
        newArr.push(null)
       }
      else{newArr.push(arr[i])}
    }
   return newArr.join('')
  }

//best solution

function sevenAte9(str){
    return str.replace(/79(?=7)/g, '7');
  }
  