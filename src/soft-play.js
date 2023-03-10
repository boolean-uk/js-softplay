// do not change these lines
const adults = 0
const children = 0

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

// TODO: Change the undefined values below to the name of your functions
module.exports = {
  enter: undefined,
  leave: undefined,
  occupancy: undefined
}
