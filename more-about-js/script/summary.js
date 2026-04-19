// function showMassage (){
// setTimeout(function (){
// console.log("hello ");
// }, 5000)
// }
// showMassage();

// function delayedGreeting (name, delay){
// setTimeout(function(){
//     console.log("hello " + name + "!");

// }, delay)
// }
// delayedGreeting("srabonti", 3000)

const delayedGreeting = (name, delay) => {
    setTimeout(() => {
        console.log("hello " + name + "!");
    }, delay)
}
// delayedGreeting("srabonti", 2000)


const tellJock = () => {
    const clockId = setInterval(() => {
            console.log("you are so so funny");
 }, 2000)
 setTimeout(()=>{
    clearInterval(clockId)
       console.log("Joke stopped!"); 
 }, 10000)
}
// tellJock()


const fetchData = async() =>{
    const promise = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    const data = await promise.json();
    console.log(data);
    
}
fetchData()

