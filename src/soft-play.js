// do not change these lines
let adults = 0
let children = 0
const peopleVisiting = { adults: 0, children: 0 }

// TODO: Write your functions in the below section. Your functions should update
// the adults and children variables defined above.
// Start with the occupancy function.

const occupancy = () => ({ adults: adults, children: children })

// function enter(numAdults, numChildren)
// This function is used to register adults and children entering the soft play center. The function should check for the following conditions:

// Every child entering the soft play center is accompanied by at least 1 adult.
// If any of these checks fail, the function should return false. Otherwise, the function should return true and numAdults and numChildren should be added to the current totals.
const enter = (numAdults, numChildren) => {
  if (numChildren > numAdults) {
    return false
  } else {
    adults += numAdults
    children += numChildren
    peopleVisiting.adults += numAdults
    peopleVisiting.children += numChildren
    return true
  }
}

// function leave(numAdults, numChildren)
// This function is used to register adults and children leaving the soft play center. The function should check for the following conditions:

// A child is not attempting to leave without an adult
// The number of adults and children left inside the center will not cause there to be more children than adults (there must be at least 1 adult for 1 child inside the center at all times)
// Every child leaving the soft play center is accompanied by at least 1 adult.
// The number of adults and children attempting to leave is not greater than the number currently inside the center
// If any of these checks fail, function should return false. Otherwise, the function should return true and numAdults and numChildren should be deducted from the current totals
const leave = (numAdults, numChildren) => {
  if (numChildren > numAdults || adults - numAdults < children - numChildren) {
    return false
  } else {
    adults -= numAdults
    children -= numChildren

    return true
  }
}

// total() This function should return an object with the same structure as occupancy,
// but the values should be the all-time totals showing how many adults and children have entered the soft play center
const total = () => peopleInside

// TODO: Change the undefined values below to the name of your functions
module.exports = {
  enter: enter,
  leave: leave,
  occupancy: occupancy,
  total: total
}
