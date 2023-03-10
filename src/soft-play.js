// do not change these lines
let adults = 0
let children = 0

// TODO: Write your functions in the below section. 
//our functions should update
// the adults and children variables defined above.
// Start with the occupancy function.

//first we need a function to register who enters
function enter(numAdults, numChildren) {
  adults += numAdults
  children += numChildren
  console.log("Number of Adults", adults)
  console.log("Number of kids", children)
  if (numAdults < numChildren) {
    return false
  }
  else {
    return true
  }

}
console.log(enter(4,2))

// TODO: Change the undefined values below to the name of your functions
// module.exports = {
//   enter: undefined,
//   leave: undefined,
//   occupancy: undefined
// }
