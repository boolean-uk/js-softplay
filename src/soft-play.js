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

const leave = (numAdults, numChildren) => {
  if (numChildren > numAdults){
    return false
  }
  else if ((adults - numAdults) < (children - numChildren)) {
    return false
  }
  else if (children - numChildren < 0){
    return false
  }
  else if (numAdults >= numChildren){
    adults -= numAdults
    children -= numChildren
    return true
  }
}

// console.log(`Adults, ${adults} \nChildren, ${children}`)
console.log(enter(0, 0))
console.log(leave(0, 0))
console.log(`Adults, ${adults} \nChildren, ${children}`)

// TODO: Change the undefined values below to the name of your functions
module.exports = {
  enter: undefined,
  leave: undefined,
  occupancy: undefined
}
