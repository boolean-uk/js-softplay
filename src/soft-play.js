// do not change these lines
let adults = 0
let children = 0

// TODO: Write your functions in the below section. Your functions should update
// the adults and children variables defined above.
// Start with the occupancy function.

function occupancy() {
  const data = {}
  data.adults = adults
  data.children = children

  return data
}

function enter(numAdults, numChildren) {
  if (numChildren <= numAdults) {
    adults += numAdults
    children += numChildren
    return true
  }

  return false
}

function leave(numAdults, numChildren) {
  const check1 = numAdults >= numChildren
  const check2 = adults - numAdults >= children - numChildren
  const check3 = numChildren <= children
  const check4 = numAdults <= adults

  if (check1 && check2 && check3 && check4) {
    adults -= numAdults
    children -= numChildren
    return true
  }
  return false
}

// TODO: Change the undefined values below to the name of your functions
module.exports = {
  enter: enter,
  leave: leave,
  occupancy: occupancy
}
