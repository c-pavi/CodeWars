// Reverse every other word in a given string, then return the string. Throw away any leading or trailing whitespace, while ensuring there is exactly one space between each word. Punctuation marks should be treated as if they are a part of the word in this kata.

//my solution

function reverse(str){
    let arr = str.split(' ')
    let newStr = []
    for(let i = 0; i < arr.length; i++){
      if(i%2==1){ newStr.push(arr[i].split('').reverse().join(''))}
      else(newStr.push(arr[i]))
    }
    return newStr.join(' ').trim()
  
  }

  //best solution

  function reverse(str){
  
    let arr = str.split(" "); 
  
    for(var i = 1; i<arr.length; i+=2){
        arr[i] = arr[i].split('').reverse().join(""); 
    }
    
    return arr.join(" ").trim(); 
    
  }