// do not change these lines
let adults = 0
let children = 0
let totalAdults = 0
let totalChildren = 0

function enter(numAdults, numChildren) {
  if (numAdults < numChildren) {
    return false
  }
  totalAdults += numAdults
  totalChildren += numChildren
  adults += numAdults
  children += numChildren
  return true
}
function leave(numAdults, numChildren) {}
function occupancy() {
  return {
    adults: adults,
    children: children
  }
}
function total() {
  return {
    adults: totalAdults,
    children: totalChildren
  }
}
// TODO: Write your functions in the below section. Your functions should update
// the adults and children variables defined above.
// Start with the occupancy function.

// TODO: Change the undefined values below to the name of your functions
module.exports = {
  enter: enter,
  leave: leave,
  occupancy: occupancy,
  total: total
}
