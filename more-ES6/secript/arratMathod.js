const products = [
    {id : 1, name : "samsung", color : "blue", price : 32000, brand : "sam" },
    {id : 2, name : "iphone", color : "orange", price : 192000, brand : "apple" },
    {id : 3, name : "xiaomi", color : "black", price : 52000, brand : "xiaomi" },
    {id : 4, name : "iphone", color : "orange", price : 182000, brand : "apple" },
    {id : 5, name : "samsung", color : "blue", price : 32000, brand : "sam" },
]
//  ------------------ find --------------
// const product = products.find(p => p.id === 3);
// console.log(product);

// const product = products.find(p =>{
//     const findData = p.id === 3;
//     return findData;
// })
// console.log(product);

const findProduct = products.find(p=> p.color === "blue");
console.log(findProduct);


//  --------------------- filter --------------------
const newProduct = products.filter(product => product.price<100000);
// console.log(newProduct);

const filterProduct = products.filter(product => product.id != 3);
// console.log(filterProduct);

// ------------------- foreach -----------------------
// products.forEach(product=>{
//     if(product.color === "orange"){
//         console.log(product);       
//     }
// })