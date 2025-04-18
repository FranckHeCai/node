import fs from 'node:fs'

fs.readdir('.')
.then((files)=>{
    files.forEach(file=>{
        console.log(file)
    })
})
.catch(err => {
    if(err){
        console.error("Error when reading directory: ",err)
        return
    }
})

fs.stat("content")