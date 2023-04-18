// Given a string s. You have to return another string such that even-indexed and odd-indexed characters of s are grouped and groups are space-separated (see sample below)

// Note: 
// 0 is considered to be an even index. 
// All input strings are valid with no spaces

//my solution
function sortMyString(S) {
    let arr = S.split('');
    let even = arr.filter((item, index) => index % 2 == 0).join('');
    let odd = arr.filter((item, index) => index % 2 == 1).join('');
    return `${even} ${odd}`
  }

//top solution
const sortMyString = s => {
    let even = s.split('').filter((v, i) => i % 2 === 0).join('')
    let odd = s.split('').filter((v, i) => i % 2 !== 0).join('')
    return even + ' ' + odd
}