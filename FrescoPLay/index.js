var operators = [];
var operands = [];
var html = document.getElementById('screen');

function update(value) {
    //Type the code here.
    if(value != "+" && value != "-" && value != '*' && value != "/"){
        html.value = value;
        operands.push(value);
    }   
    else{
        html.value = value;
        operators.push(value);
    }
}

function print(){
    console.log(operators);

    console.log(operands);
}
function result() {
    //Type the code here.
    var a = operands.shift();
    var b = operands.shift();
    var op = operators.shift();
    if(op == "+")
        html.value = a+b;
    else if(op == "-")
        html.value = a-b;
    else if(op == '*')
        html.value = a*b;
    else html.value = a/b;
}

function reset() {
    //Type the code here.
    operators = [];
    operands = [];
    html.value = "";
}


// update(1);
// update("*");
// update(2);
// console.log(result());
// reset();