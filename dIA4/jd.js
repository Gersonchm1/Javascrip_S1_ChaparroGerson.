const doAsyncStuff = ( num1,num2, done)=>{
    const resultado =num1 + num2
    return setTimeout(() => {
        done (resusltado)

    }, 500)
}
const doAsyncStuffpromisses = ( num1,num2, )=>{
    const resultado =num1 + num2
    return new Promise(( resolve)=>{
        setTimeout(()=> {
            resolve(resultado)

        },500)


    }
) };


juan(44, 11, (result) => {
    console.log(result);
});
doAsyncStuffpromisses(44, 11).then(result => {
    console.log(result);
});
