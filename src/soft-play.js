// do not change these lines
let adults = 0
let children = 0

let totalAdults = 0
let totalChildren = 0

// TODO: Write your functions in the below section. Your functions should update
// the adults and children variables defined above.
// Start with the occupancy function.

function enter(numAdults, numChildren) {
  const isAccompanied = numAdults >= numChildren
  if (isAccompanied) {
    adults += numAdults
    children += numChildren
    totalAdults += numAdults
    totalChildren += numChildren
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

function total(numAdults, numChildren) {
  return { adults: totalAdults, children: totalChildren }
}

// TODO: Change the undefined values below to the name of your functions
module.exports = {
  enter,
  leave,
  occupancy,
  total
}
