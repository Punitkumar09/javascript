const User = {
     _email: "ram@gmail.com",
     _password: "abc",

     get email(){
        return this._email.toUpperCase()
     },

     set email(value){
        this._email = value
     }
}

const rahul = Object.create(User)
console.log(rahul.email);
