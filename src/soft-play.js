// do not change these lines
let adults = 0
let children = 0

// TODO: Write your functions in the below section. Your functions should update
// the adults and children variables defined above.
// Start with the occupancy function.
function occupancy() {
  const currentOccupancy = {}
  currentOccupancy.adults = adults
  currentOccupancy.children = children
  return currentOccupancy
}

// ================== Extra variables to hold the totals
let totalAdults = 0
let totalChildren = 0

const enter = function (numAdults, numChildren) {
  if (numAdults >= numChildren) {
    adults += numAdults
    children += numChildren
    totalAdults += numAdults
    totalChildren += numChildren
    return true
  } else {
    return false
  }
}

const leave = (numAdults, numChildren) => {
  const adultsIn = adults - numAdults
  const childrenIn = children - numChildren
  if (numAdults < numChildren || adultsIn < childrenIn) {
    return false
  } else {
    adults -= numAdults
    children -= numChildren
    return true
  }
}

// ================== Total without callback
function total() {
  const totalEntered = {}
  totalEntered.adults = totalAdults
  totalEntered.children = totalChildren

  return totalEntered
}

// ================== Total with callback (But the test does not pass although it works and gives the same result)
// function total(callBack) {
//   const totalEntered = {}
//   if (callBack) {
//     totalEntered.adults = totalAdults
//     totalEntered.children = totalChildren
//   }
//   return totalEntered
// }

// ================== Tests

// enter(28, 21)
// enter(2, 1)
// enter(2, 1)
// enter(2, 1)
// leave(4, 2)
// leave(1,5)
// total(enter)
// console.log('Current', occupancy())
// console.log('Total', total(enter))

// console.log(leave(1, 11))
// console.log(adults)
// console.log(children)
// console.log(occupancy())

// TODO: Change the undefined values below to the name of your functions
module.exports = {
  enter: enter,
  leave: leave,
  occupancy: occupancy,
  total: total
}
