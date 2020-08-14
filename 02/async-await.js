const myAsyncFunc = async()=>{
    try{
    const result = await Promise.resolve('Async Function');
    console.log(result);
    }catch(error){
        console.log(console.error);
    }
}
myAsyncFunc();