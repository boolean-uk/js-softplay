// do not change these lines
let adults = 0
let children = 0
const peopleVisiting = { adults: 0, children: 0 }
const occupancy = () => ({ adults: adults, children: children })

// TODO: Write your functions in the below section. Your functions should update
// the adults and children variables defined above.
// Start with the occupancy function.


const enter = (numAdults, numChildren) => {
  if (numChildren > numAdults) {
    return false
  } else {
    adults += numAdults
    children += numChildren
    peopleVisiting.adults += numAdults
    peopleVisiting.children += numChildren
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

// TODO: Change the undefined values below to the name of your functions
module.exports = {
  enter: enter,
  leave: leave,
  occupancy: occupancy
} 
