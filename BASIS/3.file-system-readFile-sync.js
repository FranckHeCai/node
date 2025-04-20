import fs from "node:fs"

console.log("Reading first file...")
const text = fs.readFileSync('./file.txt', 'utf-8')
console.log(text)

console.log("Doing other things while reading file...")

console.log("Reading second file...")
const secondText = fs.readFileSync('./file2.txt', 'utf-8')
console.log(secondText)