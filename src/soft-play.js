// do not change these lines
let adults = 0
let children = 0
let allTimeAdults = 0
let allTimeChildren = 0

// TODO: Write your functions in the below section. Your functions should update
// the adults and children variables defined above.
// Start with the occupancy function.

function occupancy() {
  return { adults: adults, children: children }
}

const validateEntering = (numAdults, numChildren) => {
  if (numAdults < 0 || numChildren < 0) {
    throw new Error('Cannot have negative number of people')
  }
  if (numAdults < numChildren) {
    throw new Error('Cannot have children without adults')
  }
}

const validateLeaving = (numAdults, numChildren) => {
  if (numAdults < 0 || numChildren < 0) {
    throw new Error('Cannot have negative number of people')
  }
  if (numChildren > numAdults) {
    throw new Error('Cannot leave more children than adults')
  }
  if (adults - numAdults < children - numChildren) {
    throw new Error('Cannot leave children without adults')
  }
  if (adults < numAdults || children < numChildren) {
    throw new Error('Cannot leave more people than are in the soft play center')
  }
}

function enter(numAdults, numChildren) {
  try {
    validateEntering(numAdults, numChildren)
  } catch (error) {
    return false
  }
  adults += numAdults
  children += numChildren
  allTimeAdults += numAdults
  allTimeChildren += numChildren
  return true
}

function leave(numAdults, numChildren) {
  try {
    validateLeaving(numAdults, numChildren)
  } catch (error) {
    return false
  }
  adults -= numAdults
  children -= numChildren
  return true
}

function total() {
  return { adults: allTimeAdults, children: allTimeChildren }
}

// TODO: Change the undefined values below to the name of your functions
module.exports = {
  enter: enter,
  leave: leave,
  occupancy: occupancy,
  total: total
}
