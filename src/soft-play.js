// do not change these lines
let adults = 0
let children = 0

// TODO: Write your functions in the below section. Your functions should update
// the adults and children variables defined above.
// Start with the occupancy function.

// Goal: program that counts adults and children in soft play centre

// 1 - make a function that logs adults and children ENTERING
  // function enter(numAdults, numChildren)


// 2 - make a function that logs adults and children LEAVING
  // function leave(numAdults, numChildren)


// 3 - make a function that returns OBJECT with 2 keys and numbers
  // of adults and children INSIDE
   // function occupancy()

function occupancy(numAdults, numChildren) {
  // no of adults = current adult count + any changes
  adults = adults + numAdults
  // no of children = current children count + any changes
  children = children + numChildren
  // output an object with updated no of adults and children
  return {adults, children}
}
console.log('what is the current occupancy? -', occupancy(10,20))









// TODO: Change the undefined values below to the name of your functions
module.exports = {
  enter: undefined,
  leave: undefined,
  occupancy: undefined
}
