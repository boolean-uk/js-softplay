// do not change these lines
let adults = 0
let children = 0
let totalAdults = 0
let totalChildren = 0
// TODO: Write your functions in the below section. Your functions should update
// the adults and children variables defined above.
// Start with the occupancy function.

function enter(numAdults, numChildren) {
  if (numChildren > numAdults) {
    return false
  }

  adults += numAdults
  children += numChildren
  // return toltal adults and children
  totalAdults += numAdults
  totalChildren += numChildren
  return true
}

function leave(numAdults, numChildren) {
  if (numChildren > numAdults || numChildren > children || numAdults > adults) {
    return false
  }
  if (adults - numAdults < children - numChildren) {
    return false
  }

  adults -= numAdults
  children -= numChildren

  return true
}

function occupancy() {
  return { adults: adults, children: children }
}

function total() {
  return { adults: totalAdults, children: totalChildren }
}
// TODO: Change the undefined values below to the name of your functions
module.exports = {
  enter: enter,
  leave: leave,
  occupancy: occupancy,
  total: total
}
