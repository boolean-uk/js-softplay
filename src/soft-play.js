// do not change these lines
let adults = 0
let children = 0

// TODO: Write your functions in the below section. Your functions should update
// the adults and children variables defined above.
// Start with the occupancy function.
let aT = 0 // adult total
let cT = 0 // child total
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

function occupancy() {
  const headCount = { adults, children }
  return headCount
}

// console.log(occupancy())

// inside an object number of children and adults change
// creates an object headCount

function enter(numAdults, numChildren) {
  if (numChildren > numAdults) {
    return false
  } else {
    adults += numAdults
    children += numChildren
    aT += numAdults
    cT += numChildren

    return true
  }
}
// console.log(enter(1, 1))

// Check the number of children and the number of adults
// If the number of childern are larger than the number of adults, return(false)

function leave(numAdults, numChildren) {
  if (
    numChildren > numAdults ||
    numAdults === 0 ||
    adults - numAdults < 0 ||
    children - numChildren < 0
  ) {
    return false
  } else if (adults - numAdults < children - numChildren) {
    return false
  } else {
    adults = adults - numAdults
    children = children - numChildren

    return true
  }
}

// console.log(leave(1, 0))

function total() {
  return { adults: aT, children: cT }
}

// console.log(total())

// adults/c increased within total function
// when leave function is used the value of adult and children isnt effected within the total function

// adults =+ adults (doesnt go down in value)
// if (adults >= adults) aa
// if adults < a
// adults
// 6 10
// 10 8
// 8 10

// console.log(total(1, 2))
// console.log(total(6, 4))
// console.log(total(3, 3))
// function total() {
//   return { adults, children }
// }

// console.log(total(5, 2))
// console.log(total(2, 2))
// only update for entry
// enter function

// TODO: Change the undefined values below to the name of your functions
module.exports = {
  enter: enter,
  leave: leave,
  occupancy: occupancy,
  total: total
}
