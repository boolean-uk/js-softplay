// do not change these lines
let adults = 0
let children = 0

// TODO: Write your functions in the below section. Your functions should update
// the adults and children variables defined above.
// Start with the occupancy function.

let totalchildren = 0
let totalAdults = 0

function occupancy() {
  return {
    adults: adults,
    children: children
  }
}

function enter(numAdults, numChildren) {
  if (numChildren > numAdults) {
    return false
  } else if (numAdults >= numChildren) {
    children += numChildren
    adults += numAdults

    totalAdults += numAdults
    totalchildren += numChildren

    return true
  }
}

function leave(numAdults, numChildren) {
  if (numChildren > numAdults) {
    return false
  } else if (numAdults === 0) {
    return false
  } else if (adults - numAdults < children - numChildren) {
    return false
  } else {
    adults -= numAdults
    children -= numChildren
    return true
  }
}

function total() {
  const occupants = { children: 0, adults: 0 }
  occupants.adults = totalAdults
  occupants.children = totalchildren

  return occupants
}

// TODO: Change the undefined values below to the name of your functions
module.exports = {
  enter: enter,
  leave: leave,
  occupancy: occupancy,
  total: total
}
