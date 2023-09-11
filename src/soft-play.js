// do not change these lines
let adults = 0
let children = 0

// TODO: Write your functions in the below section. Your functions should update
// the adults and children variables defined above.
// Start with the occupancy function.
let totalAdults = 0
let totalChildren = 0
const total = () => {
  return { adults: totalAdults, children: totalChildren }
}
const enter = (numAdults, numChildren) => {
  if (numAdults < numChildren) {
    return false
  } else {
    adults = adults + numAdults
    children = children + numChildren
    totalAdults = totalAdults + numAdults
    totalChildren = totalChildren + numChildren
    return true
  }
}
console.log(enter(7, 5))
const leave = (numAdults, numChildren) => {
  if (numAdults < numChildren || adults - numAdults < children - numChildren) {
    return false
  } else {
    adults = adults - numAdults
    children = children - numChildren
    return true
  }
}
console.log(leave(3, 1))
const occupancy = () => {
  return { adults: adults, children: children }
}
console.log(occupancy())
console.log(total())

// TODO: Change the undefined values below to the name of your functions
module.exports = {
  total: total,
  enter: enter,
  leave: leave,
  occupancy: occupancy
}
