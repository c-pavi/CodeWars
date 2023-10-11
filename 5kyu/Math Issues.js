// Oh no, our Math object was "accidently" reset. Can you re-implement some of those functions? We can assure, that only non-negative numbers are passed as arguments. So you don't have to consider things like undefined, null, NaN, negative numbers, strings and so on.

// Here is a list of functions, we need:

//     Math.round()
//     Math.ceil()
//     Math.floor()

//my solution
Math.ceil = function(number) {
    if(Number.isInteger(number)){
      return number
    }
    else{
      let num = String(number + 1).split('.')
      return Number(num[0])
    }
  };
  
  Math.floor = function(number) {
    if(Number.isInteger(number)){
      return number
    }
      else{
        if(number < 1){return 0}
        else{
              let num = String(number).split('.')
              return Number(num[0])
        }
        
    }
  };
  
  Math.round = function(number) {
    if(Number.isInteger(number)){
      return number
    }
    else{
      let floor = number - Math.floor(number) 
      let ceil = Math.ceil(number) - number
      return ceil <= floor ? Math.ceil(number) : Math.floor(number) ;
    }
  };


//best solution

Math.floor = number => parseInt(number)
Math.round = number => Math.floor(number + 0.5)
Math.ceil  = number => Number.isInteger(number) ? number : Math.floor( number + 1 )