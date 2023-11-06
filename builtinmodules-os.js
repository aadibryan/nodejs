const os = require('os');

//info about the current user
const user = os.userInfo();

//method returns system uptime in seconds
const upTime = os.uptime()

const curOS ={
    name:os.type(),
    release:os.release(),
    totalMem:os.totalmem(),
    freeMem:os.freemem()
}

console.log(user)
console.log(upTime/3600)
console.log(upTime)
console.log(curOS)