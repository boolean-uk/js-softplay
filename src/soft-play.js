// do not change these lines
let adults = 0
let children = 0

// TODO: Write your functions in the below section. Your functions should update
// the adults and children variables defined above.
// Start with the occupancy function.

// Every child entering the soft play center is accompanied by at least 1 adult.
// If any of these checks fail, the function should return false. Otherwise,
// the function should return true and numAdults and numChildren should be added to the current totals.

let totalChildren = 0
let totalAdults = 0

function enter(numAdults, numChildren) {
  if (numChildren > numAdults) {
    return false
  } else if (numAdults >= numChildren) {
    children += numChildren
    adults += numAdults

    totalChildren += numChildren
    totalAdults += numAdults
    return true
  }
}

/* This function is used to register adults and children leaving the soft play center. 
The function should check for the following conditions:

    A child is not attempting to leave without an adult

    The number of adults and children left inside the center will not cause there to
     be more children than adults (there must be at least 1 adult for 1 child inside the center at all times)

    Every child leaving the soft play center is accompanied by at least 1 adult.

    The number of adults and children attempting to leave is not greater than the 
    number currently inside the center

If any of these checks fail, function should return false. Otherwise, the function 
should return true and numAdults and numChildren should be deducted from the current totals. */

function leave(numAdults, numChildren) {
  if (numChildren > numAdults) {
    return false
  } else if (numAdults === 0) {
    return false
  } else if (numAdults + numChildren > adults + children) {
    return false
  } else if (adults - numAdults < children - numChildren) {
    return false
  } else {
    adults -= numAdults
    children -= numChildren
    return true
  }
}

/* {
  adults: 4,
  children: 3
}
 */
function occupancy() {
  const occupants = { adults: 0, children: 0 }

  occupants.adults = adults
  occupants.children = children

  return occupants
}

function total() {
  const occupants = { adults: 0, children: 0 }

  occupants.adults = totalAdults
  occupants.children = totalChildren

  return occupants
}

// TODO: Change the undefined values below to the name of your functions
module.exports = {
  enter: enter,
  leave: leave,
  occupancy: occupancy,
  total: total
}
