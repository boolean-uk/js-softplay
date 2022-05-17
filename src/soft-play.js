// do not change these lines

function reset() {
  adults = 0
  children = 0
}

let adults = 0
let children = 0

function occupancy() {
  return { adults: adults, children: children };
}

function enter(numAdults, numChilds) {
 
  if (numAdults >= numChilds) {
  
    adults = adults + numAdults;
    children = children + numChilds;
    
    return true;
  } else if (numAdults < numChilds) {
   
    return false;
  }
}
function leave(numAdults, numChilds) {

 let childrenRemain = children - numChilds ;
 let adultsRemain = adults - numAdults;
 
  if (
    numAdults >= numChilds &&
    numChilds <= children &&
    numAdults <= adults &&
    adultsRemain >=childrenRemain
  ) {
    adults = adultsRemain;
    children =childrenRemain;
    return true;
  } else {
    
    return false;
  }
 
}

// TODO: Write your functions in the below section. Your functions should update
// the adults and children variables defined above.

// TODO: Change the undefined values below to the name of your functions
module.exports = {
  enter: enter,
  leave: leave,
  occupancy: occupancy,
  reset: reset
}
