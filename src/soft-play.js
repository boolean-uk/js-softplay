// do not change these lines
let adults = 0
let children = 0

// TODO: Write your functions in the below section. Your functions should update
// the adults and children variables defined above.
// Start with the occupancy function.

function occupancy() {
  const numbOfPeople = {}
  numbOfPeople.adults = adults
  numbOfPeople.children = children
  return numbOfPeople
}

function enteringPeople(numAdults, numChildren) {
  if (numAdults < numChildren) {
    return false
  } else if (numAdults >= numChildren) {
    children += numChildren
    adults += numAdults
    return true
  }
}

function leavingPeople(numAdults, numChildren) {
  if (numChildren > numAdults) {
    return false
  } else if (adults - numAdults < children - numChildren) {
    return false
  } else if (children - numChildren < 0) {
    return false
  } else if (numAdults >= numChildren) {
    adults -= numAdults
    children -= numChildren
    return true
  }
}

// function total() {
//const totPeople = {}
//totPeople.adults =
// totPeople.children =
// return totPeople
//}

// TODO: Change the undefined values below to the name of your functions
module.exports = {
  enter: enteringPeople,
  leave: leavingPeople,
  occupancy: occupancy,
  total: total
}
