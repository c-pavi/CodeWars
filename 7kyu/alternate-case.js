//Write function alternateCase which switch every letter in string from upper to lower and from lower to upper. E.g: Hello World -> hELLO wORLD



//my solution
function alternateCase(s) {
    let split = s.split('')
    let altCase = []
    for(let i = 0; i < split.length; i++){
      if(split[i] === split[i].toUpperCase()){
        altCase.push(split[i].toLowerCase())}
      else{
        altCase.push(split[i].toUpperCase())
      }
    }
    return altCase.join('')
  }
  
//best solution
function alternateCase(s) {
    return s.split('').map(function(el) {
      return el === el.toUpperCase() ? el.toLowerCase() : el.toUpperCase();
    }).join('');
  }