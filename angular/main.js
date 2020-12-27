const express = require("express");
const app = express();
app.use(express.json());   //parsing the POST request
app.use(function(req,res,next){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x-client-key, x-client-token, x-client-secret, Authorization");
      next();


})
const showdata = require("./show");
const adduser = require("./adduser");
const updatedata = require("./update");
const deleteUser = require("./delete");
console.log("HeElo");


app.post("/adduser",async (req,res)=>{
  console.log(req.body);
   try {
    const input = req.body;
    const result = await adduser.adduser(input);
    console.log("Done2");
    return res.send(result).status(200); 
   } catch (error) {
       res.send(error).status(500);
   }
})

app.get("/showdata",async (req,res)=>{
    const result = await showdata.showdata();
    res.send(result).status(200);
})


app.post("/update", async (req,res)=>{
    const input = req.body;
    const result = await updatedata.updateData(input);
    return res.send(result).status(200);
})


app.post("/deleteUser",async (req,res)=>{
    
    const id = req.body;
    console.log(id);
    const result = await deleteUser.Delete(id);
    return res.send(result).status(200);
})
app.listen(3010);   



