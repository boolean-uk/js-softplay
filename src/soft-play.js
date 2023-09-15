let adults = 0
let children = 0

function enter(numAdults, numChildren) {
  // Check if every child is accompanied by at least 1 adult
  if (numChildren > 0 && numAdults < numChildren) {
    return false
  }

  // Update counts
  adults += numAdults
  children += numChildren
  return true
}

function leave(numAdults, numChildren) {
  // Check if a child is not attempting to leave without an adult
  if (numChildren > 0 && numAdults === 0) {
    return false
  }

  // Check if the number of adults and children left inside the center
  // will not cause there to be more children than adults
  if (adults - numAdults < children - numChildren) {
    return false
  }

  // Check if every child leaving is accompanied by at least 1 adult
  if (numChildren > 0 && numAdults === 0) {
    return false
  }

  // Check if the number of adults and children attempting to leave
  // is not greater than the number currently inside the center
  if (adults < numAdults || children < numChildren) {
    return false
  }

  // Update counts
  adults -= numAdults
  children -= numChildren
  return true
}

function occupancy() {
  return {
    adults: adults,
    children: children
  }
}
console.log(occupancy()) // { adults: 0, children: 0 }
console.log(enter(2, 1)) // true
console.log(occupancy()) // { adults: 2, children: 1 }
console.log(leave(1, 0)) // true
console.log(occupancy()) // { adults: 1, children: 1 }
console.log(enter(0, 1)) // false
console.log(occupancy()) // { adults: 1, children: 1 }
console.log(leave(1, 0)) // false
console.log(occupancy()) // { adults: 1, children: 1 }
console.log(leave(1, 1)) // true
console.log(occupancy()) // { adults: 0, children: 0 }

module.exports = {
  enter: enter,
  leave: leave,
  occupancy: occupancy
}
