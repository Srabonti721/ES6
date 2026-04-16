// fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => response.json())
//       .then(json => console.log(json))

// fetch("https://jsonplaceholder.typicode.com/todos/1")
// .then(response => response.json())
// .then(data => console.log(data))

function handleLoadData (){
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(res => res.json())
    .then(data =>console.log(data))
}

const handleUser = ()=>{
fetch('https://jsonplaceholder.typicode.com/users')
.then(res => res.json())
.then(data=>{
    console.log(data);
    displayUser(data)
})
}

const displayUser = (user) =>{
console.log(user[0]);

}