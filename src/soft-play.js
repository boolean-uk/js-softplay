// do not change these lines
let adults = 0
let children = 0

// TODO: Write your functions in the below section. Your functions should update
// the adults and children variables defined above.
// Start with the occupancy function.
function occupancy() {
  return {
    adults,
    children
  }

  }



function enter(numAdults, numChildren) {

  if (numAdults < 1) {
     return false
  } else if (numChildren > numAdults) {
    return false
  }
  else { 
    adults =  adults + numAdults
    children = children + numChildren
    return true
    
  }
}

function leave(numAdults, numChildren) {
  if (occupancy.adults < 1) {
    return false
  } else if (occupancy.adults < occupancy.children) {
    return false
  } 
  else if (occupancy.adults - numAdults === 0 && occupancy.children - numChildren > 0) {
    return false
  }
  else if (numChildren > numAdults) {
    return false
  } else if (numAdults < 1) {
    return false
  } else if (numChildren > occupancy.children || numAdults > occupancy.adults) {
    return false
  }
  else {
      adults = adults - numAdults,
      children = children - numChildren
      return true
  }
}




// TODO: Change the undefined values below to the name of your functions
module.exports = {
  enter: enter,
  leave: leave,
  occupancy: occupancy
}
