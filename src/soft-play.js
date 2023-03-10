// do not change these lines
let adults = 0
let children = 0

// TODO: Write your functions in the below section. Your functions should update
// the adults and children variables defined above.
// Start with the occupancy function.
function enter(numAdults, numChildren) {
  if (numAdults >= numChildren) {
    adults += numAdults
    children += numChildren
    return true
  } else {
    return false
  }
}

function occupancy() {
  return { adults: adults, children: children }
}

function leave(numAdults, numChildren) {
  if (
    numAdults < numChildren ||
    adults - numAdults < children - numChildren ||
    adults - numAdults < 0 ||
    children - numChildren < 0
  ) {
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
