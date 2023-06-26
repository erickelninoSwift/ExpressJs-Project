const path = require('path');
const express = require('express');
const app = express();
const AllBicycleData = require('./data/data.json');
const PORT = process.env.PORT || 3000;
const ejs = require('ejs');



app.set('views','./view');
app.set('view engine', 'ejs');
app.use(express.static('public'));





app.get('/', (req,res) =>{
    const cycle = AllBicycleData;

    console.log(cycle);
    
    return res.render('bicycles',{
        myBicycle : cycle
    });
});

app.get('/bicycle' , (req,res) =>{

    const bicycleShow = AllBicycleData.find(data =>{
        return data.id === req.query.id
    });
    console.log(bicycleShow);

    return res.render('overview',{
        myBicycle : bicycleShow
    });
});


app.listen(PORT,() =>{
    console.log(`Server is running on port ${PORT}`);
})
