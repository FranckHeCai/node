import fs from 'node:fs/promises'
import path from 'node:path'

const folder = process.argv[2] ?? '.'

async function ls(folder) {
    let files
    try {
        files = await fs.readdir(folder)
    } catch {
        console.error('Error when reading Directory')
        process.exit(1)
    }
    
    const filesPromises = files.map(async (file) => {
        const filePath = path.join(folder, file)
        let stats
        try {
            stats = await fs.stat(filePath) // file info
        } catch {
            console.error('Error when reading file')
            process.exit(1)
        }
        const isDirectory = stats.isDirectory()
        const fileType = isDirectory ? 'd' : '-'
        const fileSize = stats.size
        const fileModified = stats.mtime.toLocaleString()


        return `${fileType} ${file.padEnd(40)} ${fileSize.toString().padStart(10)} ${fileModified}`
    })

    const fileInfo = await Promise.all(filesPromises)
    fileInfo.forEach(info => console.log(info))
}

ls(folder)