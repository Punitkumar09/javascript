// console.log("p");
// console.log("u");
// console.log("n");
// console.log("i");
// console.log("t");

function sayMyName(){    //fuction defination
    console.log("p");
    console.log("u");
    console.log("n");
    console.log("i");
    console.log("t");
}

//sayMyName()

// function addTwoNumbers(number1, number2){     //parameters
//     console.log(number1 + number2);
    

// }

function addTwoNumbers(number1, number2){     //parameters
    // let result = number1 = number2
    // return result
    
    return number1 + number2
    

}
const result = addTwoNumbers(3 , 5)    //arguments

// console.log("Result:", result);

function loginUserMessage(username = "sam"){
    if(!username){
        console.log("please enter a username");
        return
    }
    return `${username} just logged in`

}
//console.log(loginUserMessage("punit"))
// console.log(loginUserMessage("punit"))

function calculateCartPrice(...num1){
    return num1


}
//console.log(calculateCartPrice(200, 300, 400))

const user = {
    username : "punit",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
    
}

//handleObject(user)
handleObject({
    username: "punit",
    price: 399
})

const myNewArray = [200, 300, 400]

function returnSceondValue(getArray){
    return getArray[1]
}
//console.log(returnSceondValue(myNewArray));
console.log(returnSceondValue([200, 300, 400]));







