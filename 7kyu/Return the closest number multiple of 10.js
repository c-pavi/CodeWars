// Given a number return the closest number to it that is divisible by 10.

// Example input:

// 22
// 25
// 37

// Expected output:

// 20
// 30
// 40



//my solution
const closestMultiple10 = n => {
    let num = n/10
    return Math.ceil(num) - num > num - Math.floor(num) ? Math.floor(num)*10 : Math.ceil(num)*10
  };

//best solution

const closestMultiple10 = num => Math.round(num / 10) * 10;