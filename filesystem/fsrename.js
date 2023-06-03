const fs = require('fs')
fs.rename('./files/info.txt','./files/infonew.txt',(err)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log(data) //rename does not return any data
        console.log("file renamed successfully")
    }

})