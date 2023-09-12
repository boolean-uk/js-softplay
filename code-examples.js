// Array Methods
const shoppingList = ['kale', 'apples', 'grapes', 'eggs', 'milk', 'bread']

const logItem = (itemName) => console.log(itemName)

for(let i = 0; i < shoppingList.length; i++) {
  logItem(shoppingList[i])
}

console.log('----------')

const sayItemDetails = (val, index) => {
  const message = `The index is: ${index}`
  console.log(message)
}

shoppingList.forEach(sayItemDetails)

// The same as the line above but using an anonymous callback function
shoppingList.forEach((value, index) => {
  const message = `The index is: ${index}`
  console.log(message)
})

// .map
// We use .map when we want to manipulate all of the values in an array
// and return that new array to be used elsewhere. The original array
// is NOT affected.
// const shoppingList = ['apples', 'eggs', 'milk', 'bread']

const upperCaseList = shoppingList.map((value, index) => {
  console.log(index, value)
  return value.toUpperCase();
})
//
console.log("original shopping list", shoppingList)
console.log("upperCaseList", upperCaseList)