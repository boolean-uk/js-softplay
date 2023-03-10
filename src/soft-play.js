// do not change these lines
let adults = 0
let children = 0

// TODO: Write your functions in the below section.
//our functions should update
// the adults and children variables defined above.
// Start with the occupancy function.

//Function 1 Enter
function peopleEntering(numAdultsIn, numChildrenIn) {
  // console.log('Number of Adults', adults)
  // console.log('Number of kids', children)
  if (numAdultsIn < numChildrenIn || numAdultsIn <= 0 || numChildrenIn <= 0) {
    return false
  } else {
    adults += numAdultsIn
    children += numChildrenIn
    return true
  }
}
// console.log(peopleEntering(5, 3))
// //Function 2 Leave center

function peopleLeaving(numAdultsOut, numChildrenOut) {
  if (
    numAdultsOut === 0 ||
    adults - numAdultsOut < children - numChildrenOut ||
    numChildrenOut > numAdultsOut ||
    adults < numAdultsOut ||
    children < numChildrenOut
  ) {
    return false
  } else {
    adults -= numAdultsOut
    children -= numChildrenOut
    return true
  }
}
// console.log(peopleLeaving(2,2))

//Function Ocuupancy

function currentOccupancy() {
  let counter = 0
  counter = { adults: adults, children: children }
  return counter
}
// console.log(currentOccupancy())

//
// TODO: Change the undefined values below to the name of your functions
module.exports = {
  enter: peopleEntering,
  leave: peopleLeaving,
  occupancy: currentOccupancy
}
