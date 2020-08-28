const http = require('http');
const url = require('url');
const e = require('express');
//create server
const server = http.createServer((req,res)=>{
    //implement routing
    const pathName = req.url;
    if(pathName==='/overview'){
        res.end('This is OVERVIEW page');
    }else if (pathName==='/product'){
        res.end('This is PRODUCT page');
    }else{
        res.writeHead(404);
        res.end('Page not found!!!');
    }
});
server.listen(8000,'127.0.0.1',()=>{
    console.log('Listening to request on port 3000');
});