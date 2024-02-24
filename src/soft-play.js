// do not change these lines
let adults = 0
let children = 0

// TODO: Write your functions in the below section. Your functions should update
// the adults and children variables defined above.
// Start with the occupancy function.

// extension section

let adultsEntered = 0
let childrenEntered = 0

const total = () => {
  const obj = {}
  obj.adults = adultsEntered
  obj.children = childrenEntered

  return obj
}

// extension section

const enter = (numAdults, numChildren) => {
  if (numChildren <= numAdults) {
    adults += numAdults
    children += numChildren
    adultsEntered += numAdults
    childrenEntered += numChildren
    return true
  } else {
    return false
  }
}

const leave = (numAdults, numChildren) => {
  if (numChildren > numAdults) {
    return false
  }
  if (adults - numAdults < children - numChildren) {
    return false
  }
  if (adults - numAdults < 0 || children - numChildren < 0) {
    return false
  }

  adults -= numAdults
  children -= numChildren
  return true
}

const occupancy = () => {
  const obj = {}
  obj.adults = adults
  obj.children = children

  return obj
}

// TODO: Change the undefined values below to the name of your functions
module.exports = {
  enter: enter,
  leave: leave,
  occupancy: occupancy,
  total: total
}
