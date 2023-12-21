 //declaration of Array
 const myArr = [0,1,2,3,4,5];
 const myHeros = ["shaktiman", "naagraj"];
 console.log(myArr[0]);
 console.log(myArr[1]);
 console.log(myArr[2]);
 console.log(myArr[3]);
 console.log(myArr[4]);
 console.log(myArr[5]);
 const myArr2 = new Array(1,2,3,4);
 console.log(myArr2);
 // go to chrome bowser
 // visut mdn refrence 
 // Array method
 myArr2.push(6); //Appends new elements to the end of an array, and returns the new length of the array.
 myArr2.push(7);
 myArr2.push(8);
 console.log(myArr2);
 myArr2.pop(); // Removes the last element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.
 console.log(myArr2);
 myArr2.unshift(9); // Inserts new elements at the start of an array, and returns the new length of the array.
 console.log(myArr2);
 myArr2.unshift(26);
 console.log(myArr2);
 myArr2.shift() // Removes the first element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.
 console.log(myArr2);
 console.log(myArr2.includes(9)); // Determines whether an array includes a certain element, returning true or false as appropriate.
 console.log(myArr2.indexOf(3)); // The array index at which to begin the search. If fromIndex is omitted, the search starts at index 0.
 // Returns the index of the first occurrence of a value in an array, or -1 if it is not present.
 console.log(myArr2.indexOf(6)); // Expected Output : 5 
 const newArr = myArr2.join(); // convert Array to String
 console.log(newArr);
 console.log(typeof newArr);
 // slice Splice 
 console.log("A",myArr2);
 // Returns a copy of a section of an array. For both start and end, a negative index can be used to indicate an offset from the end of the array. For example, -2 refers to the second to last element of the array.
const myn1 = myArr2.slice(1,3); 
console.log(myn1);
const myn2 = myArr2.slice(-5,-1); // 6  4 3
console.log(myn2);
console.log("B", myArr2);
console.log(myArr2.splice(1,3)); //Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
console.log (myArr2);
// use some words in Array 
const marvel_heros = ["thar", " Ironman", "Spiderman"];
// use push and pop methods 






 







