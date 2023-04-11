// do not change these lines
let adults = 0
let children = 0
let totaladluts = 0
let totalchildren = 0

// TODO: Write your functions in the below section. Your functions should update
// the adults and children variables defined above.
// Start with the occupancy function.
function occupancy() {
  return {
    adults,
    children
  }
}

function total() {
  return {
    adults: totaladluts,
    children: totalchildren
  }
}
// console.log(occupancy().adults)

function enter(numAdults, numChildren) {
  if (numAdults < 1) {
    return false
  } else if (numChildren > numAdults) {
    return false
  } else {
    adults = adults + numAdults
    children = children + numChildren
    totaladluts += numAdults
    totalchildren += numChildren
    return true
  }
}

function leave(numAdults, numChildren) {
  // const currentCenter = occupancy()occupancy()
  // console.log(currentCenter)
  if (occupancy().adults < 1) {
    return false
  } else if (occupancy().adults < occupancy().children) {
    return false
  } else if (
    occupancy().adults - numAdults === 0 &&
    occupancy().children - numChildren > 0
  ) {
    return false
  } else if (numChildren > numAdults) {
    return false
  } else if (numAdults < 1) {
    return falsecurrentCenter
  } else if (
    occupancy().adults === occupancy().children &&
    numAdults > numChildren
  ) {
    return false
  } else {
    adults = adults - numAdults
    children = children - numChildren
    return true
  }
}

// console.log(leave())
// leave(2, 1)
// TODO: Change the undefined values below to the name of your functions
module.exports = {
  enter: enter,
  leave: leave,
  occupancy: occupancy,
  total: total
}
