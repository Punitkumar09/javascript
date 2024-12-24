class User {

    constructor(usernamne){
        this.usernamne = usernamne
    }

    logMe(){
        console.log(`USERNAME is ${this.usernamne}`);
    
    }
}

class Teacher extends User{
    constructor(usernamne, email, password){
        super(usernamne)
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.usernamne}`);
        
    }
}

const chai = new Teacher("chai", "chai@teacher.com", "123")

chai.logMe()

const masalaChai = new User("masalaChai")
masalaChai.logMe()

console.log(chai instanceof User);
