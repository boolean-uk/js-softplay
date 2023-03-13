// do not change these lines
let adults = 0
let children = 0

// TODO: Write your functions in the below section. Your functions should update
// the adults and children variables defined above.
// Start with the occupancy function.
function occupancy() {
  const object = {}
  object.adults = adults
  object.children = children
return object
}

function enter(numAdults, numChildren) {
  if (numChildren > numAdults) {
    return false
  }
  else { 
    adults = adults + numAdults
    children = children + numChildren
    return true
  }
}

function leave(numAdults, numChildren) {
  if (numChildren > numAdults) { //if number of children leaving is more than number of adults leaving
    return false
  } else if (adults - numAdults < children - numChildren) { //adults remaining minus adults leaving less than children remaining minus children leaving
    return false
  } else if (numAdults + numChildren > adults + children) {
    return false
  } else if (adults <= 0 || children <= 0) {
    return false
  } else {
    adults -= numAdults //(same as adults = adults - numAdults)
    children -= numChildren
    return true
  }
} 

// enter(4,2)
// console.log(`4,`, `2`)
// console.log(occupancy())
// enter(3,1)
// console.log(`3,`, `1`)
// console.log(occupancy())
// leave(2,2)
// console.log(`-2,`, `-2`)
// console.log(occupancy())
// enter(4,2)
// console.log(`4,`, `2`)
// console.log(occupancy())
// enter(3,1)
// console.log(`3,`, `1`)
// console.log(occupancy())
// leave(2,2)
// console.log(`-2,`, `-2`)
// console.log(occupancy())
// leave(2,2)
// console.log(`-2,`, `-2`)
// console.log(occupancy())
// leave(2,2)
// console.log(`-2,`, `-2`)
// console.log(occupancy())
// leave(2,2)
// console.log(`-2,`, `-2`)
// console.log(occupancy())

// function enter(numAdults, NumChildren) = every child + every adult
// if every child entering is with 1 x adult or more
// return true and numAdults & numChildren should be added to total
// else if return false

// function leave(numAdults, NumChildren) = every child + every adult
// no child to leave without an adult
// there are more adults than kids inside at all times
// there are more people inside than leaving
// return false if any checks fail 
// else numAdults & numchildren should be subtracted from total


// TODO: Change the undefined values below to the name of your functions
module.exports = {
  enter: undefined,
  leave: undefined,
  occupancy: undefined
}
