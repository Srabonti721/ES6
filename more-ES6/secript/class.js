class product{
    constructor(name, price, brand, malik){
        this.name = name;
        this.price = price;
        this.brand = brand;
        this.malik = malik;
    }
     details(){
        console.log(` ame  ${this.name} product er details `);
        
     }
}
const iphone = new product("iphone",1200, "apple", "jobs")
// console.log(iphone);
// iphone.details();

const xiaomi = new product("xiaomi", 100, "xiaomi", "jani na");
// console.log(xiaomi);
// xiaomi.details();


class persons{
    constructor(name, age, height, weight, gender){
           this.name = name;
           this.age = age;
           this.height = height;
           this.weight = weight;
           this.gender = gender;
    }
    details(){
        console.log(`ame ${this.name} ar details`);
        
    }
}
const person = new persons("alisa", 25, 6.77, "60kg", "female");
console.log(person);
person.details();

const p = new persons("sojib", 30, 6.99, "72kg", "male");
console.log(p);
p.details()
