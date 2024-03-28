// const { a } = require("../../js-fundamentals-functions-1/src/extensions/creating-functions-multiple-args")

// do not change these lines
let adults = 0
let children = 0

// TODO: Write your functions in the below section. Your functions should update
// the adults and children variables defined above.
// Start with the occupancy function.

function enter (numAdults, numChildren) {
  if (numAdults > 0 && numAdults >= numChildren) {
    adults += numAdults, 
    children += numChildren
    return true
  } else return false
  
}



function leave (numAdults, numChildren) {
  if (numAdults >= numChildren && numAdults <= adults && numChildren <= children && adults - numAdults >= children - numChildren) {
    adults -= numAdults,
    children -= numChildren
    return true
  } else return false
}


function occupancy () {
  console.log({adults:adults, children:children})
  return {adults:adults, children:children}
}



// TODO: Change the undefined values below to the name of your functions
module.exports = {
  enter: enter,
  leave: leave,
  occupancy: occupancy
}
