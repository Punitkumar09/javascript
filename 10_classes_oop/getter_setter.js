class User{
    constructor(email, password){
        this.email = email
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }

    set email(value){
         this._email = value
    }
  
    get password(){
        // return this._password.toUpperCase()
        return `${this._password}punit`
    }

    set password(value){
        this._password = value.toUpperCase()
    }

}

const aman = new User("a@man.com", "abc")
console.log(aman.email)