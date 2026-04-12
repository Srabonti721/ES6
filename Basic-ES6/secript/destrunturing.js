const person = {
    name: "lubaba",
    age : "27",
    friends: ["sonjoi", "suchorita", "soniya", "sorola"],
    status: "not found",
    isMarried : true

}
// const name = person.name;
// const age = person.age;
// const friend = person.friends;
// const status = person.status;
// const married = person.isMarried
// console.log(isMarried);
const {name, age,friends, status,isMarried } = person; 
console.log(name);


const friend = ["asgor", "solimoden", "kolimoden" ,{name: "natasa"}, [1, 4, 2]] ;
const [bhondu, soli, koli, obj, array] = friend;
console.log(obj);

