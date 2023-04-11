// do not change these lines
let adults = 0
let children = 0

// TODO: Write your functions in the below section. Your functions should update
// the adults and children variables defined above.
// Start with the occupancy function.

function enter(numAdults, numChildren) {
  const isAccompanied = numAdults >= numChildren
  if (isAccompanied) {
    adults += numAdults
    children += numChildren
  }
  return isAccompanied
}

function leave(numAdults, numChildren) {
  const isAccompanied = numAdults >= numChildren

  const haveEnoughAdultsInSoftplay =
    adults - numAdults >= children - numChildren

  const arbitaryStatement =
    adults - numAdults >= 0 && children - numChildren >= 0

  const condition =
    isAccompanied && haveEnoughAdultsInSoftplay && arbitaryStatement

  if (condition) {
    adults -= numAdults
    children -= numChildren
  }

  return condition
}

function occupancy() {
  return { adults, children }
}

// TODO: Change the undefined values below to the name of your functions
module.exports = {
  enter,
  leave,
  occupancy
}
