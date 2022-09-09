const express = require("express");
const app = express();
app.use(express.json());

const { GenerateJWT, DecodeJWT, ValidateJWT } = require("./assemblage/dec-enc.js");
const { Connection } = require("../mySql/db_Connection");

const port = process.env.PORT || 3100;

const welcomeMessage = "Welcome to the API Home Page. Please look at the documentation to learn how to use this web service.";

app.get("/", (req, res) => res.send(welcomeMessage));

app.post("/api/GenerateJWT", (req, res) =>
 res.json(GenerateJWT(req.body.header, req.body.claims,
req.body.key))
);

app.post("/api/DecodeJWT", (req, res) => 
 res.json(DecodeJWT(req.body.sJWS))
);

app.post("/api/ValidateJWT", (req, res) =>
 res.json(ValidateJWT(req.body.header, req.body.token,
req.body.key))
);

app.get("/api/connect", (req, res) =>
dbConnection
);



app.listen(port, () => console.log(`Server listening on port 
${port}!`));