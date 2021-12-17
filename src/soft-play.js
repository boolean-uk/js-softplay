// do not change these lines
function reset () {
  adults = 0
  children = 0
  adultsTotal = 0
  childrenTotal = 0
}

let adults = 0
let children = 0

let adultsTotal = 0
let childrenTotal = 0

// TODO: Write your functions in the below section. Your functions should update
// the adults and children variables defined above.
function occupancy () {
  return {
    adults: adults,
    children: children
  }
}

function total () {
  return {
    adults: adultsTotal,
    children: childrenTotal
  }
}

function enter (numAdult, numChildren) {
  if (numAdult < numChildren) {
    return false
  }
  adults += numAdult
  children += numChildren
  adultsTotal += numAdult
  childrenTotal += numChildren
  return true
}
function leave (numAdult, numChildren) {
  if (numAdult === 0) {
    return false
  }
  if (adults === 1 && numAdult > 0 && children - numChildren > 0) {
    return false
  }
  if (adults - numAdult < children - numChildren) {
    return false
  }
  if (adults < numAdult || children < numChildren) {
    return false
  }
  adults -= numAdult
  children -= numChildren
  return true
}

// TODO: Change the undefined values below to the name of your functions
module.exports = {
  enter: enter,
  leave: leave,
  occupancy: occupancy,
  reset: reset,
  total: total
}
