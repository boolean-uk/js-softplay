// do not change these lines
let adults = 0
let children = 0

// TODO: Write your functions in the below section. Your functions should update
// the adults and children variables defined above.
// Start with the occupancy function.

function occupancy() {
  return { adults, children }
}

function enter(numAdults, numChildren) {
  const canEnter = numAdults >= numChildren
  if (canEnter) {
    adults += numAdults
    children += numChildren
  }
  return canEnter
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

// TODO: Change the undefined values below to the name of your functions
module.exports = {
  enter: enter,
  leave: leave,
  occupancy: occupancy
}
