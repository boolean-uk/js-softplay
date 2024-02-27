// do not change these lines
let adults = 0
let children = 0

// TODO: Write your functions in the below section. Your functions should update
// the adults and children variables defined above.
// Start with the occupancy function.

// Total in softplay area

let totalAdults = 0
let totalChildren = 0

function occupancy() {
  return {
    adults: adults,
    children: children
  }
}

function enter(numAdults, numChildren) {
  if (numChildren > numAdults) {
    return false
  }
  adults += numAdults
  children += numChildren

  totalAdults += numAdults
  totalChildren += numChildren

  return true
}

function leave(numAdults, numChildren) {
  if ((numAdults === 0) ||
  ((adults - numAdults) <0 || (children - numChildren) <0) ||
  ((adults - numAdults) < (children - numChildren)) ||
  (numChildren > numAdults)) { 
      return false
  }
  adults -= numAdults
  children -= numChildren
  return true
}

function total() {
  return {
    adults: totalAdults,
    children: totalChildren
  }
}

console.log(total())

module.exports = {
  enter: enter,
  leave: leave,
  occupancy: occupancy,
  total: total
}
