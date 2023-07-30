// Assume "#" is like a backspace in string. This means that string "a#bc#d" actually is "bd"

// Your task is to process a string with "#" symbols.
// Examples

// "abc#d##c"      ==>  "ac"
// "abc##d######"  ==>  ""
// "#######"       ==>  ""
// ""              ==>  ""


//my solution
function cleanString(s) {
    let arrString = s.split('')
    let arr = []
    for(let i = 0; i < arrString.length; i++){
      if(arrString[i] == '#'){arr.pop()}
      else{arr.push(arrString[i])}
    }
    return arr.join('')
  }

//best solution

function clean_string(s) {
    const result = []
      for (const c of s) {
      if (c === "#") {
        result.pop()
      } else {
        result.push(c)
      }
    }
    return result.join("")
  }
  