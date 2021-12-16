// do not change these lines

function reset() {
  adults = 0;
  children = 0;
}
counter = 0;
let adults = 0;
let children = 0;

function enter(numAdults, numChildren) {
  if (numAdults === 0) {
    return false;
  }
  if (numAdults >= numChildren) {
    adults += numAdults;
    children += numChildren;
    return true;
  }
}

// it("Adult cannot leave when adults 1 and children 1", function() {
//   reset()
//   enter(1,1)
//   expect(leave(1,0)).toBeFalse()
//   expect(occupancy()).toEqual({adults: 1, children: 1})
// })
function leave(numAdults, numChildren) {
  if (adults === 1 && children >= 1) {
    return false;
  }
  if (adults - numAdults < children - numChildren) {
    return false;
  }
  if (adults < numAdults || children < numChildren) {
    return false;
  }
  adults -= numAdults;
  children -= numChildren;
  return true;
}

console.log(enter(1, 0));
console.log(leave(3, 0));
console.log(adults);
console.log(children);
console.log(counter);

function occupancy() {
  return { adults: adults, children: children };
}
console.log(occupancy);

// TODO: Change the undefined values below to the name of your functions
module.exports = {
  enter: enter,
  leave: leave,
  occupancy: occupancy,
  reset: reset,
};
