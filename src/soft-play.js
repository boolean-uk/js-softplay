// do not change these lines

function reset () {
  adults = 0
  children = 0
}

let adults = 0
let children = 0

// TODO: Write your functions in the below section. Your functions should update
// the adults and children variables defined above.
function enter (numAdults, numChildren, ) {
  if (numChildren+children > numAdults+adults) {
    return false
  }
  adults += numAdults
  children += numChildren
  return true
}

function leave (numAdults, numChildren) {
  if (numAdults > numChildren) {
    adults -= numAdults
    children -= numChildren
    if (adults < children){
    adults += numAdults
    children += numChildren
    return false}
    return true
    }
    return false
}

function occupancy () {
  const object = {}
  object.adults = adults
  object.children = children
  return object
}

// TODO: Change the undefined values below to the name of your functions
module.exports =
 {
   enter: enter,
   leave: leave,
   occupancy: occupancy,
   reset: reset
 }
