const JWT = require("jsonwebtoken");
const express = require("express");
require ("dotenv").config();
const {users} = require("../datos"); 
const router = express.Router();
const KEY = process.env.KEY;

router.post("/login", (req , res)=>{
     const {email , name} = req.body ;

    const user = users.find((user)=> user.email=== email || user.name=== name)
    
    if(user){
        const token = JWT.sign(user , KEY ,{ algorithm: "HS256" })
        res.status(200).json({token});
    }else res.status(400).json({message : "usuario o nombre no coinciden o no existen"})});


    router.get("/secret", (req, res) => {
      const token = req.headers.authorization;
  
      JWT.verify(token, KEY, (error, decoded) => {
          if (error) {
              return res.status(400).json({ error: "Token inválido" });
          } else {
              if (decoded.rol === "admin") {
                  res.status(200).json({ users });
              } else {
                  res.status(400).json("No tienes acceso");
              }
          }
      });
  });
 
module.exports=router;