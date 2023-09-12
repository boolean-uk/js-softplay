// do not change these lines
let adults = 0
let children = 0

// TODO: Write your functions in the below section. Your functions should update
// the adults and children variables defined above.
// Start with the occupancy function.
function occupancy() {
  return {
adults: adults, children: children }
}

function enter(numAdults, numChildren) {
  if (numAdults < numChildren) {
    return false
} else {
  adults = numAdults + adults
  children = numChildren + children
}
return true
}

//enter(10,.10)
//console.log(occupancy())

function leave(numAdults, numChildren) {

  const potentialChildren = children - numChildren
  const potentialAdults = adults - numAdults
  if(
    numAdults < numChildren 
    potentialAdults < potentialChildren 
    potentialChildren < 0 ||
    potentialAdults < 0
  ) {
    //console.log('Failed, No adults, or more kids inside')
    return false
  }
  adults = adults - numAdults
  children = children - numChildren
  return true
}

leave(1, 2)
console.log(occupancy())

function total() {
  return {
    adultsOverall: adults,
    childrenOverall: children
  }
}



// TODO: Change the undefined values below to the name of your functions
module.exports = {
  enter: enter,
  leave: leave,
  occupancy: occupancy
}
