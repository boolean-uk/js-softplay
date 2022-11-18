// do not change these lines
let adults = 0
let children = 0

// TODO: Write your functions in the below section. Your functions should update
// the adults and children variables defined above.
// Start with the occupancy function.

let totalAdults = 0
let totalChildren = 0

function enter(numAdults, numChildren) {
  if(numChildren > numAdults) {
    return false
  } else if(numAdults >= numChildren) {
    adults += numAdults
    children += numChildren
    totalAdults += numAdults
    totalChildren += numChildren
    return true
  }
}

function leave(numAdults, numChildren) {
   if(numAdults === 0) {
    return false
  } else if(adults - numAdults < children - numChildren) {
    return false
  } else if(numChildren > numAdults) {
    return false
  } else if (adults < numAdults || children < numChildren) {
    return false
  } else {
    adults -= numAdults
    children -= numChildren
    return true
  }
}

function occupancy() {
  const obj = {}
  obj.adults = adults
  obj.children = children
  return obj
}

function total() {
  const objTotal = {}
  objTotal.adults = totalAdults
  objTotal.children = totalChildren
  return objTotal
}


// TODO: Change the undefined values below to the name of your functions
module.exports = {
  enter: enter,
  leave: leave,
  occupancy: occupancy,
  total: total
}
