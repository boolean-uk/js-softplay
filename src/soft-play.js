// do not change these lines
let adults = 0
let children = 0

// TODO: Write your functions in the below section. Your functions should update
// the adults and children variables defined above.
// Start with the occupancy function.
function allowedEntry(numAdults,numChildren){
  if(numAdults >= numChildren || numAdults === numChildren){
    adults = adults + numAdults
    children = children + numChildren
    return true
  } else
return false
}

allowedEntry(2,1)
allowedEntry(1,0)
allowedEntry(1,2)

function allowedtoLeave(numAdults,numChildren){

    if(numAdults > adults || numChildren > children) {
      return false
    }
  
    if((numAdults - adults) <= (numChildren - children) && (numAdults >= numChildren)){
  
      adults = adults - numAdults
      children = children - numChildren
      return true
    }else {return false
  }
}

allowedtoLeave(2,1)
allowedtoLeave(1,2)
allowedtoLeave(1,0)

function overallOccupancy(){
  let allPeople= {adults: adults , children : children}
  return allPeople  
}
overallOccupancy(1,1)
overallOccupancy(1,2)
overallOccupancy(2,1)
   
// TODO: Change the undefined values below to the name of your functions
module.exports = {
  enter: allowedEntry,
  leave: allowedtoLeave,
  occupancy: overallOccupancy 
}
