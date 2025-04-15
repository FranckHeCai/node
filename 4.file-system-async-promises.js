import fs from "node:fs/promises"

console.log("Reading first file...")
fs.readFile('./file.txt', 'utf-8')
    .then(text => {
        console.log(text)
    })

console.log("Doing other things while reading file...")

console.log("Reading second file...")
fs.readFile('./file2.txt', 'utf-8')
    .then(text => {
        console.log(text)
    })