// do not change these lines
let adults = 0
let children = 0
let totalChidren = 0
let totalAdults = 0

// TODO: Write your functions in the below section. Your functions should update
// the adults and children variables defined above.
// Start with the occupancy function.
const enter = (numAdults, numChildren) => {
  if (numChildren > numAdults) {
    return false
  } else {
    adults += numAdults
    children += numChildren
    totalAdults += numAdults
    totalChidren += numChildren

    return true
  }
}

const leave = (numAdults, numChildren) => {
  if (numChildren > numAdults || adults - numAdults < children - numChildren) {
    return false
  } else {
    adults -= numAdults
    children -= numChildren

    return true
  }
}

const total = () => ({ adults: totalAdults, children: totalChidren })

const occupancy = () => ({ adults: adults, children: children })

// TODO: Change the undefined values below to the name of your functions
module.exports = {
  enter,
  leave,
  occupancy,
  total
}
