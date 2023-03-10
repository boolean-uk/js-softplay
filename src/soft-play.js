// do not change these lines
let adults = 0
let children = 0

// TODO: Write your functions in the below section. Your functions should update
// the adults and children variables defined above.
// Start with the occupancy function.

// function occupancy(a, c){
//   const headCount = {adults: a, children: c}

//   return headCount
// }

// function occupancy(a, c){
//   const headCount = {
//   adults: a,
//   children: c}
//   return headCount
// }

function occupancy(a, c) {
  const headCount = { adults: a, children: c }
  return headCount
}

console.log(occupancy(adults, children))

// inside an object number of children and adults change
// creates an object headCount

function enter(numAdults, numChildren) {
  if (numChildren > numAdults) {
    console.log(occupancy(adults, children))
    return false
  } else {
    adults += numAdults
    children += numChildren
    console.log(occupancy(adults, children))
    return true
  }
}
console.log(enter(2, 1))

// Check the number of children and the number of adults
// If the number of childern are larger than the number of adults, return(false)

function leave(numAdults, numChildren) {
  if (
    numChildren > numAdults ||
    numAdults === 0 ||
    adults - numAdults < 0 ||
    children - numChildren < 0
  ) {
    console.log(occupancy(adults, children))
    return false
  } else if (adults - numAdults < children - numChildren) {
    console.log(occupancy(adults, children))
    return false
  } else {
    adults = adults - numAdults
    children = children - numChildren
    console.log(occupancy(adults, children))
    return true
  }
}

console.log(leave(7, 3))

// adults <0, children<0 ---
// adults = adults - numAdults ---
// children = children - numChildren ---
// adult >= children ---

// child must leave with an adult ---
// children =< adults leaving ---

// occupancy cant go below 0 in any key --
// inside occupancy(function) adult value must be larger then child value ---
// return false if checks dont pass
// return true and deducted if passed

// TODO: Change the undefined values below to the name of your functions
module.exports = {
  enter: enter,
  leave: leave,
  occupancy: occupancy
}
