let score="abc22" // if string is not exact number like "abc23" then converting to number returns NaN.




console.log(score)
console.log(typeof score)

let conver=Number(score)
console.log(conver) // type conversion from string to number
console.log(typeof conver)

/*
if string value => true, number - 1 ; value=>false then 0 as well if value is null
if undefined - undefined , type=>undefined
*/

// type conversion from number to boolean 

let isloggedin=1
let takestring="vikash"

console.log(isloggedin)
console.log(typeof isloggedin)

let convert_bool=Boolean(takestring)
console.log(convert_bool)
console.log(typeof convert_bool) // 1 => true; 0=>false 

// "" => false; "sometext"=>true



// type conversion from number to string

let val=33

let str=String(val)

console.log(str)
console.log(typeof str)

