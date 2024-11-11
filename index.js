//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming

import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
const _dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;
var key = "Khate&Andrea";
var input = "";
app.use(bodyParser.urlencoded({extended: true}));

function logger(req, res, next){
    input = req.body['password'];
    next();
}
app.use(logger);

app.get('/', (req, res)=>{
    res.sendFile(_dirname+"/public/index.html");
});

app.post('/check', (req,res)=>{
    if(key == input){
        res.sendFile(_dirname+"/public/secret.html");
    } else res.send("<h1>Wrong password!</h1>");
});

app.post
app.listen(port, (req, res)=>{
    console.log(`Port ${port} running`);
});