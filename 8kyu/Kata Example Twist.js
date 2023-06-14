// This is an easy twist to the example kata (provided by Codewars when learning how to create your own kata).

// Add the value "codewars" to the array websites 1,000 times.


//my solution
var websites = []
do{
  websites.push('codewars')
}while(websites.length < 1000)


//best solution
var websites = new Array(1000).fill("codewars");