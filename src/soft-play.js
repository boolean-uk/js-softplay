// do not change these lines
let adults = 0
let children = 0

// TODO: Write your functions in the below section. Your functions should update
// the adults and children variables defined above.
// Start with the occupancy function.
function enter(numAdults, numChildren) {
  if (numChildren > 0 && numAdults >= numChildren) {
    adults += numAdults
    children += numChildren
    return true
  } else {
    return false
  }
}

function leave(numAdults, numChildren) {
  if (numAdults <= adults && numChildren <= children) {
    if (adults - numAdults >= children - numChildren) {
      if (numAdults >= numChildren) {
        adults -= numAdults
        children -= numChildren
        return true
      }
    }
  }
  return false
}

function occupancy() {
  object = {
    adults: adults,
    children: children
  }
  return object
}

// TODO: Change the undefined values below to the name of your functions
module.exports = {
  enter: enter,
  leave: leave,
  occupancy: occupancy
}
