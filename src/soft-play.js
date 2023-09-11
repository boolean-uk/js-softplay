// do not change these lines
let adults = 0
let children = 0

// TODO: Write your functions in the below section. Your functions should update
// the adults and children variables defined above.
// Start with the occupancy function
let totalAdults = 0
let totalChildren = 0
let total=()=>{
  return {adults : totalAdults , children : totalChildren}
}
console.log(total())

 let enter=(numadults , numChildren) =>{
  if(numadults < numChildren){
    return false
  }else{
    adults += numadults
    children += numChildren
    totalAdults = adults + numadults
    totalChildren = children + numChildren
    return true
  }
 }
 console.log(enter(3,2))


 let leave=(numadults , numChildren) =>{
  if(numadults < numChildren || adults - numadults < children - numChildren){
    return false
  }else{
    adults -= numadults
    children -= numChildren
    return true
  }
 }
 console.log(leave(2,2))


 let occupancy=() =>{
  return {adults: adults , children: children}
 }
 console.log(occupancy())


// TODO: Change the undefined values below to the name of your functions
module.exports = {
  total:total,
  enter: enter,
  leave: leave,
  occupancy: occupancy
}
