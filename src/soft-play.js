// do not change these lines
let adults = 0
let children = 0

// TODO: Write your functions in the below section. Your functions should update
// the adults and children variables defined above.
// Start with the occupancy function.

function enter(numAdults, numChildren) {

  //compare numAults to numChildren
    // return false if numChildren > numAdults

  // if true
    // add some amount to numAdults & numChildren

  adults += numAdults
  children += numChildren
}

// console.log(enter(adults, children));u


function leave(numAdults, numChildren) {
  // numchildren <= numAdults 

  //
  
  //numAdults + numChildren leaving shouldn't be a > number 
  // numAdults && numChildren currently in the soft play
 
  //

  adults -= numAdults
  children -= numChildren
}

function occupancy() {
  return result
}

// TODO: Change the undefined values below to the name of your functions
module.exports = {
  enter: undefined,
  leave: undefined,
  occupancy: undefined
}
