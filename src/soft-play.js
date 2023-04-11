// do not change these lines
let adults = 0
let children = 0

// TODO: Write your functions in the below section. Your functions should update
// the adults and children variables defined above.
// Start with the occupancy function.
function occupancy() {
  return {
    adults: adults,
    children: children
  }
}
// console.log(occupancy())

function enter(numAdults, numChildren) {
  if (numChildren <= numAdults) {
    adults += numAdults
    children += numChildren
    return true
  } else {
    return false
  }
}

/* function leave(numAdults, numChildren)
This function is used to register adults and children leaving the soft play center. The function should check for the following conditions:

- A child is not attempting to leave without an adult
- The number of adults and children left inside the center will not cause there to be more children than adults 
there must be at least 1 adult for 1 child inside the center at all times)
Every child leaving the soft play center is accompanied by at least 1 adult.
- The number of adults and children attempting to leave is not greater than the number currently inside the center
If any of these checks fail, function should return false. Otherwise, the function should return true and numAdults 
and numChildren should be deducted from the current totals. 
*/

function leave(numAdults, numChildren) {
  if (numAdults < numChildren) {
    return false
  }
  if (adults - numAdults < children - numChildren) {
    return false
  }
  if (numAdults > adults || numChildren > children) {
    return false
  }
  adults -= numAdults
  children -= numChildren
  return true
}

// TODO: Change the undefined values below to the name of your functions
module.exports = {
  enter: enter,
  leave: leave,
  occupancy: occupancy
}
