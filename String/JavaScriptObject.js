// JAVASCRIPT OBJECT
// By Using liter
const mySym = Symbol("Key1");
const JsUser = {
    name: "Hitesh",
   [mySym]: "mykey1",
    "full name" : "Hitesh choudhary",
     age:18,
     location:"jaipur",
     email:"hitesh@google.com",
     isLoggedIn: false,
     LastLogginDays:["Monday","Saturday"]
}
console.log(JsUser.email);
console.log(JsUser["email"]);
console.log