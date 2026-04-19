const handleUserAsyn = async() =>{
try{
       const response = await fetch('https://jsonplaceholder.typicode.com/users')
   const data = await response.json()
   console.log(data); 
}
catch{
    console.log("hello");
    
}
}
handleUserAsyn();