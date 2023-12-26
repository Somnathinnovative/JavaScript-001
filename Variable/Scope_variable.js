//mainly Three variable are here in javascript 
let a=10;
var b = 20;
const c = 30;
// Maintanance scope let , const 
function one(){
    const username = " hitesh ";
    function two(){
        const website = "youtube";
        console.log(username);
    }
    //console.log(website)// it not access that 
    two();
}
 one();
 // this Keyword-->> Point currant  object 
 const user = {
    username : "hitesh",
    Price : 999,
    welcomeMessage : function()
    {
        console.log(`${this.Price}, welcome to website`);
        console.log(`${this.username}, welcome to website `);
       console.log(this);
    }
 }
 user.welcomeMessage();
console.log(this);// Return empty object
// in this browser {this} return --> window Object 

function chai()
{
    console.log(this);

}
chai();

function chai2() {
    let username2 = "hitesh"
    console.log(this.username2); // Refer current object ;
}

chai2();
