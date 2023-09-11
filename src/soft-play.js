// do not change these lines
let adults = 0
let children = 0

// TODO: Write your functions in the below section. Your functions should update
// the adults and children variables defined above.
// Start with the occupancy function.

function occupancy() {
  return { adults: adults, children: children }
}

let totalAdults = 0
let totalChildren = 0
function total() {
  return { adults: totalAdults, children: totalChildren }
}

function enter(numAdults, numChildren) {
  if (numAdults < numChildren) {
    return false
  }
  adults += numAdults
  children += numChildren
  totalAdults += numAdults
  totalChildren += numChildren
  return true
}

function leave(numAdults, numChildren) {
  const futureAdults = adults - numAdults
  const futureChildren = children - numChildren
  if (numAdults < numChildren || futureAdults < futureChildren || futureAdults < 0 || futureChildren < 0) {
    return false
  }
  adults -= numAdults
  children -= numChildren
  return true
}

// TODO: Change the undefined values below to the name of your functions
module.exports = {
  total: total,
  enter: enter,
  leave: leave,
  occupancy: occupancy
}
