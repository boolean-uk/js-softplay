// do not change these lines
let adults = 0
let children = 0

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
    adults += numAdults
    children += numChildren
    
    totalAdults += numAdults
    totalChildren += numChildren
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
