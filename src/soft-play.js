// do not change these lines
let adults = 0
let children = 0
let totaladults = 0
let totalchildren = 0
// TODO: Write your functions in the below section. Your functions should update
// the adults and children variables defined above.
// Start with the occupancy function.
function enter(numAdults, numChildren) {
  if (numAdults >= numChildren) {
    adults += numAdults
    children += numChildren
    totaladults += numAdults
    totalchildren += numChildren
    return true
  } else return false
}

function leave(numAdults, numChildren) {
  if (numChildren > numAdults) return false
  else if (numChildren > children || numAdults > adults) return false
  else if (adults - numAdults < children - numChildren) return false
  else {
    adults -= numAdults
    children -= numChildren
    return true
  }
}

function occupancy() {
  return { adults: adults, children: children }
}
function total() {
  return { adults: totaladults, children: totalchildren }
}
// TODO: Change the undefined values below to the name of your functions
module.exports = {
  enter: enter,
  leave: leave,
  occupancy: occupancy,
  total: total
}
