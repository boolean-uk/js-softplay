// do not change these lines
let adults = 0
let children = 0
let totalAdults = 0
let totalChildren = 0

function enter(numAdults, numChildren) {
  if (numChildren > numAdults) {
    return false
  }
  adults += numAdults
  children += numChildren
  totalAdults += numAdults
  totalChildren += numChildren
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

function total() {
  return { adults: totalAdults, children: totalChildren }
}

module.exports = {
  enter: enter,
  leave: leave,
  occupancy: occupancy,
  total: total
}
