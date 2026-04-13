const numbers = [1, 2,3,4,5,6,7,8,9];
const newNumber = [];
for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index];
    const sum = element + 1;
    newNumber.push(sum)
      
}
// console.log(newNumber);

const newNumberArray = numbers.map(value => value + 1);
console.log(newNumberArray);

const nums = [ 1, 2, 3, 4, 5,6,7,8];
//  const newNums = nums.map(element=>{
//     return element * element
//  })
//  console.log(newNums);
 
const newNums = nums.map(element => {
    const total = element + 5;
     return total
})
console.log(newNums);


const friends = ["sojol", "gill", "shubman", "rohit", "sunaina"];
for(let i = 0 ; i<friends.length; i++){
// console.log(friends[i]);
}
 const newFriends = friends.map((element, index )=>{
    console.log(index, element);
    // return element;
 })

 
