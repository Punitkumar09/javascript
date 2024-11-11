const name = "punit"
const repoCount = 2

//console.log(name + repoCount + "value");

console.log(`hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('Punit-hc')

console.log(gameName[3]);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newString1 = "      punit     "
console.log(newString1);

console.log(newString1.trim());

const url ="https://punit.com/punit%20kumar"

console.log(url.replace('%20', '-'));

console.log(url.includes('punit'));

console.log(url.includes('gueei'));

console.log(gameName.split('-'));





