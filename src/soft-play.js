// do not change these lines
let adults = 0
let children = 0

// TODO: Write your functions in the below section. Your functions should update
// the adults and children variables defined above.
// Start with the occupancy function.
function enter(numAdults, numChildren) {
  if (numChildren > 0 && numAdults >= numChildren) {
    adults += numAdults
    children += numChildren
    return true
  } else {
    return false
  }
}
console.log(enter(2, 2))
console.log(adults)
console.log(children)

function leave(numAdults, numChildren) {
  const uno = numAdults < 1 && children > 0
  const due = numAdults > numChildren && adults <= children
  const tre = children > adults
  const quattro = numChildren >= 1 && numAdults < numChildren
  const cinque = numChildren > children && numAdults > adults
  const sei = adults === children && numAdults > numChildren
  const sette = numAdults > adults
  if (uno || tre || quattro || cinque || due || sei || sette) {
    return false
  }
  adults -= numAdults
  children -= numChildren
  return true
}

// numAdults <= adults
// numChildren <= children
// numChildren > 0
// numAdults > 0
// numAdults >= 1
// numChildren < 1

console.log(leave(2, 2))

function occupancy() {
  return {
    adults: adults,
    children: children
  }
}
console.log(occupancy())
// TODO: Change the undefined values below to the name of your functions
module.exports = {
  enter: enter,
  leave: leave,
  occupancy: occupancy
}
