let MyDates = new Date();
console.log(MyDates.toString()); // returns a string representation of a date. The format of the string depends on the locale.
console.log(MyDates.toDateString()); // Returns a date as a string value.
console.log(MyDates.toLocaleDateString())
// A locale string, array of locale strings, Intl.Locale object, or array of Intl.Locale objects that contain one or more language or locale tags. If you include more than one locale string, list them in descending order of priority so that the first entry is the preferred locale. If you omit this parameter, the default locale of the JavaScript runtime is used.
//Converts a date to a string by using the current or specified locale.
console.log(typeof MyDates);
let myCreateDates = new Date(2023,0,23);
console.log(myCreateDates);
console.log(myCreateDates.toDateString());
let myCreateDate = new Date(2023,0,23,5,3);
console.log(myCreateDate);
console.log(myCreateDate.toLocaleDateString());
let myCreate_Date= new Date("2023-01-14");
console.log(myCreate_Date);
console.log(myCreate_Date.toLocaleString());
console.log(myCreate_Date.toLocaleDateString());// only print date 
console.log(myCreateDate.getDate());
console.log(myCreateDate.getTime());
const myTimeStamp = Date.now(); // returns the number of milliseconds
// console.log(myTimeStamp);
// function one(){
// const mill = Date.now() - myTimeStamp;
// console.log(mill); 
// }
// one();
// console.log(Date.now());

console.log(Math.floor(Date.now()/1000));
let newDates = new Date();
console.log(newDates);
console.log(newDates.getMonth()+1);
console.log(newDates.getDay());













