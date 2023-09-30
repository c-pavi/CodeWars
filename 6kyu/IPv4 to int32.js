// Take the following IPv4 address: 128.32.10.1. This address has 4 octets where each octet is a single byte (or 8 bits).

//     1st octet 128 has the binary representation: 10000000
//     2nd octet 32 has the binary representation: 00100000
//     3rd octet 10 has the binary representation: 00001010
//     4th octet 1 has the binary representation: 00000001

// So 128.32.10.1 == 10000000.00100000.00001010.00000001

// Because the above IP address has 32 bits, we can represent it as the 32 bit number: 2149583361.

// Write a function ip_to_int32(ip) ( JS: ipToInt32(ip) ) that takes an IPv4 address and returns a 32 bit number.
// Example

// "128.32.10.1" => 2149583361



//my solution
function ipToInt32(ip){
    let arr = ip.split('.').map((item) => Number(item)).map((x) => x.toString(2))
    for(let i = 0; i < arr.length; i++){
      if(arr[i].length < 8){
        do{
          arr[i] = '0'+ arr[i]
        }while(arr[i].length < 8)
      }
    }
    let bin = arr.join('')
    return parseInt(bin,2)
  }

//best solution
function ipToInt32(ip){
    return ip.split(".").reduce(function(int,v){ return int*256 + +v } )
 }