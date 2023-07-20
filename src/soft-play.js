// do not change these lines
let adults = 0
let children = 0
let adultsEntered = 0
let childrenEntered = 0

// TODO: Write your functions in the below section. Your functions should update
// the adults and children variables defined above.
// Start with the occupancy function.
const enter = (numAdults, numChildren) => {
  if (numAdults >= numChildren) {
    adults += numAdults
    children += numChildren
    adultsEntered += numAdults
    childrenEntered += numChildren
    return true
  }
  return false
}
const leave = (numAdults, numChildren) => {
  if (numChildren > numAdults) return false
  if (children - numChildren > adults - numAdults) return false
  if (numChildren > children && numAdults > adults) return false
  adults -= numAdults
  children -= numChildren
  return true
}
const occupancy = () => {
  return {
    adults,
    children
  }
}
const total = () => {
  return {
    adults: adultsEntered,
    children: childrenEntered
  }
}
// TODO: Change the undefined values below to the name of your functions
module.exports = {
  enter: enter,
  leave: leave,
  occupancy: occupancy,
  total: total
}
