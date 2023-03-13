// do not change these lines
let adults = 0
let children = 0
let totalAdults = 0
let totalChildren = 0

// TODO: Write your functions in the below section. Your functions should update
// the adults and children variables defined above.
// Start with the occupancy function.

function occupancy() {
  const counter = {}
  counter.adults = adults
  counter.children = children
  return counter
}

function enter(numAdults, numChildren) {
  if (numAdults < numChildren) {
    return false
  } else if (numAdults >= numChildren) {
    children += numChildren
    adults += numAdults
    totalChildren += numChildren
    totalAdults += numAdults

    return true
  }
}
// console.log('enter', enter(1, 1))

const leave = (numAdults, numChildren) => {
  if (numChildren > numAdults) {
    return false
  } else if (children - numChildren > adults - numAdults) {
    return false
  } else if (children - numChildren < 0) {
    return false
  } else if (numAdults === 0 && numChildren > 0) {
    return false
  } else if (numChildren <= numAdults) {
    adults -= numAdults
    children -= numChildren
    return true
  }
}

// console.log('leave', leave(1, 0))

function total() {
  const totalObj = {}
  totalObj.adults = totalAdults
  totalObj.children = totalChildren
  return totalObj
}
// console.log('occupancy', occupancy())

// // TODO: Change the undefined values below to the name of your functions
module.exports = {
  enter: enter,
  leave: leave,
  occupancy: occupancy,
  total: total
}
