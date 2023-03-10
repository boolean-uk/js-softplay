// do not change these lines
let adults = 0
let children = 0

// TODO: Write your functions in the below section. Your functions should update
// the adults and children variables defined above.
// Start with the occupancy function.

const enter = (numAdults, numChildren) => {
  if (numChildren > numAdults) {
    return false
  } else {
    adults += numAdults
    children += numChildren
    return true
  }
}
// adults 2
// children 1
// leaving
// numadults 1
// numchildren 0

const leave = (numAdults, numChildren) => {
  if (numChildren > numAdults) {
    return false
  } else if (adults - numAdults < children - numChildren) {
    return false
  } else if (children - numChildren < 0) {
    return false
  } else if (numAdults === 0 && numChildren > 0) {
    return false
  } else if (numAdults >= numChildren) {
    adults -= numAdults
    children -= numChildren
    return true
  }
}

const occupancy = () => {
  return { adults: adults, children: children }
}

const total = () => {
  adults += numAdults
  children += numChildren
  return { adults: adults, children: children }
}

console.log(`Adults, ${adults} \nChildren, ${children}`)
console.log(occupancy())
console.log(enter(2, 1))
console.log(enter(2, 1))
console.log(occupancy())
console.log(leave(1, 0))
console.log(occupancy())
console.log(total())

// TODO: Change the undefined values below to the name of your functions
module.exports = {
  enter: enter,
  leave: leave,
  occupancy: occupancy
}
