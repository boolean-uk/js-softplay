// do not change these lines
let adults = 0
let children = 0

// TODO: Write your functions in the below section. Your functions should update
// the adults and children variables defined above.
// Start with the occupancy function.


const totalGuests = {
  adults: 0,
  children: 0
}

function occupancy() {
  return {
    adult: adults,
    children: children,
  }
}

console.log(occupancy())

// phase 2
  
    
function enter(enterAdult, enterKids) {
//conditions: 1 adult per child minimum
  if (enterAdult >= enterKids) {
    totalGuests.adults += enterAdult
    totalGuests.children += enterKids
    adults += enterAdult
    children += enterKids
    return true
    } else {
      return false
    }}

 console.log(enter(2, 1))
 console.log(totalGuests)


// // phase 3
 function leave(numAdult, numChild) {
  if (numChild > numAdult || (children - numChild) > (adults - numAdult)) {
    return false
  } else {
    totalGuests.adults -= numAdult
    totalGuests.children -= numChild
    adults -= numAdult
    children -= numChild
    return true}
}
 
 console.log(leave (2, 1))
 console.log(totalGuests) 



// TODO: Change the undefined values below to the name of your functions
module.exports = {
  enter: enter(),
  leave: leave(),
  occupancy: occupancy()
}