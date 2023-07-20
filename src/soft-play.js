// do not change these lines
let adults = 0
let children = 0
let totalAdults = 0
let totalChildren = 0

// TODO: Write your functions in the below section. Your functions should update
// the adults and children variables defined above.
// Start with the occupancy function.
function occupancy() {
  return {
    adults,
    children
  }
}

function enter(numAdults, numChildren) {
  if (numChildren <= numAdults) {
    adults += numAdults
    totalAdults += numAdults
    children += numChildren
    totalChildren += numChildren
    return true
  } else {
    return false
  }
}

function leave(numAdults, numChildren) {
  if (numAdults < numChildren) {
    return false
  }
  if (adults - numAdults < children - numChildren) {
    return false
  }
  if (numAdults > adults || numChildren > children) {
    return false
  }
  adults -= numAdults
  children -= numChildren
  return true
}

function total() {
  return {
    adults: totalAdults,
    children: totalChildren
  }
}

// TODO: Change the undefined values below to the name of your functions
module.exports = {
  enter: enter,
  leave: leave,
  occupancy: occupancy,
  total: total
}
