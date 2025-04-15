import fs from "node:fs"

console.log("Reading first file...")
fs.readFile('./file.txt', 'utf-8', (err,text) => {
    console.log(text)
})

console.log("Doing other things while reading file...")

console.log("Reading second file...")
fs.readFile('./file2.txt', 'utf-8', (err,text)=> {
    console.log(text)
})