const fs = require('fs')
const allocatedBuffer = Buffer.alloc(1024) //for temporary storage
//ESS style
fs.open('./files/info1.txt','r+',(err,fileDescriptor)=>{
if(err){
    console.log(err)
}
else{
    //descriptor is used by subsequent file operations and it is a handle through which you can access the file
    //it is used to access the file and uniquely refer a specific file if needed
    console.log(fileDescriptor,"file opened successfully")
    //filedescriptor - returned by fs.open
    //allocatedBuffer - for temporary storage
    //offset - buffer offset starting point
    //allocatedBuffer.length - length of buffer
    //position - from where read operation should start from 
    fs.read(fileDescriptor,allocatedBuffer,0,allocatedBuffer.length,0,(err,bytes)=>{
        if(err){
            console.log(err)
        }
        else{
            console.log(bytes + " bytes read");
            if(bytes > 0){
                console.log(allocatedBuffer.slice(0,bytes).toString());
            }
        }
    })
}
})