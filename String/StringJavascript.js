// Now a days using string interpolation and placeholds 

const name = "hitesh";
const repocount = 50;
console.log(name + repocount + "value");

// interpolation and placeholds 
console.log(`Hello my name is ${name} and my nepo count is ${repocount}`);
// declaration String 
const gameName = new String('hitesh');
console.log(gameName[0]);
console.log(gameName[1]);
console.log(gameName[2]);
console.log(gameName[3]);
console.log(gameName[4]);
console.log(gameName[5]);
// ------------ use console log using browser -------
/*
    goto browser and open inspect then select console option . where we write a 
    const gameName = new String('hitesh');
    console.log(gameName);
    thatAfter we are showing many function showing in console tab 
*/
/*****   String Method  ********/
 console.log(gameName.__Proto__);// it not use node Js  -> Reference mdn
 console.log(gameName.length); // return lenth of given length 
console.log(gameName.bold);// Return function 
console.log(gameName.toUpperCase());// convert lower_case to upper_case
console.log(gameName.charAt(2)); // this method using show the index Number of character a String.
console.log(gameName.indexOf('t')); // show the index number 
const newString = gameName.substring(0,4);
console.log(newString); // Returns the substring at specified to location within a string object 
const otherString = gameName.slice(3,6);// Return slice string 
console.log(otherString);// using negative value , counting last order 
const white_trim = "    somnath          "; 
console.log(white_trim);
console.log(white_trim.trim()); // remove the white spaces 
const urll = "Life is not easy, but I'm still fighting myself" ;
// use replace method 
console.log(urll.replace('but','_')); // search value
const url = "https://hitesh.com/hitesh%20choudhary";
console.log(url.replace('%20','___'));// An object that supports searching for and replacing matchs with a string
console.log(url.includes('hitesh'));// return true or false value 
console.log(url.includes('sundor'));//
const str = 'The  quick  brown  fox  jumps  over  the  lazy  dog.';

const words = str.split('  ');// this is a separator 
console.log(words[4]);
// Expected output: "fox"

const chars = str.split('');
console.log(chars[8]);
// Expected output: "k"

const strCopy = str.split();
console.log(strCopy);
// Expected output: Array ["The quick brown fox jumps over the lazy dog."]














