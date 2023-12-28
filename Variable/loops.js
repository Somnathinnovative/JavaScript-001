// loops in javascript
/*for(let i=0;i<=10;i++){
    const element = i ;
    console.log(element);
}
*/
/*for(let i=0 ; i<=10;i++)
{
    console.log(`Outer loops value ${i}`);

        for(let j=0 ; j<=10 ; j++){
            console.log(`Inner loop value ${j} and inner loops ${i}`);
        }
}

*/
// create table 
/*
for (let i=0;i<=10;i++){
    console.log(`Outer loop value : ${i}`);

    for (let j=0;j<=10;j++)
    {
        console.log(`Inner loop value ${j} and outer loop ${i}`);
        console.log(i + '*' + j + '=' +  i*j )
    }
}*/
                /* 0 */  /* 1 */    /* 2 */
/*let myArray = ["flash", "batman", "Superman"]
console.log(myArray.length);
for(let index=0; index<myArray.length ; index ++ )
{
    const element = myArray[index];
    console.log(element);
}*/

// testing break and continue - continue with when condition is false 
/*for(let index =1; index<20; index++){

    if(index==5){
        console.log(`Detected 5 `);
        //continue;
         break;
    }

    console.log(`value of i is ${index}`);
}*/

// while and Do-While loops 
/*let index=0;
while (index<=10){
    console.log(`value of index is ${index}`);
    index=index+2;
}*/

/*let myArray=['flash','batman','superman']
let arr=0;
    while(arr<myArray.length)
    {
        console.log(`value is ${myArray[arr]}`);
        arr=arr+1;
    }

let score = 11;
do{
    console.log(`Score is ${score}`);
    score++;

}while(score<=10);*/

// Array Special loops 
// for of loops 
/*for(const iterator of Object){
    // syntax
}*/

const arr= [1,2,3,4,5,6,9];
for (const num of arr){
    console.log(num);
}

const greetings = 'Hello World';

for(const greet of greetings){
    if(greet == ' '){ //Removing the space
            continue;
    }
    console.log(`Each char is ${greet}`);
}

// Map in javascript 
/// A type of Array but is unique 
const map = new Map()
map.set('IN',"India");
map.set('USA',"United states of America");
map.set('Fr',"France");
map.set('IN',"India");
console.log(map);
// Map using for of loop 
for (const[key,value] of map)
{
    console.log(key ,':-',value );
}
// use object iteration
const myObject = {
    game1 : 'NFs',
    game2 : 'Spiderman'
}

/*for(const [key,value] of myObject)
{
    console.log(key,':-',value); // myObj is not iterable 
}*/

// foor in loop ->> for iterabale object in javascript

for (const key in myObject)
{
    console.log(key);
    console.log(myObject[key]);
}

// create another object 

const myObject_0 = {
    js : 'JavaScript',
    cpp : 'c++',
    Rb :'Ruby',
    swift:"Swift by apple"
        }
        
for(const key in myObject_0)
{
    console.log(key);
}

for (const key in myObject_0)
{
    console.log(myObject_0[key]);
}

for( const key in myObject_0)
{
    console.log(`${key} shoted is for ${myObject_0[key]}`);
}

// using array using for in loop 
const programming = ["js","Ruby","Python","java","cpp"];
for (const key in programming)
{
    console.log(key);
    // print position of array 
}

for(const key in programming)
{
    console.log(programming[key]);
}
// map using for in loop 

const mapping = new Map();

mapping.set('IN',"India");
mapping.set('USA',"United states of America");
mapping.set('Fr',"France");
mapping.set('IN',"India");

for(const key in mapping)  // output blank
{
    console.log(key);
} 

// for each loops ==> using Array

const coding = ["js","ruby","java","python","cpp"];
/*coding.forEach(function(val)
{
        console.log(val);
}
)*/
// using Arrow function in for each loops 
   /* coding.forEach( (item)=>
            {
                console.log(item);
            }
    )*/

    function printMe(item,index,arr){
        console.log(item);
        console.log(index);
        console.log(arr);
    }

    coding.forEach(printMe);

    const my_cod_scripr = [
        {
            languageName: "Javascript",
            languageFileName : "js"
        },

        {
            languageName: "Javascript",
            languageFileName : "java"
        },

        {
            languageName: "Phython",
            languageFileName : "Py"
        }

    ]

    // this forEach loops is not return any value 
    my_cod_scripr.forEach((item)=>
    {
        console.log(item.languageFileName);
    }
    )
const coding_oop = ["js","ruby","java","phython","cpp"];

const vales = coding_oop.forEach((item,index,Arr)=>{
       // console.log(item,index,arr);
        return item;
})
console.log(vales);

// use filter 

const myNums = [1,2,3,5,6,7,8,9,10];
// const newNums = myNums.filter((num)=>num>4)
// console.log(newNums);

// const newfilter = myNums.filter((num)=>
//     {
//         return num>4;   
//     }
// )

// console.log(newfilter);

// using for each loops 
const newArr = [];
myNums.forEach((num)=>
{
    if(num>4)
    {
        newArr.push(num);
    }
}
)                   /*  Same work  */

console.log(newArr);



