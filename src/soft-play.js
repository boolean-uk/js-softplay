// do not change these lines
let numCurrentAdults = 0
let numCurrentChildren = 0
let numTotalAdults = 0
let numTotalChildren = 0

// TODO: Write your functions in the below section. Your functions should update
// the adults and children variables defined above.
// Start with the occupancy function.
function enter(numAdults, numChildren){
  // Every child entering the soft play center is accompanied by at least 1 adult.
  if(numAdults < numChildren)
    return false

  numCurrentAdults += numAdults
  numTotalAdults += numAdults

  numCurrentChildren += numChildren
  numTotalChildren += numChildren

  return true
}

function leave(numAdults, numChildren){
  // A child is not attempting to leave without an adult
  // Every child leaving the soft play center is accompanied by at least 1 adult.
  if(numAdults < numChildren)
    return false

  // The number of adults and children left inside the center will not cause there to be more children than adults
  if(numCurrentAdults-numAdults < numCurrentChildren-numChildren)
    return false

  // The number of adults and children attempting to leave is not greater than the number currently inside the center
  if (numAdults > numCurrentAdults || numChildren > numCurrentChildren)
    false

  numCurrentAdults -= numAdults
  numCurrentChildren -= numChildren
  
  return true
}

function occupancy(){
  return {
    adults: numCurrentAdults,
    children: numCurrentChildren
  }
}

function total(){
  return {
    adults: numTotalAdults,
    children: numTotalChildren
  }
}

// TODO: Change the undefined values below to the name of your functions
module.exports = {
  enter: enter,
  leave: leave,
  occupancy: occupancy,
  total: total
};
