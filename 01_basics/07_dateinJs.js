//Date

let myDate = new Date()

// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleDateString());

// console.log(typeof myDate);

//let myCreatedDate = new Date(2024, 0 , 13)

//let myCreatedDate = new Date(2024, 0 , 13 , 5 , 3 )

let myCreatedDate = new Date("2024-01-13")
//console.log(myCreatedDate.toLocaleDateString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
//  console.log(myCreatedDate.getTime());
 //console.log(Math.floor(Date.now()/1000));

 let newDate = new Date()

 console.log(newDate);
 console.log(newDate.getMonth()  + 1 );
 console.log(newDate.getDay());

 //${newDate.getDay()} and the time

 newDate.toLocaleDateString('default' , {
    weekday: "long",
    timeZone: ''
 })
 
 
 
 
 



