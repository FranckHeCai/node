// argumentos de entrada
console.log(process.argv)

//controlar proceso y su salida 1: si ha salido mal 0: si ha salido bien
process.exit(1)

//controlar eventos
process.on('exit', ()=>{
    //limpiar recursos
})

//current working directory
process.cwd()