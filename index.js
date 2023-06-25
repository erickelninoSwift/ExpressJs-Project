const express = require('express');
const fileSystem = require('fs').promises;
const app = express();
const path = require('path');
const AllBicycleData = require('./data/data.json');

const PORT = process.env.PORT || 3000;



app.set('view engine','ejs');

app.get('/',(req,res) =>{
    return res.render('bicycles');
});

app.get('/bicycle' , (req,res) =>{

    const bicycleShow = AllBicycleData.find(data =>{
        return data.id === req.query.id
    });
    return res.render('overview');
});


app.listen(PORT,() =>{
    console.log(`Server is running on port ${PORT}`);

})