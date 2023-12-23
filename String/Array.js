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
marvel_heros.push("de_heros");
console.log(marvel_heros);
console.log(marvel_heros.push("lokenath"));
console.log(marvel_heros);
console.log(marvel_heros[3]);
console.log(marvel_heros[3][1]);
const Multi = [
    //     0     1   2       3          for accessing element
 /*0*/  ["Harry",12,"Male","B.com"], // [0][0]   [0][1]   [0][2]
 /*1*/  ["Sunny",19,"Male","BCA"],   //  [1][0]    [1][1]     [1][2]
 /*2*/  ["Search",18,"Female","BCA"],
 /*3*/  ["Tom",17,"MAle","B.A"]
]
console.log(Multi[1][2]);
const addition = marvel_heros.concat("bhootnath"); // Combines two or more arrays. This method returns a new array without modifying any existing arrays.
console.log(marvel_heros);
console.log(addition);
// Spread Operator 
const all_new_heros= [...marvel_heros,...myArr];
console.log(all_new_heros);

const another_array = [1,2,3,[4,5,6],7,[6,7],[4,5]];
const real_another_array = another_array.flat();
console.log(real_another_array);
const Arr2 = [0,1,[2,[3,[4,5]]]];
console.log(Arr2.flat());
console.log(Arr2.flat(Infinity));
console.log()
console.log(Array.isArray([1,2,3]));  // value return true or false 
console.log(Array.isArray('[]'));
console.log(Array.isArray(new Array(5)));
//console.log(Array.isArray(new Int16Array[15,33]));
const a = ["Sanjoy","Amanoy", " Rehmon"];
var b = Array.isArray(a);// paasing the array is result given true ;
 console.log(Array.from("Hitesh")); // Creates an array from an iterable object.
 console.log(Array.from({name:"hitesh"})); // Return Empty Object
 let score1 = 100;
 let score2 = 200;
 let score3 = 300;
 
console.log(Array.of(score1,score2,score3)); // Returns a new array from a set of elements.













 







