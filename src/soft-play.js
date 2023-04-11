// do not change these lines
let adults = 0
let children = 0

// TODO: Write your functions in the below section. Your functions should update
// the adults and children variables defined above.
// Start with the occupancy function.
function occupancy() {
  return {
    adults: adults,
    children: children
  }
}

function enter(numAdults, numChildren) {
  if (numChildren > numAdults) {
    return false
  }

  adults += numAdults
  children += numChildren
  return true
}

function leave(numAdults, numChildren) {
  if (numAdults > adults || numChildren > children) {
    return false
  } else if (numAdults === 0 && numChildren > 0) {
    return false
  } else if (numChildren > numAdults) {
    return false
  } else if (children - numChildren > adults - numAdults) {
    return false
  } else {
    adults -= numAdults
    children -= numChildren
    return true
  }
}

// TODO: Change the undefined values below to the name of your functions
module.exports = {
  enter: enter,
  leave: leave,
  occupancy: occupancy
}
