// Write Number in Expanded Form

// You will be given a number and you will need to return it as a string in Expanded Form. For example:

// expandedForm(12); // Should return '10 + 2'
// expandedForm(42); // Should return '40 + 2'
// expandedForm(70304); // Should return '70000 + 300 + 4'

// NOTE: All numbers will be whole numbers greater than 0.

//my solution
function expandedForm(num) {
    let arr = String(num).split('').map(item => Number(item))
    let numArr = arr.map((item, index) => item*(10**(arr.length - index -1)))
    let filtArr = numArr.filter((item => item > 0))
    let str = `${filtArr[0]}`
    for(let i = 1; i < filtArr.length; i++){
      str += ` + ${filtArr[i]}`
    }
    return str
  }


//best solution
const expandedForm = n => n.toString()
                            .split("")
                            .reverse()
                            .map( (a, i) => a * Math.pow(10, i))
                            .filter(a => a > 0)
                            .reverse()
                            .join(" + ");