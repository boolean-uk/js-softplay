// do not change these lines
let adults = 0
let children = 0

// TODO: Write your functions in the below section. Your functions should update
// the adults and children variables defined above.
// Start with the occupancy function.

// TOTAL NUMBER ENTERING TRACKER
let totalAdultsIn = 0
let totalChildrenIn = 0

const total = () => {
  return { adults: totalAdultsIn, children: totalChildrenIn }
}

// OCCUPANCY
function occupancy() {
  return { adults: adults, children: children }
}

// console.log('Occupancy before:', occupancy())

// ENTRY
function enter(numAdults, numChildren) {
  if (numAdults < numChildren) {
    return false
  }
  adults += numAdults
  children += numChildren
  totalAdultsIn += numAdults
  totalChildrenIn += numChildren
  return true
}

// enter(10, 8)
// console.log('Adults after entering:', adults)
// console.log('Children after entering:', children)

// EXIT
function leave(numAdults, numChildren) {
  if (
    numChildren > numAdults ||
    children - numChildren > adults - numAdults ||
    numChildren > children ||
    numAdults > adults
  ) {
    return false
  }
  adults -= numAdults
  children -= numChildren
  return true
}

// leave(3, 2)
// console.log('Adults after leaving:', adults)
// console.log('Children after leaving:', children)

// FINAL TESTS
// console.log('Occupancy after:', occupancy())
// console.log('Total tracker:', total())

// TODO: Change the undefined values below to the name of your functions
module.exports = {
  enter: enter,
  leave: leave,
  occupancy: occupancy,
  total: total
}
