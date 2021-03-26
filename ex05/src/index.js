// Only change code below this line
let shoppingList = new Map([
  ["Banana", 3],
  ["Pineapple", 5],
  ["Pear", 2],
  ["Carrot", 10],
  ["Apple", 1.5],
]);

const arrKey = [];
const arrValue = [];
for (let key of shoppingList.keys()) {
  arrKey.push(key);
}

arrKey.forEach((key) => console.log("groceries:", key));

for (let value of shoppingList.values()) {
  arrValue.push(value);
}

arrValue.forEach((value) => console.log("amount:", value));

for (let entry of shoppingList.entries()) {
  console.log(entry);
}

// Only change code above this line

module.exports = { shoppingList, arrKey, arrValue };
