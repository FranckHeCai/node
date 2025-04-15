import fs from "node:fs/promises"

console.log("Reading first file...")
const text = await fs.readFile('./file.txt', 'utf-8')
console.log(text)


console.log("Doing other things while reading file...")

console.log("Reading second file...")
const secondText = await fs.readFile('./file2.txt', 'utf-8')

console.log(secondText)
