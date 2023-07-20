// do not change these lines
let adults = 0
let children = 0

// TODO: Write your functions in the below section. Your functions should update
// the adults and children variables defined above.
// Start with the occupancy function.

function occupancy () {
  const occupancy = {adults, children}
  return occupancy
}

function enter (numAdults, numChildren) {
  const updatedAdults = adults + numAdults;
  const updatedChildren = children + numChildren;

  if(updatedAdults < updatedChildren){
    return false;
  }

  adults = updatedAdults
  children = updatedChildren
  return true
}

function leave (numAdults, numChildren) {
  const adultsLeft = adults - numAdults;
  const childrenLeft = children - numChildren;

  if(numAdults === 0){
    return false;
  }

  if(numAdults < numChildren){
    return false;
  }

  if(adultsLeft < 0 || childrenLeft < 0)
    return false;

  if (adultsLeft < childrenLeft)
    return false;

  adults = adultsLeft
  children = childrenLeft
  return true
}

// TODO: Change the undefined values below to the name of your functions
module.exports = {
  enter: enter,
  leave: leave,
  occupancy: occupancy
}
