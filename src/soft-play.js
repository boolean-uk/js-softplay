// do not change these lines
let adults = 0
let children = 0

// TODO: Write your functions in the below section. Your functions should update
// the adults and children variables defined above.
// Start with the occupancy function.

// function occupancy(a, c){
//   const headCount = {adults: a, children: c}

//   return headCount
// }

// function occupancy(a, c){
//   const headCount = {
//   adults: a,
//   children: c}
//   return headCount
// }

function occupancy(a, c) {
  return { adults: a, children: c }
}

console.log(occupancy(adults, children))
console.log(adults)
console.log(children)

// inside an object number of children and adults change
// creates an object headCount

function enter(numAdults, numChildren) {
  if (numChildren > numAdults) {
    return 'false'
  } else {
    adults += numAdults
    children += numChildren
    console.log('This is the total number of adults', adults)
    console.log('This is the number of children', children)
    return 'true'
  }
}
console.log(enter(10, 7))
console.log(adults, children)
// Check the number of children and the number of adults
// If the number of childern are larger than the number of adults, return(false)

// TODO: Change the undefined values below to the name of your functions
module.exports = {
  enter: undefined,
  leave: undefined,
  occupancy: undefined
}
