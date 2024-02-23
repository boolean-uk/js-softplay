// do not change these lines
let adults = 0
let children = 0
let adultsTotal = 0
let childrenTotal = 0

// TODO: Write your functions in the below section. Your functions should update
// the adults and children variables defined above.
// Start with the occupancy function.

//Enter function

const enter = (numAdults, numChildren) => {
  if ((numAdults === 0 && numChildren > 0) ||
     (numChildren > numAdults)){
    return false
  }
  adults += numAdults
  children += numChildren

  adultsTotal += numAdults
  childrenTotal += numChildren
 return true
}

//Leave function

const leave = (numAdults, numChildren) => {
  if  ((numAdults === 0) || 
      ((adults - numAdults) < 0 || (children - numChildren) < 0) ||
      ((adults - numAdults) < (children - numChildren)) ||
      (numChildren > numAdults)){
        return false
  }
  adults -= numAdults
  children -= numChildren

  return true
}

//Occupancy object output function

const occupancy = () => {
return {adults: adults, children: children}
}

const total = () => {
return {adults: adultsTotal, children: childrenTotal}
}


// TODO: Change the undefined values below to the name of your functions
module.exports = {
  enter: enter,
  leave: leave,
  occupancy: occupancy,
  total: total
}
