const promiseOne = new Promise(function(resolve, reject){
    //do and async task
    //DB calls, cryptography, network
    setTimeout(function() {
        console.log('Async task is complete');
        resolve()
        
    }, 1000)
})

//then is a direct connection to resolve

promiseOne.then(function(){
    console.log("promise consumed");
    
})

new Promise(function(resolve, reject){
    setTimeout(function(){
      console.log("Async task 2");
      resolve
      
    }, 1000)
}).then(function(){
    console.log("Async task resolved");
    
})