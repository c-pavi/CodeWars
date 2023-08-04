// John has invited some friends. His list is:

// s = "Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill";

// Could you make a program that

//     makes this string uppercase
//     gives it sorted in alphabetical order by last name.

// When the last names are the same, sort them by first name. Last name and first name of a guest come in the result between parentheses separated by a comma.

// So the result of function meeting(s) will be:

// "(CORWILL, ALFRED)(CORWILL, FRED)(CORWILL, RAPHAEL)(CORWILL, WILFRED)(TORNBULL, BARNEY)(TORNBULL, BETTY)(TORNBULL, BJON)"

// It can happen that in two distinct families with the same family name two people have the same first name too.

//my solution
function meeting(s) {
    let items = s.toUpperCase().split(';')
    let rev = items.map((item) => item.split(':').reverse('').join(', '))
    let ordered = rev.sort()
    let str = ''
    for(let i = 0; i < ordered.length; i++){
      str += `(${ordered[i]})`
    }
    return str
  }

//best solution
function meeting(s) {
    let string = s.toUpperCase().split(';')
                  .map(x => x.split(':').reverse().join(', '))
                  .sort()
                  .join(')(')
    return '(' + string + ')'
  }