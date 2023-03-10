// do not change these lines
let adults = 0
let children = 0

// TODO: Write your functions in the below section. Your functions should update
// the adults and children variables defined above.
// Start with the occupancy function.

function enter(numAdultsEntered, numChildrenEntered) {
  if (numChildrenEntered > numAdultsEntered || numAdultsEntered <= 0 || numChildrenEntered <= 0) {
    return false
  }
  adults += numAdultsEntered
  children += numChildrenEntered
  console.log("adults :", adults, "children :", children)
  return true
}

enter(1, 1)
enter(2, 2)
enter(0, 2)
enter(4, 4)

function leave(numAdultsLeft, numChildrenLeft) {
  if (numChildrenLeft > numAdultsLeft || children < numChildrenLeft + 1 || adults < numAdultsLeft || numAdultsLeft < 0 || numChildrenLeft < 0) {
    return false
  }
  adults -= numAdultsLeft
  children -= numChildrenLeft
  console.log("adults :", adults, "children :", children)
  return true
} 

leave(1, 1)
leave(3, 3)
leave(4, 4)
leave(3, 3)

function occupancy() {
  return { adults: adults, children: children }
}

// TODO: Change the undefined values below to the name of your functions
module.exports = {
  enter: undefined,
  leave: undefined,
  occupancy: undefined
}
