// do not change these lines
let adults = 0
let children = 0
let totalChildren = 0
let totalAdults = 0

// TODO: Write your functions in the below section. Your functions should update
// the adults and children variables defined above.
// Start with the occupancy function.
function enter(numAdults, numChildren) {
  if (numAdults < numChildren) {
    return false
  } else {
    totalAdults += numAdults
    totalChildren += numChildren
    adults += numAdults
    children += numChildren
    return true
  }
}

function leave(numAdults, numChildren) {
  adults -= numAdults
  children -= numChildren
  if (adults < children || numChildren > numAdults) {
    adults += numAdults
    children += numChildren
    return false
  } else {
    return true
  }
}
function occupancy() {
  const obj = {}
  obj.adults = adults
  obj.children = children
  return obj
}

function total() {
  const obj = {}
  obj.adults = totalAdults
  obj.children = totalChildren
  return obj
}

// TODO: Change the undefined values below to the name of your functions
module.exports = {
  enter: enter,
  leave: leave,
  occupancy: occupancy,
  total: total
}
