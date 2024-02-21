// do not change these lines
let adults = 0
let children = 0

// TODO: Write your functions in the below section. Your functions should update
// the adults and children variables defined above.
// Start with the occupancy function.
let allAdu = 0
let allChil = 0

function checkIn(amountAdults, amountChildren) {
  if (amountChildren > amountAdults) {
    return false
  }
  adults += amountAdults
  allAdu += amountAdults
  children += amountChildren
  allChil += amountChildren
  return true
}

function checkOut(amountAdults, amountChildren) {
  if (amountChildren > amountAdults) {
    return false
  }
  if (adults - amountAdults < children - amountChildren) {
    return false
  }
  if (amountAdults > adults || amountChildren > children) {
    return false
  }
  adults -= amountAdults
  children -= amountChildren
  return true
}

function amountOfPeople() {
  return {
    adults: adults,
    children: children
  }
}

function all() {
  return {
    adults: allAdu,
    children: allChil
  }
}
// TODO: Change the undefined values below to the name of your functions
module.exports = {
  enter: checkIn,
  leave: checkOut,
  occupancy: amountOfPeople,
  total: all
}
