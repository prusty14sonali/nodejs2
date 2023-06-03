//npm install yargs to iclude as its a 3rd party package
const fs = require('fs')
const args = require('yargs').argv
fs.readFile('audit.txt','utf-8',(error,data)=>{
    if(error){
        console.log(error)
    }
    else{
        console.log(data,' able to read the data successfully')
        const fileArr = data.split("\n")
        if(fileArr.indexOf(args.filename)=== -1){
            fs.writeFile('' + args.filename + '.txt'," test data",(err)=>{
                if(err){
                    console.log(err)
                }
                else{
                    fs.appendFileSync('audit.txt',args.filename + '\n')
                    console.log("file name appended successfully")
                }
            })
        }
        else{
            console.log("file name is already present")
        }
    }
})

//node yargs --filename="test"