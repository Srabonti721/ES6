const products = [
    {id : 1, name : "samsung", color : "blue", price : 32000, brand : "sam" },
    {id : 2, name : "iphone", color : "orange", price : 192000, brand : "apple" },
    {id : 3, name : "xiaomi", color : "black", price : 52000, brand : "xiaomi" },
    {id : 4, name : "iphone", color : "orange", price : 182000, brand : "apple" },
    {id : 5, name : "samsung", color : "blue", price : 32000, brand : "sam" },
]

const newProduct = products.filter(p=> p.name == "samsung");
console.log(newProduct);


// const singleProduct = products.find(p=> p.id == 3);
// console.log(singleProduct);


// products.forEach(product=>{
//     if(product.color === "orange"){
//         console.log(product);    
//     }
// }
// )

// const product = products.map(p =>{
//     if(p.brand == "apple"){
//       p.price = p.price + 100;
//     }
// return p
// })
// console.log(product);
