const handlePost = () =>{
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => response.json())
    .then(data => displayPost(data))
}

const displayPost = (posts) =>{
    const postContainer = document.getElementById("post-container")
    for(const post of posts){
        const div = document.createElement("div")
        div.classList.add("card")
        div.innerHTML = `
        <h2>${post.title}</h2>
            <p>${post.body}</p>
            <button class="btn ">Description</button>
        `
        postContainer.appendChild(div)
    }
    
}

handlePost()