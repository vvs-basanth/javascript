const accountId = 9770
let accountEmail = "vvs.pedapati@hotmail.com"
var accountPassword = "B@s@nth@29"
accountCity = "San Fransisco"
let accountState;

//accountId = 7020 // not allowed

accountEmail = "hc@hc.com"
accountPassword = "1234"
accountCity = "Vizag"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and funtional scope
*/

console.table([accountId, accountEmail, accountCity, accountPassword, accountState])


