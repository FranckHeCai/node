import fs from 'node:fs/promises'
import path from 'node:path'
import pico from 'picocolors'

const folder = process.argv[2] ?? '.'

async function ls(folder) {
    let files
    try {
        files = await fs.readdir(folder)
    } catch {
        console.error(pico.red('Error when reading Directory'))
        process.exit(1)
    }
    
    const filesPromises = files.map(async (file) => {
        const filePath = path.join(folder, file)
        let stats
        try {
            stats = await fs.stat(filePath) // file info
        } catch {
            console.error(pico.red('Error when reading file'))
            process.exit(1)
        }
        const isDirectory = stats.isDirectory()
        const fileType = isDirectory ? 'd' : 'f'
        const fileSize = stats.size.toString().padStart(10)
        const fileModified = stats.mtime.toLocaleString()


        return `${fileType} ${pico.blue(file.padEnd(40))} ${pico.green(fileSize)} ${pico.yellow(fileModified)}`
    })

    const fileInfo = await Promise.all(filesPromises)
    fileInfo.forEach(info => console.log(info))
}

ls(folder)