const path = require('path');
const fs = require('fs')

const route = "./src/assets/images/certificados/"


const archivos = fs.readdirSync(route);

console.log(path.sep)
console.log(path.extname(route))

console.log(archivos)

console.log(archivos.length)