const accountId=14553;

let accountEmail="vikashagrawal901@gmail.com"
var accountPassword= "12345"
accountCity = "Jaipur"

// accountId=2 // not allowed

accountEmail="vi@gmail.com"
accountPassword= "15"
accountCity = "banglure" // not the preferred way to declare variables

let accountstate

/*
 Prefer Not to use var because of issue in block scope and functional scope
*/



console.log(accountId)
console.table([accountEmail,accountId,accountPassword, accountstate])