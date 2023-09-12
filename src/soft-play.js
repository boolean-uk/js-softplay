// do not change these lines
let adults = 0
let children = 0

let countA = 0
let countC = 0

// TODO: Write your functions in the below section. Your functions should update
// the adults and children variables defined above.
// Start with the occupancy function.

function occupancy() {
  return {
    adults: adults,
    children: children
  }
}

function enter(numAdults, numChildren) {
  let check = false
  if (numAdults >= numChildren) {
    check = true
    adults += numAdults
    children += numChildren
    countA += numAdults
    countC += numChildren
  }
  return check
}

// enter(2, 2)

// console.log(enter(2, 2))
// console.log(enter(3,3))

// console.log(occupancy())

function leave(numAdults, numChildren) {
  let check = false

  if (
    numAdults >= numChildren &&
    numAdults <= adults &&
    numChildren <= children
  ) {
    const adultQuantityCheck = adults - numAdults
    const childrenQuantityCheck = children - numChildren

    if (
      adultQuantityCheck >= 0 &&
      childrenQuantityCheck >= 0 &&
      adultQuantityCheck >= childrenQuantityCheck
    ) {
      check = true
      adults -= numAdults
      children -= numChildren
    }
  }

  return check
}

// console.log('q3', leave(1, 1))
// console.log(occupancy())

function total() {
  const object = {
    adults: countA,
    children: countC
  }
  return object
}

console.log(total())

// function total() {
//   //currently only calculating at the end of the code not as the adult and children values are updated

//   //adult and children variables need to be increasing in value and if true then the total values will be updated
//   let countA = 0
//   let countC = 0

//   //let x = adults
//   //if x >adults nothing
//   // if x<adults --- update difference in value increase
//   let x = 0
//   let y = 0

//   //

//   if (x < adults) {
//     const diffA = adults - x
//     countA += diffA
//     x = adults
//   }
//   else {
//     y = children
//   }

//   if (y < children) {
//     const diffC = children - y
//     countC += diffC
//     y = children
//   }
//   else {
//     y = children
//   }

//   const customers = {adult: countA, children: countC}

//   return customers
// }

console.log('q4', total())

// TODO: Change the undefined values below to the name of your functions
module.exports = {
  enter: enter,
  leave: leave,
  occupancy: occupancy,
  total: total
}
