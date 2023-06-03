const fs = require('fs')
const { Stats } = require('webpack')
const string1 ="Hello world from append file"
fs.stat("./files/infonew.txt",string1,(error, stats)=>{
    if(error){
        console.log(error)
    }
else{
    console.table(stats)
    console.log("is it a file", stats.isFile())
    console.log("is it a directory", stats.isDirectory())
}
})