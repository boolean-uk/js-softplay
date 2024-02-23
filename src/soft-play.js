// do not change these lines
let adults = 0
let children = 0
let adultsLeaving = 0
let childrenLeaving = 0

// TODO: Write your functions in the below section. Your functions should update
// the adults and children variables defined above.
// Start with the occupancy function.
function occupancy() {
  const occupancyValue = {}
  occupancyValue.adults = adults
  occupancyValue.children = children
  if (occupancyValue.adults === undefined || occupancyValue.adults === '') {
    occupancyValue.adults = 0
  }
  if (occupancyValue.children === undefined || occupancyValue.children === '') {
    occupancyValue.children = 0
  }
  return occupancyValue
}
function enter(numAdults, numChildren) {
  if (numAdults < numChildren) {
    return false
  }

  adults += numAdults
  children += numChildren
  return true
}
function leave(numAdults, numChildren) {
  if (
    numAdults < numChildren ||
    numAdults > adults ||
    numChildren > children ||
    adults - numAdults < children - numChildren ||
    numAdults === '' ||
    numChildren === '' ||
    numAdults === undefined ||
    numChildren === undefined
  ) {
    return false
  }
  adults -= numAdults
  children -= numChildren
  adultsLeaving += numAdults
  childrenLeaving += numChildren
  return true
}
const occupancyValueTotal = {}
function total() {
  if (
    occupancyValueTotal.adults === undefined ||
    occupancyValueTotal.adults === ''
  ) {
    occupancyValueTotal.adults = 0
  }
  if (
    occupancyValueTotal.children === undefined ||
    occupancyValueTotal.children === ''
  ) {
    occupancyValueTotal.children = 0
  }
  occupancyValueTotal.adults += adults + adultsLeaving
  occupancyValueTotal.children += children + childrenLeaving
  return occupancyValueTotal
}
// TODO: Change the undefined values below to the name of your functions
module.exports = {
  enter: enter,
  leave: leave,
  occupancy: occupancy,
  total: total
}
