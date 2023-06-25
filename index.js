const express = require('express');
const { copyFileSync } = require('fs');
const app = express();
const path = require('path');


const PORT = process.env.PORT || 3000;



app.get('/',(req,res) =>{

    console.log('Everything is fine now ');
    return res.send('<h1>Hey How are you ? </h1>');
});

app.get('/bicycle' , (req,res) =>{
    console.log('This is the Bicycle page');
    console.log(req.query.id);
    res.send('<h1> Bicycle page </h1>');
});


app.listen(PORT,() =>{
    console.log(`Server is running on port ${PORT}`);

})