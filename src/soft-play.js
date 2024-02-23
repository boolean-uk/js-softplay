// do not change these lines
let adults = 0
let children = 0

// TODO: Write your functions in the below section. Your functions should update
// the adults and children variables defined above.
// Start with the occupancy function.

function enter(numAdults,numChildren){
  if(numAdults > numChildren || numAdults === numChildren){
    adults += numAdults
    children += numChildren
    return true
  }else return false
  
}
function leave(numAdults , numChildren){

  if(numAdults > adults || numChildren > children) {
    console.log(`first Condition`)
    return false
  }

  if((numAdults - adults) <= (numChildren - children) && (numAdults >= numChildren)){
    console.log(`second Leave Condition`)

    adults -= numAdults
    children -= numChildren
    return true
  }else return false
}

function accupancy(){
  
  
  pepoleInside = {
    adults : adults ,
    children : children ,
  }
  return pepoleInside
}

module.exports = {
  enter: enter,
  leave: leave,
  occupancy: accupancy
}
