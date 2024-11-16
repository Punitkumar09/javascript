// Immediately Invoked Function Expressions (IIFE)

(function chai(){  //named IIFE
    console.log(`DB CONNECTED`);
    
})();

( (name) => { //Unnamed IIFE
    console.log(`DB connected ${name}`);
    
})('Punit');

( (surname) => {
    console.log(` punit ${surname}`);
    
})('Kumar')