const fs = require('fs')
const chalk = require('chalk')
// EDIT DISINI
global.owner = ['6288214099072'] // no own
global.packname = '© sticker by BagasXD' // nama pack sticker
global.author = 'BagasXD'// nama author 


let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.yellowBright(`Update File Terbaru ${__filename}`))
delete require.cache[file]
require(file)
})