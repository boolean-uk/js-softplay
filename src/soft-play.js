// do not change these lines
let adults = 0
let children = 0
let totalAdults = 0
let totalChildren = 0
// ### function enter(numAdults, numChildren)
// This function is used to register adults and children entering the soft play center.
// The function should check for the following conditions:

// * Every child entering the soft play center is accompanied by at least 1 adult.

// If any of these checks fail, the function should return `false`. Otherwise, the function should return `true` and `numAdults` and `numChildren` should be added to the current totals.

// ### function leave(numAdults, numChildren)
// This function is used to register adults and children leaving the soft play center. The function should check for the following conditions:

// * A child is not attempting to leave without an adult
// * The number of adults and children left inside the center will not cause there to be more children than adults (there must be at least 1 adult for 1 child inside the center at all times)
// * Every child leaving the soft play center is accompanied by at least 1 adult.
// * The number of adults and children attempting to leave is not greater than the number currently inside the center

// If any of these checks fail, function should return `false`. Otherwise, the function should return `true` and `numAdults` and `numChildren` should be deducted from the current totals.

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
  if (numChildren <= numAdults) {
    adults += numAdults
    children += numChildren
    totalAdults += numAdults
    totalChildren += numChildren
    return true
  } else {
    return false
  }
}
// * A child is not attempting to leave without an adult
// * The number of adults and children left inside the center will not cause there to be more children than adults (there must be at least 1 adult for 1 child inside the center at all times)
// * Every child leaving the soft play center is accompanied by at least 1 adult.
// * The number of adults and children attempting to leave is not greater than the number currently inside the center
function leave(numAdults, numChildren) {
  if (
    numAdults + numChildren <= adults + children &&
    adults - numAdults >= children - numChildren &&
    numChildren <= numAdults
  ) {
    adults -= numAdults
    children -= numChildren
    return true
  } else {
    return false
  }
}
function total() {
  return {
    adults: totalAdults,
    children: totalChildren
  }
}

// TODO: Change the undefined values below to the name of your functions
module.exports = {
  enter: enter,
  leave: leave,
  occupancy: occupancy,
  total: total
}
