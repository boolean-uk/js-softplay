// do not change these lines
let adults = 0
let children = 0

// TODO: Write your functions in the below section. Your functions should update
// the adults and children variables defined above.
// Start with the occupancy function.
function occupancy() {
  const object = {}
  object.adults = adults
  object.children = children
  return object
}

function enter(numAdults, numChildren) {
  if (numChildren > numAdults) {
    return false
  } else if (numChildren <= numAdults) {
    adults += numAdults
    children += numChildren
    return true
  }
}

function leave(numAdults, numChildren) {
  if (numAdults < numChildren) {
    return false
  } else if (adults - numAdults < children - numChildren) {
    return false
  } else if (adults < numChildren) {
    return false
  } else if (numAdults + numChildren > adults + children) {
    return false
  } else {
    adults -= numAdults
    children -= numChildren
    return true
  }
}

// function total () {
//   const object = {}
//   object.adults = 
//   object.children =  
//   return object
// }


// TODO: Change the undefined values below to the name of your functions
module.exports = {
  enter: enter,
  leave: leave,
  occupancy: occupancy
}
