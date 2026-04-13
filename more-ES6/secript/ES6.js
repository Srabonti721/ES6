const person = {
    name: "juthe",
    01: "1000",
    age: 27,
    details: {
        isMarried: true,
        job: "no",
        status: "is not found"
    },
    friends: ["rohan", "tomal", "torni"],
    father: {
        name: "zunayed"
    }
}
delete (person[01])
console.log(person);


// used dot notation
console.log(person.details.job);
// used bracket[] notation. bracket[] notation kano uesd korbo? answer: Obj ar maja key hisaja 123, $, "name-12" etc emon kono bisas key  thakla oi property gulu access korer jono amra bracket[] notation used korbo.
console.log(person["details"]["status"]);
console.log(person[01]);

// optional chaining. obj a kono name define na kora thakla oi propertir samne ?dela website a error thake bacha jai satha console a undefine dekhai. 
console.log(person.mather?.name);
console.log(person.details.mother?.name);


