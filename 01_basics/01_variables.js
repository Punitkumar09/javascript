const accountId = 123;
let accountEmail = "punit@gmail.com";
var accountPassword = "12345"
accountCity = "delhi"
let accountState;

//accountId = 2 not allowed

/* Prefer not to use var 
 because of issue in block scope and functional scope */

console.log(accountId);

accountEmail ="hdssdh@gmail.com"
accountPassword = "3232432"
accountCity = "uttar pradesh"

console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])