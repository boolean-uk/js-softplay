// do not change these lines
let adults = 0
let children = 0

// TODO: Write your functions in the below section. Your functions should update
// the adults and children variables defined above.
// Start with the occupancy function.
let migratedAdults = 0
let migratedChildren = 0

function enter(numAdults, numChildren) {
  if (numAdults >= numChildren) {
    adults += numAdults
    migratedAdults += numAdults
    children += numChildren
    migratedChildren += numChildren
    return true
  } else {
    return false
  }
}

function leave(numAdults, numChildren) {
  if (numAdults === 0 && numChildren > 0) {
    return false
  } else if (numAdults < numChildren) {
    return false
  } else if (adults - numAdults < children - numChildren) {
    return false
  } else if (adults - numAdults < 0 || children - numChildren < 0) {
    return false
  } else {
    adults -= numAdults
    children -= numChildren
    return true
  }
}

function occupancy() {
  return {
    adults: adults,
    children: children
  }
}

function total() {
  return {
    adults: migratedAdults,
    children: migratedChildren
  }
}

// TODO: Change the undefined values below to the name of your functions
module.exports = {
  enter: enter,
  leave: leave,
  occupancy: occupancy,
  total: total
}
