// do not change these lines
let adults = 0
let children = 0

// TODO: Write your functions in the below section. Your functions should update
// the adults and children variables defined above.
// Start with the occupancy function.

let totalAdultEntry = 0
let totalChildrenEntry = 0

function enter(numAdults, numChildren) {
  if (numAdults < numChildren) {
    return false
  } else {
    adults += numAdults
    children += numChildren
    totalAdultEntry += numAdults
    totalChildrenEntry += numChildren
    return true
  }
}

function leave(numAdults, numChildren) {
  const conditionA = numChildren > numAdults // return false
  const conditionB = children - numChildren < 0 // return false
  const conditionC = children - numChildren > adults - numAdults // return false
  const conditionD = numAdults === 0 && numChildren > 0 // return false
  const conditionE = numAdults >= numChildren // return true

  if (conditionA || conditionB || conditionC || conditionD) {
    return false
  } else if (conditionE) {
    adults -= numAdults
    children -= numChildren
    return true
  }
}

function occupancy() {
  const headCount = {}
  headCount.adults = adults
  headCount.children = children
  return headCount
}

function total() {
  const totalEntry = {}
  totalEntry.adults = totalAdultEntry
  totalEntry.children = totalChildrenEntry
  return totalEntry
}

// TODO: Change the undefined values below to the name of your functions
module.exports = {
  enter: enter,
  leave: leave,
  occupancy: occupancy,
  total: total
}
