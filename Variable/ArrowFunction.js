 // Arrow Function 
const chai=() => {
    let username = "hitesh"
    console.log(this);
}
chai();

// introduce Arrow Function
const addTwo = (num1,num2) => {
    return num1+num2;
}
console.log(addTwo(3,4));

const addThree = (num1,num2)=>num1+num2; //  Not use return keyword 
console.log(addThree(10,5));

// when using curly brakets then must be written return keyword 
const addfour = (num1,num2) => (
            {  username:"hitesh",
               price : 999,
               Message: function ()
               {
                   return (`${this.username}, that is access `)
               }
            }
)

console.log(addfour(3,4).Message());

// Immediatately Invoked Function Expression (IIFE)
(function eveningChai(){
    console.log("DB Connected");
}) ();

(function aurcode(){
    console.log('DB CONNECTED TWO');
})();

// IIFE Arow function

(()=>
        {
            console.log(`DB Connected Two`);
        }) ();

((name)=>
        {
            console.log(`DB CONNECTED TWO ${name}`);
        }) ("hitesh");
     //design pattern
     const makewithdraw = (balance)=> ((copyBalance)=>
     {
            
     }
     )()

