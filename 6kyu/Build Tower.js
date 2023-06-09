// Build Tower

// Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. A tower block is represented with "*" character.

// For example, a tower with 3 floors looks like this:

// [
//   "  *  ",
//   " *** ", 
//   "*****"
// ]

// And a tower with 6 floors looks like this:

// [
//   "     *     ", 
//   "    ***    ", 
//   "   *****   ", 
//   "  *******  ", 
//   " ********* ", 
//   "***********"
// ]


//my solution
function towerBuilder(nFloors) {
    let list = []
    for(let i = 1; i <= nFloors; i ++){
      let insert = []
      let counter = (2*i)-1
      do{
        insert.push('*');
        counter --
      }
      while(counter != 0)
      if(insert.length < (2*nFloors)-1){
        do{
          insert.push(' ')
          insert.unshift(' ')
        }while(insert.length != (2*nFloors)-1 )
      }
      list.push(insert.join(''))
    }
    return list
  }
  
  

//best solution

function towerBuilder(nFloors) {
    var tower = [];
    for (var i = 0; i < nFloors; i++) {
      tower.push(" ".repeat(nFloors - i - 1)
               + "*".repeat((i * 2)+ 1)
               + " ".repeat(nFloors - i - 1));
    }
    return tower;
  }