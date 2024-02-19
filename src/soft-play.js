// do not change these lines
let adults = 0
let children = 0

function enter(numAdults, numChildren) {
  if (numChildren > numAdults) {
    return false
  }
  adults += numAdults
  children += numChildren
  return true
}

function leave(numAdults, numChildren) {
  if (
    numChildren > numAdults ||
    adults - numAdults < 0 ||
    children - numChildren < 0
  ) {
    return false
  }

  if (adults - numAdults < children - numChildren) {
    return false
  }

  adults -= numAdults
  children -= numChildren
  return true
}

function occupancy() {
  return { adults: adults, children: children }
}

module.exports = {
  enter: enter,
  leave: leave,
  occupancy: occupancy
}
