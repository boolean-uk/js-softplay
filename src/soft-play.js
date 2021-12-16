// do not change these lines

function reset () {
  adults = 0
  children = 0
}
counter = 0
let adults = 0
let children = 0

// TODO: Write your functions in the below section. Your functions should update
// the adults and children variables defined above.

function enter(numChildren, numAdults) {
  if (numChildren ===  numAdults) {
  adults = adults + numAdults;
  children = children + numChildren;
  counter = counter + numChildren + numAdults;
  return true;
  }
}

function leave(numChildren, numAdults) {
    if (numChildren < numAdults) return false
}



function occupancy() {
  return { adults: adults, children: children}
}


// TODO: Change the undefined values below to the name of your functions
module.exports = {
  enter: enter,
  leave: leave,
  occupancy: occupancy,
  reset: reset
}
