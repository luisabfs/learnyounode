const fs = require('fs');

const buffer = fs.readFileSync(process.argv[2]);
const string = buffer.toString().split('\n');

console.log(string.length-1);
