let firstNumber;
let secondNumber;
let operator;

let calc = document
            .getElementById('calc-output')
let output ="";
// function getOutput() {
//     return output
// }
function display(a){
    output+=a;
    calc.textContent=`${output}`
}
function clear(){
    console.log(output)
    output="";
}

function add(a,b){
    return a+b
}
function subtract(a,b){
    return a-b
}
function multiply(a,b){
    return a*b
}
function divide(a,b){
    return a/b
}
function operate(a,o,c){
switch (o) {
    case '+':add(a,c)
        
        break;
    case '-':subtract(a,c)
        
        break;
    case '*':multiply(a,c)
        
        break;
    case '/':operate(a,c)
        
        break;
    default:
        break;
}
}
