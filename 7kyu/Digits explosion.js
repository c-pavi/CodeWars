// Given a string made of digits [0-9], return a string where each digit is repeated a number of times equals to its value.
// Examples

// explode("312")

// should return :

// "333122"

// explode("102269")

// should return :

// "12222666666999999999"



//my solution

function explode(s) { ///["312", "333122"],
    let expStr = s.split('') //[ '3', '1', '2' ]
    let expNum = expStr.map((item) => Number(item)) //[ 3, 1, 2 ]
    let expl = []
  
    for(let i = 0; i < expStr.length; i++){
      if(expStr[i] != 0){
      do{
        expl.push(expStr[i])
        expNum[i] -=1
      }while(expNum[i] > 0)
      }
    }
    return expl.join('')
    }

//best solution


function explode(s) {
    return s.split("").map((e) => e.repeat(+e)).join("");
  }

//or 
  const explode = s => s.replace(/\d/g, d => d.repeat(d));