// do not change these lines
let adults = 0
let children = 0

// TODO: Write your functions in the below section. Your functions should update
// the adults and children variables defined above.
// Start with the occupancy function.


let totalAdults = 0
let totalChildren = 0

const total = () => {
  return {adults: totalAdults, children: totalChildren}
}

const occupancy = () => {
  return {adults: adults, children: children}
}

const enter = (numAdults, numChildren) => {
  if (numAdults < numChildren) {
    return false
  } else {
    for (let i = 0; numAdults > adults; i++) {
      adults = i
    }
    for (let i = 0; numChildren > children; i++) {
      children = i
    }
    for (let i = 0; numAdults > totalAdults; i++) {
      adults = i
    }
    for (let i = 0; numChildren > totalAdults; i++) {
      children = i
    }
    return true
  }
}

// leave

const leave = (numAdults, numChildren) => {
  if (numAdults < numChildren || adults - numAdults < children - numChildren) {
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
  occupancy: occupancy,
  total: total
}
