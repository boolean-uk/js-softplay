// do not change these lines
let adults = 0
let children = 0

let totalAdults = 0
let totalChildren = 0

// TODO: Write your functions in the below section. Your functions should update
// the adults and children variables defined above.
// Start with the occupancy function.

// Goal: program that counts adults and children in soft play centre

// 1 - make a function that logs adults and children ENTERING
// function enter(numAdults, numChildren)
//   every child entering needs > 1 adult
//   child must always be < adult
const enter = (numAdults, numChildren) => {
  if (numAdults < numChildren) {
    return false
  } else {
    adults += numAdults
    children += numChildren
    totalAdults += numAdults
    totalChildren += numChildren
    return true
  }
}
// console.log('Is entry allowed? -', enter(2, 1))
// console.log('running total -', adults, children)
// 2 - make a function that logs adults and children LEAVING
// function leave(numAdults, numChildren)

const leave = (numAdults, numChildren) => {
  // A child is not attempting to leave without an adult
  if (numChildren > numAdults) {
    return false
    // The number of adults and children left inside the center will not cause
    // there to be more children than adults
    // (there must be at least 1 adult for 1 child inside the center at all times)
  } else if (adults - numAdults < children - numChildren) {
    return false
    // Every child leaving the soft play center is accompanied by at least 1 adult.
  } else if (numAdults === 0 && numChildren > 1) {
    return false
    // The number of adults and children attempting to leave is not greater than
    // the number currently inside the center
  } else if (numAdults > adults || numChildren > children) {
    return false
  } else {
    adults -= numAdults
    children -= numChildren
    return true
  }
}
// console.log('Is leaving allowed? -', leave(1, 0))

// 3 - make a function that returns OBJECT with 2 keys and numbers
// of adults and children INSIDE
// function occupancy()

const occupancy = () => {
  return { adults, children }
}

const total = () => {
  return {
    adults: totalAdults,
    children: totalChildren
  }
}

console.log('what is the current occupancy? -', occupancy())
console.log('what is the toal number of visitors today? -', total())

// leave(2, 1)
// TODO: Change the undefined values below to the name of your functions
module.exports = {
  enter: enter,
  leave: leave,
  occupancy: occupancy,
  total: total
}
