const handleAddToCard = () =>{
     const productName = document.getElementById("ProductName");
     const productQuantity = document.getElementById("ProductQuantity");
     const name = productName.value;
     const quantity = productQuantity.value;

handleLocalStorage(name, quantity)
displayAddToCardData(name, quantity);

productName.value = " ";
productQuantity.value = " ";
}

const displayAddToCardData = (productName, quantity) =>{
    const cardDataContainer = document.getElementById("card-data-container");
    const li = document.createElement("li");
    li.innerText =`${productName} = ${quantity}`
    cardDataContainer.append(li)
}
const handleLocalStorage = (productName, Quantity) =>{
    console.log(productName, Quantity); 
    const product = {name: Quantity};
    localStorage.setItem("card",JSON.stringify(product))
}