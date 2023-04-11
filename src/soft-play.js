// do not change these lines
let adults = 0
let children = 0
let adultEnterd = 0
let childrenEnterd = 0


// TODO: Write your functions in the below section. Your functions should update
// the adults and children variables defined above.
// Start with the occupancy function.

const occupancy = () => {
  return {
    adults: adults,
    children: children
  }
}

const enter = (numAdults, numChildren) => {

  if(numAdults < 0 || numChildren < 0) return false

  if(numChildren / numAdults <= 1){ 
    adults += numAdults;
    children += numChildren
    adultEnterd += numAdults
    childrenEnterd += numChildren
    return true
  }

  return false

}

const leave = (numAdults, numChildren) => {
    if(numAdults < 0 || numChildren < 0) return false
    if(numChildren / numAdults > 1) return false
    
    const leftAdults = adults - numAdults
    const leftChildren = children - numChildren
    if(leftChildren > leftAdults) return false
    if(numAdults < numChildren) return false
    if(numAdults > adults || numChildren > children) return false

    adults -= numAdults
    children -= numChildren
    return true

}

const total = () => {
  return {
  adults: adultEnterd,
  children: childrenEnterd
  }
}


// TODO: Change the undefined values below to the name of your functions
module.exports = {
  enter: enter,
  leave: leave,
  occupancy: occupancy,
  total: total
}
