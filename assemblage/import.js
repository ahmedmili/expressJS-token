const DecEnc = require("./dec-enc.js");


const claims = {
    Username: "ahmed",
    Age: 28,
    Fullname: "ahmed mili"
}
const key = "$AhmedIsAwesome!"; // privat key

const header = {
    alg: "HS512",
    typ: "JWT"
};



var sJWT = DecEnc.GenerateJWT(header,claims,key);
console.log(sJWT);

console.log( DecEnc.ValidateJWT({alg: ["HS512"]},sJWT,key) ) 

var pClaim = DecEnc.DecodeJWT(sJWT);
console.log(pClaim);





