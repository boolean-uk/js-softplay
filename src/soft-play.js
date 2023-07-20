// do not change these lines
let adults = 0
let children = 0

// TODO: Write your functions in the below section. Your functions should update
// the adults and children variables defined above.
// Start with the occupancy function.
function enter(numAdults, numChildren){
  if(numChildren > numAdults){
    return false
  }
  children+= numChildren
  adults+= numAdults
  return true
}

function leave(numAdults, numChildren){
  if(numAdults === 0&&numChildren>0){
    return false
  }
  if(adults - numAdults < children - numChildren){
    return false
  }
  if(numChildren > numAdults){
    return false
  }
  if(children<numChildren || adults < numAdults){
    return false
  }
  children = children - numChildren
  adults = adults - numAdults
  return true
}
function occupancy(){
  let obj = {}
  obj['adults'] = adults
  obj['children'] = children
  return obj
}
// TODO: Change the undefined values below to the name of your functions
module.exports = {
  enter: enter,
  leave: leave,
  occupancy: occupancy
}
