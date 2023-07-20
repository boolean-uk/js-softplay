// do not change these lines
let adults = 0
let children = 0

const isEnoughAdults = (a, c) => a >= c

// TODO: Write your functions in the below section. Your functions should update
// the adults and children variables defined above.
// Start with the occupancy function.
const enter = (numAdults, numChildren) => {
  if (!isEnoughAdults(numAdults, numChildren)) {
    return false
  }
  adults += numAdults
  children += numChildren
  return true
}

const leave = (numAdults, numChildren) => {
  if (
    !isEnoughAdults(numAdults, numChildren) ||
    !isEnoughAdults(adults - numAdults, children - numChildren)
  ) {
    return false
  }
  adults -= numAdults
  children -= numChildren
  return true
}

const occupancy = () => {
  return {
    adults: adults,
    children: children
  }
}

// TODO: Change the undefined values below to the name of your functions
module.exports = {
  enter,
  leave,
  occupancy
}
