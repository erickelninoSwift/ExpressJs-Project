const express = require('express');
const fileSystem = require('fs').promises;
const app = express();
const path = require('path');
const AllBicycleData = require('./data/data.json');


const PORT = process.env.PORT || 3000;



app.get('/',(req,res) =>{

    console.log('Everything is fine now ');
    return res.send(AllBicycleData);
});

app.get('/bicycle' , (req,res) =>{
    
    const bicycleShow = AllBicycleData.find(data =>{
        return data.id === req.query.id
    });

    res.send(bicycleShow);
});


app.listen(PORT,() =>{
    console.log(`Server is running on port ${PORT}`);

})