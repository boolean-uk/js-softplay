// do not change these lines
let adults = 0
let children = 0

// TODO: Write your functions in the below section. Your functions should update
// the adults and children variables defined above.
// Start with the occupancy function.

let occupancyObj ={adults, children}

function softPlayOccupancy() {
  occupancyObj.adults = adults
  occupancyObj.children = children
  return occupancyObj
}

function softPlayEnter(numAdults, numChildren){
  let tempAdults = adults
  let tempChildren = children
  // console.log('adults', tempAdults)
  // console.log('children', tempChildren)
  if (numAdults >= numChildren){
    tempAdults += numAdults
    tempChildren += numChildren
    // console.log('adults trying to enter', tempAdults)
    // console.log('children trying to enter', tempChildren)
    if (tempAdults >= tempChildren) {
      adults = tempAdults
      children = tempChildren
      // console.log('adults in', adults)
      // console.log('children in', children)

      return true
    } else {
      return false
    }
  } else {
    return false
  }
}

function softPlayLeave(numAdults, numChildren) {
  let tempAdults = adults
  let tempChildren = children
  if (numAdults < numChildren){
    return false
  }
  tempAdults -= numAdults
  tempChildren -= numChildren
  if (tempAdults < tempChildren) {
    return false
  } else if (numAdults > adults || numChildren > children) {
    return false
  } else {
    adults = tempAdults
    children = tempChildren
    return true
  }
}






// TODO: Change the undefined values below to the name of your functions
module.exports = {
  enter: softPlayEnter,
  leave: softPlayLeave,
  occupancy: softPlayOccupancy
}
