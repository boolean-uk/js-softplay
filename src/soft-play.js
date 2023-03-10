// do not change these lines
let adults = 0
let children = 0
// TODO: Write your functions in the below section. Your functions should update
// the adults and children variables defined above.
// Start with the occupancy function.


function occupancy() {
  return ({
    adults, children})
  }
  // currentOcupancy = occupancy (1,2)
  function enter(numAdults, numChildren){
    // const allCildrenAcompanied = numChildren <= numAdults
    // const childNotAcompanied = numChildren > numAdults
    if (numChildren > numAdults) {
      return false
    }
    else if (numChildren <= numAdults) {
    adults += numAdults
    children += numChildren
    // console.log(`number of adults: ${adults}, numberof children: ${children} `)
    return true   
  }
}
// enter(10, 10)
function leave(numAdults, numChildren){
  const adultIsLargerThanChildren = numAdults < numChildren
  const adultsLeavingIsMoreThanBalance = numAdults > adults
  let adultOcupancy = adults
  let childOcupancy = children
  if (adultIsLargerThanChildren){
    return false
  }
  else if(adultsLeavingIsMoreThanBalance) {
    return false
  }
  adultOcupancy -= numAdults
  childOcupancy -= numChildren
  if (adultOcupancy < childOcupancy) {
    return false
  }
  else {
    adults -= numAdults
    children -= numChildren  
    return true
  }
}
console.log(leave(0,0))
console.log(leave(1,0))
console.log(leave(1,1))
console.log(leave(1,2))
console.log(leave(2,1))

// TODO: Change the undefined values below to the name of your functions
module.exports = {
  enter: enter,
  leave: leave,
  occupancy: occupancy
}
