// do not change these lines
let adults = 0
let children = 0

// TODO: Write your functions in the below section. Your functions should update
// the adults and children variables defined above.
// Start with the occupancy function.

const enter = (numAdults, numChildren) => {
  adults += numAdults
  children += numChildren
  return true
}

const leave = (numAdults, numChildren) => {
  if (children >= numChildren) {
    adults -= numAdults
    children -= numChildren
    return true
  } else {
    return false
  }
}

const occupancy = () => {
  return { adults, children }
}

// Example usage:
const result = enter(2, 3)
console.log(result)
console.log('Current Occupancy:', occupancy())

const result1 = leave(1, 1)
console.log(result1)
console.log('Current Occupancy:', occupancy())

// TODO: Change the undefined values below to the name of your functions
module.exports = {
  enter,
  leave,
  occupancy
}
