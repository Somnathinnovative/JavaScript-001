//Functions are one of the fundamental building blocks in JavaScript.
function SayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
}

SayMyName();

function addTwoNumbers(number1, number2)
{
    console.log(number1+number2);
}
addTwoNumbers(3,null);
addTwoNumbers(50, 25);
addTwoNumbers("3",4);
addTwoNumbers('3','4');
addTwoNumbers(null,3);

const result = addTwoNumbers(3,5); // No return value
console.log("REsult :",result);
//////////////////////////////
function addTwoNumbers(number1,number2)
{
        let result =  number1+number2;
        return result;
}

const result1=addTwoNumbers(6,4);
console.log(result);

