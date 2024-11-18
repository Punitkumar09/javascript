//if

// const isUserLoggedIn = true
// const temperature = 40
// if(temperature < 50){  // conditon true hogi to ander ka code execute hoga agr true nahi hai to nahi hoga ander ka code execote
// //scope
// console.log("less than 50")

// }else
// console.log("greater than 50")
// <, > , <=, >=, ==, !=, ===, !==

// const score = 200
// if (score > 100) {
//     const power = "fly"
//     console.log(`user power : ${power}`);
// }
// console.log(`user power : ${power}`);

// shorthand notation

// const balance = 1000;
// // if(balance > 500) console.log("test");  //implicit scope

// if(balance < 500){
//     console.log("less than 500");
    
// } else if(balance < 750){
//     console.log("less than 750");

// } else if(balance < 900){
//     console.log("less than 900");

// } else {
//     console.log("less than 1200");

// }

const userLoggedIn = true
const debitCard = true
const loggedInFromGoggle = false
const loggedInFromEmail = true

if(userLoggedIn && debitCard && 2==3){
    console.log("allow to buy course");
    
}

if(loggedInFromEmail || loggedInFromGoggle){
    console.log("user logged in");
    
}

