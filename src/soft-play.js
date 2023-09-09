// do not change these lines
let adults = 0
let children = 0
let totalAdults = 0
let totalChildren = 0
// TODO: Write your functions in the below section. Your functions should update
// the adults and children variables defined above.
// Start with the occupancy function.
let occupancy = () => {
  let obj = {
    adults: adults,
    children: children
  }
  return obj
}

let enter = (numAdults, numChildren) => {
  if (numChildren > numAdults) {
    return false
  } else {
    adults += numAdults
    children += numChildren
    totalAdults += numAdults
    totalChildren += numChildren
    return true  
  }
}


let leave = (numAdults, numChildren) => {
  adults -= numAdults
  children -= numChildren
  if (numAdults < numChildren || adults < children) {
    adults += numAdults
    children += numChildren
    return false
  } else {
    return true
  }
}

let total = () => {
  let obj = {}
  obj.adults = totalAdults
  obj.children = totalChildren
  return obj
}
// TODO: Change the undefined values below to the name of your functions
module.exports = {
  enter: enter,
  leave: leave,
  occupancy: occupancy,
  total: total
}