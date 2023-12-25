//  Function Defination another way ijn javascript 
function addNumber(number1, number2) {
    return number1 + number2;
}
const result = addNumber(3, 5);
console.log(result);

function logUserMessage(username) {
    return `${username} Tust logged in `
}
console.log(logUserMessage("hitesh"));

// some cheek function 
function multiply(number1, number2) {

    if (typeof number1 === "number") {
        if (typeof number2 === "number") {
            console.log(number1 * number2);
        }
        else {
            console.log("please enter corected second value")
        }
    }
    else {
        console.log("Please entered corrected frist value ");
    }

}

multiply(5, 4);
multiply(10, 10);
multiply(40, null);
multiply(40, "40");
multiply("3", 4);

function loginUserMessage(username) {
    if (username === undefined) {
        // console.log("Please enter a username ");
        return "Please enter a username ";

    }

    return `${username} just logged in`;
}

console.log(loginUserMessage("hitesh"));
console.log(loginUserMessage());

function loginMessage(userName) {
    if (!userName) {
        console.log("please enter a username");

    }

    return `${userName} just loggedin`;
}

console.log(loginMessage());

function calculateCostPrice(...num1) {
    return num1;
}

console.log(calculateCostPrice(200, 400, 500, 200));

/////////////////********************/////////////

const user = {
    username: "hitesh",
    price: 199
}
function handleObject(anyObject) {
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);

}

handleObject(user);

handleObject(
    {
        username: "Sam",
        price: 399
    }
)

const myNewArray = [200,400,100,600]

function  SecondValue(getArray){
        return getArray[1];
}

console.log(SecondValue(myNewArray));
