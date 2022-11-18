// do not change these lines
let adults = 0
let children = 0

// TODO: Write your functions in the below section. Your functions should update
// the adults and children variables defined above.
// Start with the occupancy function.

function occupancy() {
  return {
    adults: adults,
    children: children,
  }
}
let totalAdults = 0
let totalChildren = 0

function entry(newAdults, newChildren) {
  if(newAdults >= newChildren) {
    console.log(newAdults, newChildren)
    adults += newAdults
    children += newChildren
    totalAdults += newAdults
    totalChildren += newChildren
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

console.log(totalAdults)
console.log(totalChildren)

function total(adults, children) {
  const totalObject = {
    adults: 0,
    children: 0,
  }
  console.log(entry())
  total.adults = total.adults + entry()
  total.children = total.children + entry()

  return totalObject
}

// TODO: Change the undefined values below to the name of your functions
module.exports = {
  enter: entry,
  leave: exit,
  occupancy: occupancy,
  total: total
}
