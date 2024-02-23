// do not change these lines
let adults = 0
let children = 0

// TODO: Write your functions in the below section. Your functions should update
// the adults and children variables defined above.
// Start with the occupancy function.

const enter = (numAdults, numChildren) => {
  if (numChildren <= numAdults) {
    adults += numAdults
    children += numChildren
    return true
  } else {
    return false
  }
}

// enter(2, 1)
// console.log(adults, children)

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

// leave(0, 1)
// console.log(adults, children)

const occupancy = () => {
  const obj = {}
  obj.adults = adults
  obj.children = children

  return obj
}

console.log(occupancy())

// TODO: Change the undefined values below to the name of your functions
module.exports = {
  enter: enter,
  leave: leave,
  occupancy: occupancy
}
