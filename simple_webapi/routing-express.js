// step 1 create object experss
const express = require('express');
const app = express();

const port = process.env.PORT || 8000;

// step 2 using obj express's methords
app.get('/',(req,res)=>{
    res.send('HOME page');
});
app.get('/overview',(req,res)=>{
    res.send('OVERVIEW page');
});
app.get('/product',(req,res)=>{
    res.send('Product page');
});
app.get('/api/user',(req,res)=>{
    const userData = {id:15, name: 'Suchada'}
    res.send(userData);
});

//step 3
app.listen(port,'127.0.0.1',()=>{
    console.log(`Listening on port ${port}`);
});