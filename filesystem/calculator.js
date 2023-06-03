//in argv 1st and 2nd values are node.exe file and the file name. So our arguments will start from 3rd position i.e. argv[2]
const num1 = parseInt(process.argv[2])
const opr = process.argv[3]
const num2 = parseInt(process.argv[4])

let result = null
switch(opr){
    case '+': result = num1 + num2
    break
    case '-': result = num1 - num2
    break
    case '*': result = num1 * num2
    break
    case '/': result = num1 / num2
    break
}
console.log("result = ", result)