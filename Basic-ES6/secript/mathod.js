const person = {
    name : "johura",
    age : 22,
    country : "bangladesh",
}
for(let key in person){
console.log(`key =${key} value =${person[key]}`);
}

for(let [key, value] of Object.entries(person)){
    console.log(`key :${key} value :${value}`);
    
}
// Object.freeze(person);
// Object.seal(person);
// person.name = "sunali";


// person.status = "not found";
// console.log(person);

// console.log(Object.keys(person));
// console.log(Object.values(person));
// console.log(Object.entries(person));
// console.log(person["country"]);

// for(let key in person){
//     console.log(`key = ${key}  value = ${person[key]}`);  
// }
//  for(let [key,value] of Object.entries(person)){
//     console.log(`key : ${key} value : ${value}`); 
//  }







// explane js buldin mathod 
/**
 * Object.keys() object ar key gulu ka array ar maja dei.
 * Object.values() object ar value gulu ka array ar maja dei.
 * Object.entries() object ar sompurno antiti gulu ka array ar maja dei.
 * Object.seal() mathod baboher korla object ka seal kora. notun kono data add korta dei na. kintu object ar maja data guylar man poriborton korta dei.
 * Object.freeze() object ka freeze kora dei. notun kono data add o kora na dater man o pori borton kora na.
 */


