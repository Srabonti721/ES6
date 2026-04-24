const name = "turmuj";
// localStorage.setItem("fruit",name)

const handleLocalStorage = () =>{
    const person = {
        name:"suchorita",
        age:35,
        status:"not found",
        isMarried : true
    }
   const convertedToString = JSON.stringify(person)
   const convertedToObject = JSON.parse(convertedToString)
//    console.log(typeof convertedToString, typeof convertedToObject);  
localStorage.setItem("suchorita",convertedToString)  
}

const getData = localStorage.getItem("suchorita");
const getDataParse = JSON.parse(getData);
console.log(getDataParse.age);

console.log(getData);

// const handleStorage = () =>{
//     // console.log("click");
    
//     const phone ={
//         name:"sumsung",
//         price:36000,
//         brand:"sum",
//         color: "blue"
//     }
// const converted = JSON.stringify(phone);
//     localStorage.setItem("sumsung",converted)
//     console.log(converted);
    
// }
// const get = localStorage.getItem("sumsung");
// const converted = JSON.parse(get)
// console.log(converted.name);
