import fs from "node:fs"

const stats = fs.statSync('./file.txt')

console.log(
    stats.isFile(),
    stats.isDirectory(),
    stats.size
)