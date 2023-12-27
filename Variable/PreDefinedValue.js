// Explanation truthy value and False value 
const userEmail = "h@gmail.com";
if(userEmail){
   // console.log("Got user email");
}

else
{
    //console.log("Don't have user email");

}

// falsy values

// false ,0,-0,BigIntOn," ", null, undefined,NAN

// truthy vales
//"0",'false'," ", [],{},function(){}
const userEmail_1 =" ";
if(userEmail_1.length === 0){
   // console.log("Array is empty");
}

const emptyObj = { username: "sql"}  // falsy value
if(Object.keys(emptyObj).length === 0)
{
   // console.log("object is empty");

}

// Nullish coalescing operator
//The nullish coalescing (??) operator is a logical operator that returns its right-hand side operand when its left-hand side operand is null or undefined, and otherwise returns its left-hand side operand.
let val1;
//val1=5??10;
//val1=null??10;
//val1=undefined??15;
val1=null??10??20;
console.log(val1);

const iceTeaPrice = 100;
iceTeaPrice>=80 ? console.log("less then 80") : console.log("more then 80");

// iteration / loops ->> in javascript 
// for loops 
for(let index=0; index<=Array.length; index++)
{

}