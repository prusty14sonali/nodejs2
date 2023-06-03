const fs = require('fs')
//Unlink function is used for delete
fs.unlink('./files/info1.txt',(err)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log("file deleted successfully")
    }

})