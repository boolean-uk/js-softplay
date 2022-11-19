// do not change these lines
let adults = 0
let children = 0
// TODO: Write your functions in the below section. Your functions should update
// the adults and children variables defined above.
// Start with the occupancy function.
function occupancy() {
return totalOcupancy = ({
  adults, children})
}

function enter(numAdults, numChildren){
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

function leave(numAdults, numChildren){
  if (numChildren > numAdults || numAdults > adults || numChildren > children || adults === 0 || children === 0 ) {
    return false
  }
  else if (children <= 2 && numAdults > numChildren) {
    return false
  }
  else if (numChildren <= numAdults) {
    adults -= numAdults
    children -= numChildren
    // console.log(`number of adults: ${adults}, numberof children: ${children} `)
    return true   
  }
}
console.log(occupancy())
// enter()
console.log(occupancy())
// leave()
console.log(occupancy())    


// TODO: Change the undefined values below to the name of your functions
module.exports = {
  enter: enter,
  leave: leave,
  occupancy: occupancy
}
