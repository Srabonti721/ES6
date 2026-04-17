const handleUserData = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => showUserData(data))
}

const showUserData = (users) => {
    const userContainer = document.getElementById("user");
    for (const user of users) {
        const div = document.createElement("div");
        div.innerHTML = `
 <h1>User name:${user.name}</h1>
 <p>User Email : ${user.email}</p>
 `
        userContainer.appendChild(div)
    }
}