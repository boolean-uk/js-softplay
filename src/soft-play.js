// do not change these lines
let adults = 0
let children = 0
let totalAdult = 0
let totalChildren = 0

// TODO: Write your functions in the below section. Your functions should update
// the adults and children variables defined above.
// Start with the occupancy function.
function occupancy() {
  return { adults: adults, children: children }
}

function enter(numAdults, numChildren) {
  if (numAdults < numChildren) {
    return false
  } else {
    adults = numAdults + adults
    children = numChildren + children

    totalAdult = numAdults + adults
    totalChildren = numChildren + children
    return true
  }
}

function leave(numAdults, numChildren) {
  const potentialChildren = children - numChildren
  const potentialAdults = adults - numAdults
  if (
    numAdults < numChildren ||
    potentialAdults < potentialChildren ||
    potentialChildren < 0 ||
    potentialAdults < 0
  ) {
    // console.log('Failed, No adults, or more kids inside')
    return false
  }
  adults = adults - numAdults
  children = children - numChildren
  return true
}

function total() {
  return { adults: totalAdult, children: totalChildren }
}
// enter(2, 2)
// leave(3, 3)
// enter(1, 1)
// leave(1, 1)
// enter(4, 4)
// leave(5, 5)

// console.log(occupancy())
// console.log(total())

// TODO: Change the undefined values below to the name of your functions
module.exports = {
  enter: enter,
  leave: leave,
  occupancy: occupancy,
  total: total
}
