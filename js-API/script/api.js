const person = {
    name:"soniya",
    age: 33,
    fridens:["nila", "mila", "torni"],
    status: "not found"
}
console.log(person);

const newPerson = JSON.stringify(person);
console.log(newPerson);

const newPerson2 = JSON.parse(newPerson);
console.log(newPerson2);
