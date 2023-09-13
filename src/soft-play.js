// do not change these lines
let adults = 0
let children = 0

// TODO: Write your functions in the below section. Your functions should update
// the adults and children variables defined above.
// Start with the occupancy function.
const occupants = {}
let childrenLeft = 0
let adultsLeft = 0



function occupancy() {
  occupants.adults = adults
  occupants.children = children
  return occupants
}

function enter(numAdults, numChildren) {
  if (numAdults < numChildren) {
    return false
  }
  children += numChildren
  adults += numAdults
  // returns true
  return true
}



const leave = (numAdults, numChildren) => {
  childrenLeft = children - numChildren
  adultsLeft = adults - numAdults
  if (numAdults < numChildren) {
    return false
  }
  if (adultsLeft < childrenLeft) {
    return false
  }
  if (children < numChildren) {
    return false
  }
  if (adults < numAdults) {
    return false
  }
  children = children - numChildren
  adults = adults - numAdults
  return true
}
//enter(10,.10)
//console.log(occupancy())


    //console.log('Failed, No adults, or more kids inside')
    



// TODO: Change the undefined values below to the name of your functions
module.exports = {
  enter: enter,
  leave: leave,
  occupancy: occupancy
}
