// step 1 create object experss
const express = require('express');
const app = express();

const port = process.env.PORT || 8000;

// step 2 routing

//IT student
const itStudents = [
    {id:61,name:'Chotdecha IT'},
    {id:62,name:'Suchada IT'}
];
//CE student
const ceStudents = [
    {id:71,name:'Narawit CE'},
    {id:72,name:'Chonticha CE'}
];

//majo
const allMajors = {
    'it':itStudents,
    'ce':ceStudents
};

//route
app.get('/api/:id/:major',(req,res)=>{
    const id = req.params.id;
    const major = req.params.major.toLowerCase();

    if(allMajors[major]){
        if(major == 'it'){
            let stuData = itStudents.find(obj => obj.id === parseInt(id));
            if(typeof stuData === 'undefined'){
        res.send('This student is no in major IT');
            }else{
                res.send (stuData);
            }
        }else{
            let stuData = ceStudents.find(obj => obj.id === parseInt(id));
            if(typeof stuData === 'undefined'){
                res.send('This student is no in major CE');
        }else{
            res.send(stuData);
        }
    }
}else{
    res.send('Major not found!!!');
    }
});

//step 3
app.listen(port,'127.0.0.1',()=>{
    console.log(`Listening on port ${port}`);
});