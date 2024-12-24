const descripter = Object.getOwnPropertyDescriptor(Math, "PI")
console.log(descripter);


// console.log(Math.PI);
// Math.PI = 5
// console.log(Math.PI);


const mynewObj ={
    name: 'ginger chai',
    price: 250,
    isAvailable: true,
    orderChai: function(){
     console.log("chai nahi bani");
     
    }
}
 
console.log(Object.getOwnPropertyDescriptor(mynewObj, "name"));

Object.defineProperty(mynewObj, 'name', {
    // writable: false,
    enumerable: true
})

console.log(Object.getOwnPropertyDescriptor(mynewObj, "name"));

// for (let [key, value]  of Object.entries(mynewObj)) {
//     // if(typeof value !== 'function'){
//         console.log(`${key}, ${value}`);
//     // }
    
    
    
// }

for (let [key, value]  of Object.entries(mynewObj)) {
    if(typeof value !== 'function'){
        console.log(`${key}, ${value}`);
    }
    
    
    
}