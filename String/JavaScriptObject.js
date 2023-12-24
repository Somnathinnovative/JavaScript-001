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
console.log(JsUser["full name"]);
// change Object
JsUser.email="hitesh@chatgpt.com"
console.log(JsUser.email);
// Freez Object 
//Object.freeze(JsUser);
console.log(JsUser);
JsUser.email = "hiesh@mimnisoft"
console.log(JsUser);
//add function 
JsUser.greeting = function() {
    console.log("Hello Js User");
}
//console.log(JsUser.greeting());
console.log(JsUser.greeting);
JsUser.greetingTwo = function(){
    console.log(`Hello Js user ${this.name}`);
}
console.log(JsUser.greetingTwo());

// Object With Constructor 
const tinderUser = new Object(); // declaration 
tinderUser.id = "145ghf";
tinderUser.name = "Jimmy";
tinderUser.isLoggedIn = true;
console.log(tinderUser);

const tinder = {};
tinder.id = "123abc";
tinder.name = "Sammy";
tinder.isLoggedIn = false;

console.log(tinder);

// Nesting Object 

const regularUser = {
    email: " some@gmail.com ",
    fullname : {
        userfullname : {
            fristname : "hitesh",
            lastname : "choudhary"
        }
    }
}

console.log(regularUser);
console.log(regularUser.fullname.userfullname.fristname);

// Merge Object 
const Obj1 = { 1:"a" , 2:"b" }
const obj2 = {3:"a" , 4:"b" }
const obj3 = {Obj1,obj2};
console.log(obj3);

// Merge object Assign

const obj4 = { 1:"a", 2:"b"};
const obj5 = { 3: "a" , 4:"b"};
const obj6 = { 5:"a" , 6:"b"};
//const obj7 = Object.assign({}, obj4,Obj5,obj6); // Copy the values of all of the enumerable own properties from one or more source objects to a target object. Returns the target object.
//console.log(obj7);

const obj8 = {...obj4, ...obj5,...obj6};
console.log(obj8);

// more object declaration 

const users =[
    {
        id:1,               // Represent 0 
        email:"h@gmail.com"
    },
    {
            id:1,    // Reperesent 1 
            email:"hitesh@gmail.com"
    }
]

console.log(users[1].email);
console.log(users[0].email);
// Return Array for every function
console.log(tinder);
console.log(Object.keys(tinder)); // Return Array
console.log(Object.values(tinder)); 
console.log(Object.entries(tinder));
console.log(tinder.hasOwnProperty('isLoggedIn'));
// please print google console 
const course = {
    coursename : "Js in Hindi",
    price : "999",
    courseInstructor:"hitesh"
}
const{courseInstructor} = course
console.log(courseInstructor);
const {courseInstructor:instructor} = course
console.log(instructor);





