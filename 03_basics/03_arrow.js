const user = {
    username : "punit",
    price : 99,

    welcomeMessage : function(){

        console.log(`${this.username}, Welcome to Website`)
        console.log(this);
        

    }
}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

//console.log(this)

// function chai(){
//     let username = "punit"
//     console.log(this.username);
    
// }
// chai();

// const chai = function(){
//     let username = "punit"
//    console.log(this.username);

// }
// chai()


const chai = () => {               //arrow functions
    let username = "punit"
   console.log(this.username);

}
// chai()

//  () => {} arrow functions

// const addtwo = (num1, num2) =>{  // explicitly return 
//     return num1 + num2 
// }

// const addtwo = (num1, num2) =>  num1 + num2  //implicit return 

// const addtwo = (num1, num2) =>  (num1 + num2) // implicitly return

const addtwo = (num1, num2) =>  ({username: "punit"})
    
console.log(addtwo(3, 4));

// const myArray = [2,4,5,5,6]

// myArray.forEach()