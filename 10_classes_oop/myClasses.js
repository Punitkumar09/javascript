// after ES6

class User {
 
    constructor(username, email, password){
        this.username = username
        this.email = email
        this.password = password
    }

    encryptPassword(){
        return `${this.password}abc`
    }

    changeUsername(){
        return `${this.username.toUpperCase()}`
    }

}

const user = new User("Rahul", "rahul@gmail.com", "123")

console.log(user.encryptPassword());
console.log(user.changeUsername());


//behind the scene

function User1(username, email, password){
    this.username = username
    this.email = email
    this.password = password
}

User.prototype.encryptPassword = function(){
     return `${this.password}abc`
}

User.prototype.changeUsername = function(){
   return `${this.username.toUpperCase()}`
}

const user1 = new User("Ram", "ram@gmail.com", "123")

console.log(user1.encryptPassword());
console.log(user1.changeUsername());