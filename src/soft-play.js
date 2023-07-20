// do not change these lines
let adults = 0
let children = 0

let totalAdultsEntered = 0
let totalChildrenEntered = 0

const isEnoughAdults = (a, c) => a >= c
const addPeople = ( a, c ) => {
  adults += a
  totalAdultsEntered += a

  children += c
  totalChildrenEntered += c
}
const subtractPeople = ( a, c ) => {
  adults -= a
  children -= c
}

// TODO: Write your functions in the below section. Your functions should update
// the adults and children variables defined above.
// Start with the occupancy function.
const enter = (numAdults, numChildren) => {
  if (!isEnoughAdults(numAdults, numChildren)) {
    return false
  }
  addPeople(numAdults, numChildren)
  return true
}

const leave = (numAdults, numChildren) => {
  if (
    !isEnoughAdults(numAdults, numChildren) ||
    !isEnoughAdults(adults - numAdults, children - numChildren)
  ) {
    return false
  }
  subtractPeople(numAdults, numChildren)
  return true
}

const occupancy = () => {
  return {
    adults: adults,
    children: children
  }
}

const total = () => {
  return {
    adults: totalAdultsEntered,
    children: totalChildrenEntered
  }
}

// TODO: Change the undefined values below to the name of your functions
module.exports = {
  enter,
  leave,
  occupancy, 
  total
}
