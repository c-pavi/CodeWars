// Given an array of numbers (in string format), you must return a string. The numbers correspond to the letters of the alphabet in reverse order: a=26, z=1 etc. You should also account for '!', '?' and ' ' that are represented by '27', '28' and '29' respectively.

// All inputs will be valid.


//my solution
function switcher(x){
        let nummed = x.map((item) => 27 - Number(item))
        return nummed.map((i) => i > 0 ? String.fromCharCode(96 + i) : i == 0 ? '!': i== -1 ? '?' : ' ' ).join('')
    }

//best solution

const alpha = ' zyxwvutsrqponmlkjihgfedcba!? '
const switcher = x => x.map(item => alpha[item]).join('')

// other good one
function switcher(x)
{
  return x.map(a => 
    {
      if(a == 27) return "!";
      if(a == 28) return "?";
      if(a == 29) return " ";
      return String.fromCharCode(97 + 26 - parseInt(a));
      
    }).join('');
}

