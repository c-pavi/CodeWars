// Complete the solution so that the function will break up camel casing, using a space between words.
// Example

// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""



//my solution
function solution(string) {
    let arr = string.split('')
    let camel = []
    for(let i = 0; i < arr.length; i++){
      if( arr[i] == arr[i].toUpperCase()){
        camel.push(' ')
        camel.push(arr[i])
      }
      else{camel.push(arr[i])}
    }
      return camel.join('')
  }

//best solution
// complete the function
function solution(string) {
    return(string.replace(/([A-Z])/g, ' $1'));
  
  }