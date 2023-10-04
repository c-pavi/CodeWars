// There is an array of strings. All strings contains similar letters except one. Try to find it!

// findUniq([ 'Aa', 'aaa', 'aaaaa', 'BbBb', 'Aaaa', 'AaAaAa', 'a' ]) === 'BbBb'
// findUniq([ 'abc', 'acb', 'bac', 'foo', 'bca', 'cab', 'cba' ]) === 'foo'

// Strings may contain spaces. Spaces are not significant, only non-spaces symbols matters. E.g. string that contains only spaces is like empty string.

// It’s guaranteed that array contains more than 2 strings.

// This is the second kata in series:

//     Find the unique number
//     Find the unique string (this kata)
//     Find The Unique


//my solution
function findUniq(arr) {
    let org = arr.map((item) => item.toLowerCase()) 
    let split = org.map((item) => item.split('').sort())
    let uniq = split.map((item) => [...new Set(item)].join())
    let filt = uniq.filter((item) => item == uniq[0])
    if(filt.length > 1){filt = uniq.filter((item) => item != uniq[0]) }
    let ind = uniq.indexOf(filt[0])
    return arr[ind]
    }

//best solution

const unique = (x, i, ar) => ar.indexOf(x) === ar.lastIndexOf(x);

const getUniques = x => [...new Set([...x.toLowerCase()].sort())].join('');

const findUniq = arr => arr[arr.map(getUniques).findIndex(unique)];