const JSRSASign = require("jsrsasign");

 // token creation ..codage
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

var sHeader = JSON.stringify(header);
var sPayload = JSON.stringify(claims);

const sJWT = JSRSASign.jws.JWS.sign("HS512", sHeader, sPayload, key);
 console.log(sJWT)

// verification
 const algorithm = "HS512";
 var token = sJWT

 console.log(
    JSRSASign.jws.JWS.verifyJWT(token, key, {
    alg: [algorithm]
    })
);


//  read token ..  decodage

const aJWT = sJWT.split(".");
const uHeader = JSRSASign.b64utos(aJWT[0]);
const uClaim = JSRSASign.b64utos(aJWT[1]);
const pHeader = JSRSASign.jws.JWS.readSafeJSONString(uHeader);
const pClaim = JSRSASign.jws.JWS.readSafeJSONString(uClaim);
console.log(pHeader);
console.log(pClaim);











   
