// do not change these lines
let adults = 0
let children = 0
const totalEntered = { adults: 0, children: 0 }

// TODO: Write your functions in the below section. Your functions should update
// the adults and children variables defined above.
// Start with the occupancy function.

function checkOccupancy() {
  const occupancyList = {}
  occupancyList.adults = adults
  occupancyList.children = children
  return occupancyList
}

function enter(numAdults, numChildren) {
  if (numAdults < numChildren) {
    console.log('Not every child is accompanied by an adult.')
    return false
  } else if (numAdults >= numChildren) {
    adults += numAdults
    children += numChildren
    totalAdd(numAdults, numChildren)
    return true
  }
}

function leave(numAdults, numChildren) {
  if (adults - numAdults < 0 || children - numChildren < 0) {
    console.log('More are leaving than there should be inside!!!')
    return false
  } else if (numAdults < numChildren) {
    console.log('Children leaving need to be accompanied by atleast 1 adult.')
    return false
  } else if (adults - numAdults < children - numChildren) {
    console.log('Number of children would be greater than number of adults')
    return false
  } else {
    adults -= numAdults
    children -= numChildren
    return true
  }
}

function totalAdd(numAdults, numChildren) {
  totalEntered.adults += numAdults
  totalEntered.children += numChildren
}

const total = () => totalEntered

// TODO: Change the undefined values below to the name of your functions
module.exports = {
  enter: enter,
  leave: leave,
  occupancy: checkOccupancy,
  total: total
}
