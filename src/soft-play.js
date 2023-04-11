// do not change these lines
let adults = 0
let children = 0

// TODO: Write your functions in the below section. Your functions should update
// the adults and children variables defined above.

// Start with the occupancy function.
function occupancy() {
  return { adults: adults, children: children }
}

// console.log(occupancy())
// Enter function
// Every child entering the soft play center is accompanied by at least 1 adult.
function enter(numAdults, numChildren) {
  if (numChildren > numAdults) {
    console.log('error')
    return false
  } else {
    adults += numAdults
    children += numChildren
    return true
  }
}

// Leave function
function leave(numAdults, numChildren) {
  if (
    numChildren <= numAdults &&
    numAdults + numChildren <= adults + children &&
    adults - numAdults >= children - numChildren
  ) {
    adults -= numAdults
    children -= numChildren
    return true
  } else {
    console.log('Error')
    return false
  }
}

// TODO: Change the undefined values below to the name of your functions
module.exports = {
  enter: enter,
  leave: leave,
  occupancy: occupancy
}
