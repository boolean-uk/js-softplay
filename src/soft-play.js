// do not change these lines
let adults = 0
let children = 0

// TODO: Write your functions in the below section. Your functions should update
// the adults and children variables defined above.
// Start with the occupancy function.

// OCCUPANCY
function occupancy() {
  const trackerObject = {}
  trackerObject.adults = adults
  trackerObject.children = children
  return trackerObject
}
// console.log('Occupancy before:', occupancy())

// ENTRY
function enter(numAdults, numChildren) {
  if (numAdults < numChildren) {
    return false
  }
  adults += numAdults
  children += numChildren
  return true
}

// console.log(enter(10, 8))
// console.log('Adults after entering:', adults)
// console.log('Children after entering:', children)

// EXIT
function leave(numAdults, numChildren) {
  if (
    numChildren > numAdults ||
    children - numChildren > adults - numAdults ||
    numChildren > children ||
    numAdults > adults
  ) {
    return false
  }
  adults -= numAdults
  children -= numChildren
  return true
}

// console.log(leave(3, 2))
// console.log('Adults after leaving:', adults)
// console.log('Children after leaving:', children)

// // FINAL TEST
// console.log('Occupancy after:', occupancy())

// TODO: Change the undefined values below to the name of your functions
module.exports = {
  enter: enter,
  leave: leave,
  occupancy: occupancy
}
