const tinderUser = new Object()  // singleton object define through constructor

tinderUser.id = "3232abc"
tinderUser.name = "Punit"
tinderUser.isLoggedIn = false

//console.log(tinderUser)

const regularUser = { 
    email: "punit@gmail.com",
    fullname : {
        userFullName : {
            firstname : "punit",
            lastname : "kumar"
        }
    }
}

// console.log(regularUser.fullname.userFullName.firstname);

const obj1 = {1: "a" , 2: "b"}
const obj2 = {3: "a" , 4: "b"}
const obj4 = {5: "a" , 6: "b"}
const obj5 = {7: "a" , 8: "b"}


// const obj3 = {obj1 , obj2}
//const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj3 = {...obj1, ...obj2}
// console.log(obj3);

const users = [
    {
        id: 1,
        email: "punit@gmail.com"
    },
    {
        id: 2,
        email: "kumar@gmail.com"
    }
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLogged'));


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor

const {courseInstructor: instructor} = course

console.log(instructor);

// const navbar = ({company}) => {
                                           //de - structor
// }
// navbar(company = "punit")

// {
//     "name" : "punit",
//     "coursename": "js in hindi",
//     "price": "free"

// }


[
    {},
    {},
    {}
]


