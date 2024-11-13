// singleton
// agar literals use krenge to object singleton nahi banega
// construction se object bnega to  hmesha singleton hi bnega

//object.create ---> constructor method ke through

//Object Literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Punit",
    "full name": "Punit kumar",
    [mySym] : "mykey1", //use for symbol
    age: 20,
    location: "jaipur",
    email: "punit@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday" , "Saturday"]
}
console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser["full name"]);
console.log(JsUser[mySym]);

JsUser.email = "punit@gmail.com"
//Object.freeze(JsUser)
JsUser.email = "punit@chatgpt.com"

//console.log(JsUser);

JsUser.greeting = function(){
    console.log("hello js User");
    
}
JsUser.greetingTwo = function(){
    console.log(`hello js User, ${this.name}`);
    
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());







