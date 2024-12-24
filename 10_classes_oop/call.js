function SetUsername(username){
    //complex DB calls
    this.username = username
    console.log("called");
    
}

function createUser(username, email , password){

    SetUsername.call(this, username)
    this.email = email
    this.password = password
}

const user = new createUser("Ajay", "ajay@gmail.com", "12345")
console.log(user);
