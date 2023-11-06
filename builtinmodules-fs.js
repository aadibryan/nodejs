const {readFileSync, writeFileSync} = require('fs')

const first = readFileSync('./content/first.txt','utf-8');

writeFileSync('./content/aadi.txt',`This is Aadi and \t here is the result of the \n ${first}`,{flag:'a'})

console.log(first);