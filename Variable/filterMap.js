// filter always return value  
const books = [
    { title:'Book one' , genre:'Fiction' , publish:1981 , edition : 2004},
    { title:'Book two' , genre:'non-Fiction' , publish:1992 , edition : 2008},
    { title:'Book three' , genre:'History' , publish:1999 , edition : 2007},
    { title:'Book four' , genre:'non-Fiction' , publish:1989 , edition : 2010},
    { title:'Book fiv' , genre:'science' , publish:2009 , edition : 2014},
    { title:'Book six' , genre:'Fiction' , publish:1987 , edition : 2010},
    
]

let  userBooks = books.filter((bk)=>bk.genre=='History' )
console.log(userBooks);

userBooks = books.filter((bk)=>bk.edition==2010 && bk.genre=='Fiction' )
console.log(userBooks);

/****************** Map  ********************************/
// map() creates a new array from calling a function for every array element.

// map() does not execute the function for empty elements.

// map() does not change the original array.

const numbers = [4,9,16,25,36]
let operation = Math.sqrt(numbers) // it can't hlod the array 
operation = numbers.map(Math.sqrt);
console.log(operation);

const NumArray = [65,44,4,9,15]

function myFunction(num){
    return num*10;
}
const mapping = NumArray.map(myFunction);
console.log(mapping);

            ////////        OR        //////////

            const mapping_inside = NumArray.map(
                function myFunction(num){
                    return num*10;
                }
            )
console.log(mapping_inside);
// use Arrow function
// const MyArrowMap = [1,2,3,4,5,6,7,8,9,10]
// const assignMap = MyArrowMap.map((num)=>num+10);
// console.log(assignMap);

const MyNumbers = [1,2,3,4,5,6,7,8,9,10]
let newNums = MyNumbers;
 let assign =newNums.map((num)=>num*10);
//console.log(assign);

// assign = newNums.map((num)=>num+1)
// console.log(assign);

const store=assign.filter((num)=>num>40)
console.log(store);

// Reduce in javascript
//A function that accepts up to four arguments. The reduce method calls the callbackfn function one time for each element in the array.
//Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
const MyNu = [1,2,3];
// let myTotal = MyNu.reduce(function(acc,curnval){
//     console.log(`acc:${acc} and currval:${curnval}`);
//     return acc+curnval;
// },0)
// console.log(myTotal);

 const myTotal = MyNu.reduce((acc,curr)=>acc+curr,0);
console.log(myTotal)

const shoppingCart = [
    {
        itemName : "js Course",
        price : 2999
    },

    {
        itemName:"PY Course",
        price:999
    },

    {
        itemName:"mobile dev course",
        price:5999,
    },
    {
        itemName:"data science course",
        price:12999,
    }
]

const priceTropy =shoppingCart.reduce((acc,item)=> item.price,0)
console.log(priceTropy);