const user = {
    username: "Punit",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function () {
        //console.log("got user details from database");
        // console.log(`username: ${this.username}`);
        console.log(this);



    }
}
console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);


const user2 = {
    username: "Punit",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function () {
        //console.log("got user details from database");
        // console.log(`username: ${this.username}`);
        console.log(this);



    }
}

function User(username, loginCount, isLoggedIn) {
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn


    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
        
    }

    return this

}

const userOne = new User("punit", 12, true)
const userTwo = new User("javascript", 11, true)
console.log(userOne.constructor);
// console.log(userTwo);


