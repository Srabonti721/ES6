function a (){
    b();
    console.log("a");   
}
function b (){
    c();
    console.log("b");   
}
console.log("hello");

 setTimeout(()=>{
    console.log("notun time add hoitase set timeOut thake");   
 }, 3000)

 setTimeout(()=>{
    console.log("set time out 2");
    
 }, 2000)
function c (){
    d()
    console.log("c");   
}
function d (){
    e()
    console.log("d");   
}
function e (){
    console.log("e");   
}
a()