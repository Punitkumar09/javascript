// var c =300  global scope
let a =300  

if(true){    //block scope
    let a = 10
    const b =20
    //var c =30
    //console.log("INNER:" , a)
}


// console.log(a);
//console.log(b);
// console.log(c);

function one(){
    const username = "punit"

    function two(){
        const website = "youtube"
        console.log(username);
        
    }
    //console.log(website);
    two()
}
// one()

if(true){
    const username ="punit"
    if(username === "punit"){
        const website = " youtube"
        //console.log(username + website);
        
    }
    //console.log(website);
    
}
//console.log(username);

//*****************************interesting************************ */

function addone(num){
    return num + 1
}
console.log(addone(5))


addtwo(5)
const addtwo = function(num){
    return num + 2
}



