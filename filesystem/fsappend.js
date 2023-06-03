const fs = require('fs')
const string1 ="Hello world from append file"
fs.appendFile("./files/infonew.txt",string1,(error)=>{
    if(error){
        console.log(error)
    }
else{
    console.log("data appened successfully")
}
})