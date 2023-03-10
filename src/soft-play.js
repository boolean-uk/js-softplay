// do not change these lines
let adults = 0
let children = 0

// TODO: Write your functions in the below section. Your functions should update
// the adults and children variables defined above.
// Start with the occupancy function.

const totalObject = {
  adults: 0,
  children: 0
}

function occupancy() {
  return {
    adults: adults,
    children: children,
  }
}

function entry(newAdults, newChildren) {
  if(newAdults >= newChildren) {
    totalObject.adults += newAdults
    totalObject.children += newChildren
    adults += newAdults
    children += newChildren
    return true
  } 
  return false
}

function exit(newAdults, newChildren){
  if(newChildren > newAdults || (adults - newAdults) < (children - newChildren)){
    return false
  }
  adults -= newAdults
  children -= newChildren
  return true
}

function total() {
  return totalObject
}

// TODO: Change the undefined values below to the name of your functions
module.exports = {
  enter: entry,
  leave: exit,
  occupancy: occupancy,
  total: total
}
