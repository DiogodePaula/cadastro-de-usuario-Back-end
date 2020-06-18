const express = require("express");

const server = express();

server.use(express.json());

const users =[];

server.get("/", (req,res) =>{
    return res.json({
        result: "Bem vindo a comunidade Growdevers"
    });
});

server.post("/addUsers", (req,res) => {

    const email = req.body.email;
    const name = req.body.name;
    const age = req.body.age;
    const fone = req.body.fone;

    const user = {
        email,
        name,
        age,
        fone
    };

    users.push(user);

    return res.json(user);
});

server.get("/users", (req,res) =>{
    return res.json({users});
}) 

server.put("/:id", (req,res) =>{

    for(let i = 0; i < users.length; i++){
    if(id == [0]){    
    const {email, name, age, fone} = req.body;
    const id = req.params;
    const user = (id,{email, name, age, fone});
    }
    
    return res.json({user});
    }
});


server.listen(3000); 