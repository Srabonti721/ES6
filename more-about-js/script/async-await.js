const loadData = async () =>{
try{
        console.log("this is a first console log");
    console.log("this is a second console log");

    const Promise = await fetch("https://jsonplaceholder.typicode.com/todos/1")
    const data = await Promise.json();
    console.log(data);
    
    console.log("this is a third console log");
    const result = 20 + 20;
    console.log(result);   
    
    setTimeout(()=>{
     console.log("this is set time out");
    }, 3000);
}
catch{
    console.log(error);
    
}
}

loadData();

async function dataFetch (){
    const Promise =await fetch('https://jsonplaceholder.typicode.com/todos/1')
    const data = await Promise.json();
    console.log(data);
    
}
dataFetch()
