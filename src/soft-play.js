// do not change these lines
let adults = 0
let children = 0

// TODO: Write your functions in the below section. Your functions should update
// the adults and children variables defined above.
// Start with the occupancy function.

function enter(numAdultsEntered, numChildrenEntered) {
  if (numChildrenEntered > numAdultsEntered || numAdultsEntered <= 0 || numChildrenEntered <= 0) {
    return false
  }
  adults += numAdultsEntered
  children += numChildrenEntered
  console.log("adults :", adults, "children :", children)
  return true
}

// enter(1, 1)
// enter(2, 2)
// enter(0, 2)
// enter(4, 4)

function leave(numAdultsLeft, numChildrenLeft) {
  if(numAdultsLeft === 0) {
   return false
 } else if(adults - numAdultsLeft < children - numChildrenLeft) {
   return false
 } else if(numChildrenLeft > numAdultsLeft) {
   return false
 } else if (adults < numAdultsLeft || children < numChildrenLeft) {
   return false
 } else {
   adults -= numAdultsLeft
   children -= numChildrenLeft
   return true
 }
}

leave(1, 1)
leave(3, 3)
leave(4, 4)
leave(3, 3)

function occupancy() {
  return { adults: adults, children: children }
}

console.log(occupancy())

// TODO: Change the undefined values below to the name of your functions
module.exports = {
  enter: enter,
  leave: leave,
  occupancy: occupancy
}
