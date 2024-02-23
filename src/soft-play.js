// do not change these lines
let adults = 0
let children = 0

// TODO: Write your functions in the below section. Your functions should update
// the adults and children variables defined above.
// Start with the occupancy function.
function occupancy() {
  const currentOccupancy = {}
  currentOccupancy.adults = adults
  currentOccupancy.children = children
  return currentOccupancy
}
// console.log(occupancy())

function enter(numAdults, numChildren) {
  if (numAdults >= numChildren) {
    adults += numAdults
    children += numChildren
    return true
  } else {
    return false
  }
}
// console.log(enter(3, 2))
// console.log(adults)
// console.log(children)
// console.log(occupancy())

function leave(numAdults, numChildren) {
  const adultsIn = adults - numAdults
  const childrenIn = children - numChildren
  if (numAdults < numChildren || adultsIn < childrenIn) {
    return false
  } else {
    adults -= numAdults
    children -= numChildren
    return true
  }
}
// console.log(leave(1, 11))
// console.log(adults)
// console.log(children)
// console.log(occupancy())

// TODO: Change the undefined values below to the name of your functions
module.exports = {
  enter: enter,
  leave: leave,
  occupancy: occupancy
}
