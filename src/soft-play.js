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
  return { adults: a, children: c }
}

console.log(occupancy(adults, children))
console.log(adults)
console.log(children)

// inside an object number of children and adults change
// creates an object headCount

function enter(numAdults, numChildren) {
  if (numChildren > numAdults) {
    return false
  } else {
    adults += numAdults
    children += numChildren
    console.log('This is the total number of adults', adults)
    console.log('This is the number of children', children)
    return true
  }
}
console.log(enter(10, 7))
console.log(adults, children)
// Check the number of children and the number of adults
// If the number of childern are larger than the number of adults, return(false)

function leave(numAdults, numChildren){
  if (numChildren > numAdults || numAdults === 0 || adults - numAdults < 0 || children - numChildren < 0){
    return false
  }
  else if ((adults - numAdults) < (children - numChildren)){
    return false
  }
  else {
    adults = adults - numAdults
    children = children - numChildren
    return true
  }
}

console.log(leave(9,0))
console.log(adults, children)

//adults <0, children<0 ---
//adults = adults - numAdults ---
//children = children - numChildren ---
//adult >= children ---


//child must leave with an adult ---
//children =< adults leaving ---

//occupancy cant go below 0 in any key --
//inside occupancy(function) adult value must be larger then child value ---
//return false if checks dont pass
//return true and deducted if passed

// TODO: Change the undefined values below to the name of your functions
module.exports = {
  enter: enter,
  leave: leave,
  occupancy: occupancy
}
