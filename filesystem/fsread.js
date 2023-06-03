const fs = require('fs')
//async read mechanism
// console.log("hello - process1")
// fs.readFile('./files/info.txt',"utf-8", (error, data) => {
//     if(error){
//         console.log("File not found - process2")
//     }
//     else{
//         console.log(data)
//     }
// })
// console.log("hello -process3")

//Synchronous methods use functions that are blocking in nature. Blocking functions blocks the execution of the next instruction
//wait for the current operation to be finished
console.log("hello -process1")
try{
    const data = fs.readFileSync('./files/info.txt',"utf-8")
    console.log(data)

}
catch(err){
console.log(err)
}
console.log("hello -process2")