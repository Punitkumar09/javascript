// primitive datatypes
// 7 types : String , Number , boolean , null , undefined , Symbol , BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 3489389489934389n

console.log(bigNumber);


// Reference (Non primitive)

// Array , Objects , Functions

const heros = ["Punit" , "Anuj" , "Mudit" , "Varun"];

 let myObj = {
    name: "Punit",
    age: 22,
}

const myFunction = function(){
    console.log("hello world")
}
console.log(typeof heros);

//****************************************memory************************* */

// stack(Primitive) heap(Non-primitive)

let myYoutubeName = "Punitkingvlogs"

let anotherName = myYoutubeName
anotherName = "puntkumar"

console.log(myYoutubeName)
console.log(anotherName)

let userOne = {
    email: "user@gmail.com",
      upi:"user@ybl"
}

let userTwo = userOne

userTwo.email = "punit@gmail.com"

console.log(userOne.email)
console.log(userTwo.email)
