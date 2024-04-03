import db from "../models/index.js";

let createUser = function(req){
 
    let User={ 
    name:req.body.name,
    email:req.body.email,
    password: req.body.password,
    role:req.body.role,
    country: req.body.country
   }
   if(user.name == null ||user.email== null|| user.password==null)
    {
        console.log("All fields are required");
        return res.status(403).json(
        {
            status:403,
            message:"all fields are required"
        });
    }
    
   
   
    
}
