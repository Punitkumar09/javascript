// const coding = [ "js", "ruby", "java", "python", "cpp"]

// const values = coding.forEach( (item) => {
//     // console.log(item);
//     return item
    
// })
// console.log(values);

 const myNums = [1,2,3,4,5,6,7,8,9,10]
// // const newNum = myNums.filter(  (num) => num > 4 )
// const newNum = myNums.filter(  (num) => {
//    return num > 4
// })

// const newNum = []

// myNums.forEach( (num) => {
//     if (num > 4) {
//         newNum.push(num)
        
//     }
// })

// console.log(newNum);

const books = [
    {
        title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004
    },
    {
        title: 'Book Two', genre: 'Chemistry', publish: 1998, edition: 2007
    },
    {
        title: 'Book Three', genre: 'History', publish: 1982, edition: 2019
    },
    {
        title: 'Book Four', genre: 'Non-Fiction', publish: 1961, edition: 1989
    },
    {
        title: 'Book Five', genre: 'History', publish: 1987, edition: 2003
    },
    {
        title: 'Book Six', genre: 'Non-Fiction', publish: 1991, edition: 2017
    },
    {
        title: 'Book Seven', genre: 'History', publish: 1988, edition: 1998
    },
    {
        title: 'Book Eight', genre: 'Non-Fiction', publish: 1983, edition: 2005
    },
    {
        title: 'Book Nine', genre: 'Science', publish: 1985, edition: 2009
    },
    {
        title: 'Book Ten', genre: 'History', publish: 1999, edition: 2014
    },
];

let userBooks = books.filter(  (bk) => bk.genre === 'History' )

 userBooks = books.filter( (bk) => {
    return bk.publish >= 1985 && bk.genre === "History"
} )

console.log(userBooks);


