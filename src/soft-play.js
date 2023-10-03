// do not change these lines
let adults = 0
let children = 0

// TODO: Write your functions in the below section. Your functions should update
// the adults and children variables defined above.
const occupancy = () => {
   return{
    adults: adults,
    children: children
  }
}
let totalAdults = 0
let totalChilren = 0
const total = () => {
  return {
    adults: totalAdults,
    children: totalChilren
  }
}
const enter = (numAdults, numChildren) => {
  if (numAdults < numChildren) {
    return false
  }else{
    adults += numAdults
    children += numChildren
    totalAdults += numAdults
    totalChilren += numChildren
    return true
  }
}
// console.log(enter(2,2))
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
  enter: undefined,
  leave: undefined,
  occupancy: undefined,
  enter: enter,
  leave: leave,
  occupancy: occupancy,
  total : total
}
