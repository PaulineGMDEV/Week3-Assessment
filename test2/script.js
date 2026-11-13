 let shoppingList=["Bread","Milk","Sugar","Rice"]
console.log(shoppingList);

console.log(shoppingList[0]);

console.log(shoppingList[shoppingList.length-1]);

shoppingList.push("Cooking Oil");
console.log(shoppingList);

shoppingList.shift();
console.log(shoppingList);

shoppingList[1]=("Tea leaves");
console.log(shoppingList);

console.log("Total items:",shoppingList.length);
