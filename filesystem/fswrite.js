const fs = require('fs')
const string1 ="Thsi is from FSWrite file"
fs.writeFile("./files/info3.txt",string1,(error)=>{
    if(error){
        console.log(error)
    }
else{
    console.log("data written successfully")
}
})