//  Function Defination another way ijn javascript 
function addNumber(number1,number2)
{
    return number1+number2;
} 
const result = addNumber(3,5);
console.log(result);

function logUserMessage(username)
{
    return`${username} Tust logged in `
}
console.log(logUserMessage("hitesh"));

// some cheek function 
function  multiply(number1,number2)
{
    a=  typeof (number1);
    console.log(a);
    b= typeof (number2);
    console.log(b);
    if(typeof number1==="number")
    {
        console.log(number1*number2);
    }


}

multiply(5,4);
