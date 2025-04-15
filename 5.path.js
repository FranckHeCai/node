import path from 'node:path'
import { fileURLToPath } from 'node:url'
console.log(path.sep)

// unir path con path.join

const filePath = path.join('/content', '/subfolder', 'test.txt')
console.log(filePath)

const base = path.basename('/tmp/secret-files/password.txt')
console.log(base)

const fileName = path.basename('/tmp/secret-files/password.txt', '.txt')
console.log(fileName)

const extension = path.extname('image.png')
console.log(extension)