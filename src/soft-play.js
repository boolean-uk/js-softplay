// do not change these lines
let adults = 0
let children = 0

// TODO: Write your functions in the below section. Your functions should update
// the adults and children variables defined above.
// Start with the occupancy function.

function enter(numAdultsEntered, numChildrenEntered) {
  if (numChildrenEntered > numAdultsEntered || numAdultsEntered <= 0 || numChildrenEntered <= 0) {
    return false;
  }
  adults += numAdultsEntered
  children += numChildrenEntered
  return true;
}

function leave(numAdultsLeft, numChildrenLeft) {
  if (numChildrenLeft > numAdultsLeft || children < numChildrenLeft || adults < numAdultsLeft || numAdultsLeft < 0 || numChildrenLeft < 0) {
    return false;
  }
  adults -= numAdultsLeft;
  children -= numChildrenLeft;
  return true;
}

function occupancy() {
  return { adults: adults, children: children }
}

// TODO: Change the undefined values below to the name of your functions
module.exports = {
  enter: enter,
  leave: leave,
  occupancy: occupancy
}
