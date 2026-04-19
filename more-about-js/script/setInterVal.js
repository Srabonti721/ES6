setTimeout(()=>{
console.log("hello");
}, 3000)

let count = 0;
 const clockID = setInterval(()=>{
    count+=1
    if(count<=5){
        console.log(count);      
    }
// console.log(count);
// clearInterval(clockID)



}, 2000)
// console.log(clockID);
