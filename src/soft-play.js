// do not change these lines
let adults = 0
let children = 0

// TODO: Write your functions in the below section.
//our functions should update
// the adults and children variables defined above.
// Start with the occupancy function.

//Function 1 Enter
function enter(numAdults, numChildren) {
  adults += numAdults
  children += numChildren
  console.log('Number of Adults', adults)
  console.log('Number of kids', children)
  if (numAdults < numChildren) {
    return false
  } else {
    return true
  }
}
console.log(enter(, ))
//Function 2 Leave center

function leave(numAdults, numChildren) {
  adults -= numAdults
  children -= numChildren
  console.log('Number of Adults in the building', adults)
  console.log('Number of kid in the building', children)
  if (adults <= children || numAdults <= numChildren) {
    return false
  } else {
    return true
  }
}

console.log(leave(, ))

//Function Ocuupancy

function occupancy() {
  let counter = 0
  counter = { adults: adults, children: children }
  return counter
}
console.log(occupancy())

//
// TODO: Change the undefined values below to the name of your functions
module.exports = {
  enter: enter,
  leave: leave,
  occupancy: occupancy
}
