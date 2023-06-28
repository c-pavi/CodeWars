// The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

// What if the string is empty? Then the result should be empty object literal, {}.


//my solution

function count(s) {
    let obj = {}
    let arr = s.split('').forEach((item) => obj[item] ? obj[item] ++ : obj[item] = 1)
    return obj;
  }
  
  

//best solution

function count (string) {  
    var count = {};
    string.split('').forEach(function(s) {
       count[s] ? count[s]++ : count[s] = 1;
    });
    return count;
  }