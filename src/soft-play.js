// do not change these lines
let adults = 0
let children = 0

// TODO: Write your functions in the below section. Your functions should update
// the adults and children variables defined above.
// Start with the occupancy function.
function enter(numAdults, numChildren) {
  if (numAdults < numChildren) {
    return false
  } else if (numAdults >= numChildren) {
    adults += numAdults //updating adding to current total
    children += numChildren
    // console.log(adults)
    // console.log(children)
    return true
  }
}
// console.log(enter(40, 3))

function leave(numAdults, numChildren) {
  if (numAdults < numChildren) {
    return false
  } else if (adults < children) {
    return false
  }
  else if (numAdults < numChildren) {
    return false
  } else if (numAdults + numChildren > adults + children) {
    return false
  }
    else if (adults - numAdults < children - numChildren) {
      return false
    }
   else {
    adults -= numAdults
    children -= numChildren
    // console.log(adults)
    // console.log(children)
    return true
  }
}
  

  function occupancy() {
    const occupants = {adults: 0, children: 10}
    occupants.adults = adults
    occupants.children = children
    return occupants
  }
  // console.log(occupancy())

// TODO: Change the undefined values below to the name of your functions
module.exports = {
  enter: enter,
  leave: leave,
  occupancy: occupancy
}