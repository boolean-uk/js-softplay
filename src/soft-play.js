// do not change these lines
let adults = 0
let children = 0
let totalAdults = 0
let totalChildren = 0

// TODO: Write your functions in the below section. Your functions should update
// the adults and children variables defined above.
// Start with the occupancy function.
function enter(numAdults, numChildren) {
  if (numChildren > numAdults || numChildren < 1) {
    return false
  }
  adults += numAdults
  children += numChildren
  totalAdults += numAdults
  totalChildren += numChildren
  return true
}

function leave(numAdults, numChildren) {
  let canLeave = false
  const adultCompany = numAdults >= numChildren
  const peopleInside = adults - numAdults >= children - numChildren
  const numberLeaving = adults - numAdults >= 0 && children - numChildren >= 0
  if (adultCompany && peopleInside && numberLeaving) {
    canLeave = true
    adults -= numAdults
    children -= numChildren
  }
  return canLeave
}

function occupancy() {
  return {
    adults,
    children
  }
}

function total() {
  return {
    adults : totalAdults,
    children : totalChildren
  }
}

// TODO: Change the undefined values below to the name of your functions
module.exports = {
  enter: enter,
  leave: leave,
  occupancy: occupancy,
  total: total
}
