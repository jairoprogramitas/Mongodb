//file related to web server.
// console.log("testing"); //testing
const express= require('express');
const cors = require('cors');

const app= express();

var corsOptions={ 
    origin: "http://localhost:8088"
}

app.use(cors(corsOptions));

app.use(express.json());

app.use(express.urlencoded({extended:true}));

app.get("/",(req,res)=>{
    res.json({
        message:"Hello there"
    });

});

const PORT = process.eventNames.PORT || 8088;

app.listen(PORT,()=>{

    console.log(`SERVER RUNNING ON PORT ${PORT}.`);
    
});

