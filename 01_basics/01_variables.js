const accountId = 144553
let accountEmail = "rajesh@google.com"
var accountPassword ="12345"
accountCity = "Jaipur"
let accountState;
// accountId = 2 // not allowed

accountEmail = "hc@hc.com"
accountPassword = "2211133"
accountCity = "Bengaluru"

console.log(accountId);

/*
prefer not to use var
because of issue in block scope and functional scope
*/
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])