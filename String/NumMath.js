const score =400;
const balence = new Number(100); // An object that represents a number of any kind. All JavaScript numbers are 64-bit floating-point numbers.
console.log(balence);
console.log(score);
console.log(balence.toString()); //Specifies a radix for converting numeric values to strings. This value is only used for numbers.
console.log(balence.toString().length);// starting 1 ;
console.log(balence.toFixed(2));// Number of digits after the decimal point. Must be in the range 0 - 20, inclusive.
const otherNumber = 8532.154658;
console.log(otherNumber);
console.log(otherNumber.toPrecision());
console.log(otherNumber.toPrecision(2));// actual round - off
const hundreds = 100000;
console.log(hundreds.toLocaleString('en-IN'));

// to learn more about in javascript function , please visit MDN Docs 
