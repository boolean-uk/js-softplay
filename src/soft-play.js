// do not change these lines
let adults = 0
let children = 0

// TODO: Write your functions in the below section. Your functions should update
// the adults and children variables defined above.
// Start with the occupancy function.

function enter(numAdults, numChildren) {
  const validInput = false
  if (numAdults >= numChildren) {
    adults += numAdults
    children += numChildren
    return `added ${numAdults} adults and ${numChildren} children to the playpen`
  } else return validInput
}

console.log(enter(2, 2))
console.log('adults :>> ', adults)
console.log('children :>> ', children)

function leave(numAdults, numChildren) {
  // numchildren <= numAdults

  //

  //numAdults + numChildren leaving shouldn't be a > number
  // numAdults && numChildren currently in the soft play

  //
  const validInput = false
if (numAdults >= numChildren){
  adults -= numAdults
  children -= numChildren
return ` Removed ${numAdults} adults and ${numChildren} children when leaving the soft play area`
}else return validInput
}
console.log(leave(3, 3))
console.log('adults', adults, 'children', children)



function occupancy() {
  return  {
  adults: adults,
  children: children
  }
}
// TODO: Change the undefined values below to the name of your functions
module.exports = {
  enter: undefined,
  leave: undefined,
  occupancy: undefined
}
