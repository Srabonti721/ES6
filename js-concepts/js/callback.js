function gotok (patri, name) {
  patri(name);
    
}
const patri = function(name){
    console.log("patri paise", name);
    
}
gotok(patri, "bason")


function food (foodList, name){
   foodList(name)
    
}
const foodList = function (name){
    console.log("onek rokomer food", name);    
}

const foodList2 = function(name){
    console.log("horak rokom khaber", name);
}
food(foodList, "khichuri");
food(foodList2, "rost")