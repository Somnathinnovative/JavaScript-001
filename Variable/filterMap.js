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

const MyArrowMap = [1,2,3,4,5,6,7,8,9,10]
const assignMap = MyArrowMap.map((num)=>num+10);
console.log(assignMap);
