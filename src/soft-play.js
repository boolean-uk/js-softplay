// do not change these lines
let adults = 0
let children = 0
let totalAdults = 0
let totalChildren = 0
// TODO: Write your functions in the below section. Your functions should update
// the adults and children variables defined above.
// Start with the occupancy function.

const enter = (numAdults, numChildren) => {
  if (numChildren > numAdults) {
    return false
  }
  adults += numAdults
  children += numChildren
  totalAdults += numAdults
  totalChildren += numChildren
  return true
}

const leave = (numAdults, numChildren) => {
  if (numChildren > numAdults) {
    return false
  }
  if (numAdults > adults || numChildren > children) {
    return false
  }

  const tempAdults = adults - numAdults
  const tempChildren = children - numChildren

  if (tempChildren > tempAdults) {
    return false
  }

  adults -= numAdults
  children -= numChildren
  return true
}

const total = () => {
  return { adults: totalAdults, children: totalChildren }
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
  occupancy,
  total
}
