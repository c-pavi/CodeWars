// Given a string, turn each character into its ASCII character code and join them together to create a number - let's call this number total1:

// 'ABC' --> 'A' = 65, 'B' = 66, 'C' = 67 --> 656667

// Then replace any incidence of the number 7 with the number 1, and call this number 'total2':

// total1 = 656667
//               ^
// total2 = 656661
//               ^

// Then return the difference between the sum of the digits in total1 and total2:

//   (6 + 5 + 6 + 6 + 6 + 7)
// - (6 + 5 + 6 + 6 + 6 + 1)
// -------------------------
//                        6


//my solution
function calc(s){
    let charCodeArr = [] 
    for(let i = 0; i < s.length; i++){
      let code = s.charCodeAt(i);
      charCodeArr.push(code);
    }
    let join = charCodeArr.join('')
    return (join.match(/7/g)|| []).length*6
  }

//best solution
function calc(x){
    let sum = n => [...n].reduce((a,b) => +a + +b);
    let total1 = x.replace(/./g, x => x.charCodeAt(0));
    let total2 = total1.replace(/7/g,'1');
    return sum(total1) - sum(total2);
  }