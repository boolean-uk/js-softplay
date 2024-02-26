// do not change these lines
let adults = 0
let children = 0
// TODO: Write your functions in the below section. Your functions should update
// the adults and children variables defined above.
// Start with the occupancy function.
let adultsInside = 0;
let childrenInside = 0;

function occupancy() {
  return {
      adults: adultsInside,
      children: childrenInside
  };
}
function enter(numAdults, numChildren) {
    if (numChildren > numAdults || numChildren === 0) {
        return false;
    }
    adultsInside += numAdults;
    childrenInside += numChildren;
    return true;
}
function leave(numAdults, numChildren) {
    if (numChildren > numAdults || numAdults === 0) {
        return false;
    }
    if (adultsInside - numAdults < childrenInside - numChildren) {
        return false;
    }
    if (numAdults > adultsInside || numChildren > childrenInside) {
        return false;
    }
    adultsInside -= numAdults;
    childrenInside -= numChildren;
    return true;
}
// TODO: Change the undefined values below to the name of your functions
module.exports = {
  enter: enter,
  leave: leave,
  occupancy: occupancy
}
