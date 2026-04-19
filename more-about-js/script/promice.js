const loadData = () => {
    fetch('https://jsonplaceholder.typicode.com/todos')
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(error => console.log(error)
        )
}
// loadData()

const fetchData = () =>{
    return new Promise((resolve, rejects) =>{
        const status = true;
        if(status){
            resolve({name:"Shubman Gill"})
        }
        else{
            rejects("server error")
        }
    })
}
// fetchData()
// .then(res => console.log(res))
// .catch(error => console.log(error))


const jsonPromiseNew = () =>{
    return new Promise ((resolve, reject) =>{
        const status = true;
        if(status){
                const mogData = {
                    json:()=>Promise.resolve({name:"fulbanu", age:22})
                }
                resolve(mogData)
        }
        else{
            reject("server error")
        }
    })
}

// jsonPromiseNew()
// .then(res =>res.json())
// .then(data =>console.log(data))
// .catch(err => console.log(err))



const urls = [
    'https://jsonplaceholder.typicode.com/todos/1',
    'https://jsonplaceholder.typicode.com/users/1',
    'https://jsonplaceholder.typicode.com/photos/1',
    'https://jsonplaceholder.typicode.com/posts/1',
    'https://jsonplaceholder.typicode.com/comments/1',
    'https://jsonplaceholder.typicode.com/albums/1'
]

Promise.all(urls.map(url=>{
    return fetch(url)
    .then(res=>res.json())
    .then(data=>data)
}))

.then(res =>res)
.then(data=>console.log(data)
)