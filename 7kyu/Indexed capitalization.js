// Given a string and an array of integers representing indices, capitalize all letters at the given indices.

// For example:

//     capitalize("abcdef",[1,2,5]) = "aBCdeF"
//     capitalize("abcdef",[1,2,5,100]) = "aBCdeF". There is no index 100.

// The input will be a lowercase string with no spaces and an array of digits.


//my solution
function capitalize(s,arr){ //"abcdef",[1,2,5]),'aBCdeF'
    let sA = s.split('') //['a', 'b', 'c', 'd', 'e', 'f']
    let index = arr.sort((a,b) => a-b).filter((item) => item < sA.length) //[1,2,5]
    let upC =[] //[]
    for(let i = 0; i < sA.length; i++){
      for(let j = 0; j < index.length; j++){
        if(index[j] == i){
          upC.push(sA[i].toUpperCase());
          i++;}}
        upC.push(sA[i])
    }
    return upC.join('')
  };

//best solution

function capitalize(s,arr){
  
    var capS = s.split("");
    
    for(var i = 0; i < arr.length; i++) {
      if(capS[arr[i]]) {
        capS[arr[i]] = capS[arr[i]].toUpperCase();
      }
    }
    
    capS = capS.join("");
    return capS
    };