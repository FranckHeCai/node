import os from "node:os"
// const os = require("node:os")

console.log("OS information")
console.log("----------------")
console.log("OS Name - ", os.platform())
console.log("OS Version - ", os.version())
console.log("Arquitecture - ", os.arch())
console.log("CPUs - ", os.cpus().length)
console.log("Free Memory - ", os.freemem()/1024/1024/1024)
console.log("Total Memory - ", os.totalmem()/1024/1024/1024)
console.log("Uptime - ", os.uptime()/60/60/24, "days")