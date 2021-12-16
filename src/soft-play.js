// do not change these lines
function reset () {
  adult = 0
  children = 0
}

let adults = 0
let children = 0

// TODO: Write your functions in the below section. Your functions should update
// the adults and children variables defined above.
function occupancy() {
  return {
    adults: adults,
    children: children,
  };
}

function enter(numAdult, numChildren) {
  if (numChildren === 1 && numAdult === 0) {
    return false;
  }
  adults += numAdult;
  children += numChildren;
  return true;
}
function leave(numAdult, numChildren) {
  if (adults === 1) {
    return false;
  }
  adults -= numAdult;
  children -= numChildren;
  return true;
}
// TODO: Change the undefined values below to the name of your functions
module.exports = {
  enter: enter,
  leave: leave,
  occupancy: occupancy,
  reset: reset,
};
