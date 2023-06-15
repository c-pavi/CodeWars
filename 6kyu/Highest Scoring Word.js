// Given a string of words, you need to find the highest scoring word.

// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

// For example, the score of abad is 8 (1 + 2 + 1 + 4).

// You need to return the highest scoring word as a string.

// If two words score the same, return the word that appears earliest in the original string.

// All letters will be lowercase and all inputs will be valid.


// my solution
function high(x){
    let arr = x.split(' ')
    let sum = []
    for(let i = 0; i < arr.length; i++){
      let score = 0
        for(let j = 0; j < arr[i].length; j++){
          score += arr[i].charCodeAt(j) - 96
        }
      sum.push(score)
    }
    
    return arr[sum.indexOf(Math.max(...sum))]
  }

// best solution
function high(s){
    let as = s.split(' ').map(s=>[...s].reduce((a,b)=>a+b.charCodeAt(0)-96,0));
    return s.split(' ')[as.indexOf(Math.max(...as))];
  }