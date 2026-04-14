const person = {
    name: "saima",
    age: 17,
    father: {
        name: "sojol",
        status: "not found"
    },
    2: "100"
}
// Object.freeze(person);
// Object.seal(person);
// person.age = 20;
// console.log(person);
// console.log(person.name);
// console.log(person[2]);
// console.log(Object.keys(person));
// console.log(Object.values(person));
// console.log(Object.entries(person));
// --------------- optional chaining ---------------
// console.log(person.mather?.name);


const numbers = [2, 3, 4, 5, 6, 7, 8];
// const number = numbers.map(num =>{
//     return num * num
// })
// console.log(number);

const products = [
    { id: 1, name: "samsung", color: "blue", price: 32000, brand: "sam" },
    { id: 2, name: "iphone", color: "orange", price: 192000, brand: "apple" },
    { id: 3, name: "xiaomi", color: "black", price: 52000, brand: "xiaomi" },
    { id: 4, name: "iphone", color: "orange", price: 182000, brand: "apple" },
    { id: 5, name: "samsung", color: "blue", price: 32000, brand: "sam" },
]
const product = products.filter(num => {
    if (num.color === "orange") {
        // console.log(num);
    }
})

// products.forEach(product=>console.log(product)
// );

const singleProduct = products.find(product=>{
    if(product.name === "iphone"){
        // console.log(product);       
    }
})


class person2{
    // kono variable ra pribate korta chila # deta hoi
constructor(name, age, gender){
this.name = name;
this.age = age;
this.gender = gender;
}
move(){
    console.log(`${this.name} all time depration`);  
}
}
 const kiranKumar = new person2("kumar", 32, "male");
//  console.log(kiranKumar);
// kiranKumar.move();
 
class cooked{
    constructor(name, test){
       this.name = name;
       this.test = test;
    }
    people(){
        console.log(`${this.name} is so delicious`);     
    }
}

class vegetable extends cooked{
constructor(name, test, rating, status){
super(name, test);
this.rating = rating;
this.status = status;
}
fav(){
    console.log(`${this.name} so delicious this cooked rating ${this.rating}`);   
}
}

const cook = new vegetable("briyani", "its so so so testy", "5 star", "super duper");
console.log(cook);
cook.fav()
