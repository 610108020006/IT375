const p = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        //resolve({id:1,"name" : "Chotdecha"});
        reject(new Error('Error 404 Bad Resquest'));
    },2000);
});
console.log('Before Asynchronous Operation');

p.then((result)=>{
    console.log('This is result: ',result);
})
.catch((err)=>{
    console.log(err.message);
});

console.log('After Asynchronous Operation');