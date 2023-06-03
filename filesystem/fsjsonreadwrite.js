const fs = require('fs')
fs.readFile("./json/users.json",(error,data)=>{
    if(error){
        console.log(error)
    }
    else{
        const users = JSON.parse(data)
        users[1].destination = "Senior Architecht"

        fs.writeFile("./json/users.json",JSON.stringify(users),(writeerror)=>{
            if(writeerror){
                console.log(writeerror)
            }
            else{
                console.log("successful")
            }
        })
    }
})