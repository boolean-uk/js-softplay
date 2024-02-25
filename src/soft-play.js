// do not change these lines
let adults = 0
let children = 0

function enter(numAdults, numChildren) {
  // Check if every child entering the soft play center is accompanied by at least 1 adult
  if (numChildren > numAdults || numAdults === 0) {
      return false;
  }

  // Update the counts of adults and children
  adults += numAdults;
  children += numChildren;
  return true;
}

function leave(numAdults, numChildren) {
  // Check if every child leaving the soft play center is accompanied by at least 1 adult
  if (numChildren > numAdults || numAdults === 0) {
      return false;
  }

  // Check if the number of adults and children left inside the center will not cause there to be more children than adults
  if (adults - numAdults < children - numChildren) {
      return false;
  }

  // Check if the number of adults and children attempting to leave is not greater than the number currently inside the center
  if (numAdults > adults || numChildren > children) {
      return false;
  }

  // Update the counts of adults and children
  adults -= numAdults;
  children -= numChildren;
  return true;
}

function occupancy() {
  return { adults, children };
}
// TODO: Change the undefined values below to the name of your functions
module.exports = {
  enter: enter,
  leave: leave,
  occupancy: occupancy
}
