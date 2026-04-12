const country = "bangladesh";
let year = 2026;
year = 2027;
// console.log(year);

const friends = ["soniya", "sona", "suma", "sanjona"];
// console.log(...friends);

const friend = ["janker", ...friends]
// console.log(...friend);

const numbers = [3, 56, 12, 789, 45,67, 34, 23,];
// console.log(Math.max(...numbers));
// console.log(Math.min(...numbers));

const person = {
    name:"gill",
    age : 27,
    country :"india",
    number : [77, 34, 32, 75]
}
// Object.freeze(person);
// Object.seal(person);
person.age = 30;
person.status = "good luking"
// console.log(person);
// console.log(Object.keys(person));
// console.log(Object.values(person));
// console.log(Object.entries(person));

const product = {
    phone:"Samsung",
    color : "skyblue", 
    price : 32000,
}
const {phone, color, price} = product;
// console.log(price);

for(let phone in product){
    console.log(`key= ${phone} | value= ${product[phone]}`); 
}
for(let [key,value] of Object.entries(product)){
console.log(`key : ${key} , value : ${value}`);
}

const calection = ["flower", "fruit", "fish", "met", "veges"];
const [first, second, third, fourt, fift] = calection;
// console.log(fift);
