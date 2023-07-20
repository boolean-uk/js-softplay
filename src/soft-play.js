// do not change these lines
let adults = 0
let children = 0
let allTimeAdults = 0
let allTimeChildren = 0
// TODO: Write your functions in the below section. Your functions should update
// the adults and children variables defined above.
// Start with the occupancy function.
function occupancy() {
  adultsnum = adults
  childrennum = children
  return { adults: adultsnum, children: childrennum }
}
function total() {
  return { adults: allTimeAdults, children: allTimeChildren }
}

function enter(numAdults, numChildren) {
  if (numAdults >= numChildren && numChildren > 0) {
    adults += numAdults
    children += numChildren
    allTimeAdults += numAdults
    allTimeChildren += numChildren
    return true
  }
  return false
}

function leave(numAdults, numChildren) {
  if (numAdults <= adults && numChildren <= children) {
    if (numAdults >= numChildren) {
      if (adults - numAdults >= children - numChildren) {
        adults -= numAdults
        children -= numChildren
        return true
      }
    }
  }
  return false
}

// TODO: Change the undefined values below to the name of your functions
module.exports = {
  enter: enter,
  leave: leave,
  occupancy: occupancy,
  total: total
}
