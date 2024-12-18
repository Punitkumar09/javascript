const promiseOne = new Promise(function (resolve, reject) {
    //do and async task
    //DB calls, cryptography, network
    setTimeout(function () {
        console.log('Async task is complete');
        resolve()

    }, 1000)
})

//then is a direct connection to resolve

promiseOne.then(function () {
    console.log("promise consumed");

})

new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("Async task 2");
        resolve

    }, 1000)
}).then(function () {
    console.log("Async task 2 resolved");

})

const promiseThree = new Promise(function (resolve, reject) {
    setInterval(function () {
        resolve({ username: "Punit", email: "punit@gmail.com" })
    }, 1000)

})
promiseThree.then(function (user) {
    console.log(user);

})

const promiseFour = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true;
        if (!error) {
            resolve({ username: "punit", password: "123" })
        } else {
            reject('ERROR: something went wrong')
        }

    }, 1000)
})

promiseFour.then((user) => {
    console.log(user);
    return user.username;

}).then((username) => {
    console.log(username);

}).catch(function (error) {
    console.log(error);

}).finally(() => console.log("the promiseis either resolve or rejected"))

const promiseFive = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true;
        if (!error) {
            resolve({ username: "javascript", password: "123" })
        } else {
            reject('ERROR: js went wrong')
        }

    }, 1000)
})

async function consumePromiseFive() {
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);

    }

}
consumePromiseFive()


// async function getAllUsers() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json()
//         console.log(data);

//     } catch (error) {
//             console.log("E: " , error);
            
//     }
// }

// getAllUsers()

fetch('https://jsonplaceholder.typicode.com/users')
  .then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
    
})
.catch((error) => {
    console.log(error);
    
})