// do not change these lines
let adults = 0
let children = 0

// TODO: Write your functions in the below section. Your functions should update
// the adults and children variables defined above.
// Start with the occupancy function.

let totalGuests = {
  adults: 0,
  children: 0
}

//moved this from the top-bottom to here in case of scope but now it doesn't recognise enterAdult
function totalPeople() {
  return totalGuests
}

// phase 2

function enter(enterAdult, enterKids) {
  // conditions: 1 adult per child minimum
  if (enterAdult >= enterKids) {
    totalGuests.adults += enterAdult
    totalGuests.children += enterKids
    adults = +enterAdult
    children = +enterKids
    return true
  } else {
    return false
  }
}

// console.log(enter(2, 1))
// console.log(totalGuests)

// // phase 3
function leave(numAdult, numChild) {
  if (numChild > numAdult || children - numChild > adults - numAdult || children > adults) {
    return false
  } else {
    totalGuests.adults -= numAdult
    totalGuests.children -= numChild
    adults -= numAdult
    children -= numChild
    return true
  }
}

// console.log(leave(1, 1))
// console.log(totalGuests)

// TODO: Change the undefined values below to the name of your functions
module.exports = {
  enter: enter,
  leave: leave,
  occupancy: totalPeople
}
