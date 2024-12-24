// let myName = "Punit     "
// let myLastName = "Kumar    "

// console.log(myName.truelength);


let myHeros = ["thor", "spiderman"]

let heroPower = {

    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
      console.log(`Spidy power is ${this.spiderman}`);
      
    }
}

Object.prototype.punit = function(){
    console.log(`punit is present in all objects`);
    
}

Array.prototype.heyPunit = function(){
    console.log(`Punit says hello`);
    
}

// heroPower.punit()

// myHeros.punit()
// myHeros.heyPunit()
// heroPower.heyPunit()

//inheritance

const User = {
    name: "punit",
    email: "punit@google.com"
}

const Teacher = {
    makeVideo: true
}

const TechnicalSupport = {
        isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fulltime: true,
    __proto__: TechnicalSupport
}

Teacher.__proto__ = User

//modern syntax

Object.setPrototypeOf(TechnicalSupport, Teacher)

let anotherUsername = "Aman         "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True Length is : ${this.trim().length}`);
    
    
}

anotherUsername.trueLength()
"punit".trueLength()
"iceTea".trueLength()
