// do not change these lines
let adults = 0
let children = 0


// TODO: Write your functions in the below section. Your functions should update
// the adults and children variables defined above.
// Start with the occupancy function.
function occupancy() {
  const softPlay = {
  adults: 0,
  children: 0
}
softPlay.adults = adults
softPlay.children = children
return softPlay
}
console.log(occupancy())

// TODO: Change the undefined values below to the name of your functions
module.exports = {
  enter: undefined,
  leave: undefined,
  occupancy: undefined
}
