const handleLogin =() =>{
    const name = document.getElementById("name");
    const email = document.getElementById("email")
    const inputName = name.value;
    const inputEmail = email.value;
    setToLocalStorage(inputName, inputEmail)
    displayLogin(inputName, inputEmail);
    name.value = "";
    email.value = "";
}

const displayLogin = (yourName, yourEmail) =>{
// console.log(yourName,yourEmail );
const olContainer = document.getElementById("ol-container");
const li = document.createElement("li");
li.innerText=`${yourName} : ${yourEmail}`
olContainer.append(li)
}

const setToLocalStorage = (youserName, youserEmail) =>{
    console.log(youserName, youserEmail);
    const youser = {name:youserName, email:youserEmail}
    localStorage.setItem("youser", JSON.stringify(youser))
    
}