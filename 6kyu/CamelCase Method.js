// Write simple .camelCase method (camel_case function in PHP, CamelCase in C# or camelCase in Java) for strings. All words must have their first letter capitalized without spaces.

// For instance:

// "hello case".camelCase() => HelloCase
// "camel case word".camelCase() => CamelCaseWord

// Don't forget to rate this kata! Thanks :)


//my solution

String.prototype.camelCase=function(){
    let split = this.split('')
    let camCased = []
    for(let i = 0; i < split.length; i++){
      if(i == 0){camCased.push((split[i].toUpperCase()))}
      else if(split[i] == ' '){camCased.push(split[i+1].toUpperCase()) ; i++}
      else{camCased.push(split[i])}
    }
    return camCased.join('')
  }

//best solution

String.prototype.camelCase=function(){
   return this.split(' ').map(function(word){
    return word.charAt(0).toUpperCase() + word.slice(1);
  }).join('');
}