// do not change these lines
let adults = 0
let children = 0
// TODO: Write your functions in the below section. Your functions should update
// the adults and children variables defined above.
// Start with the occupancy function.

const totalObject = {
  adults: 0,
  children: 0
}

/*entry(1,1)
entry(2,1)
exit(1,0)
entry(1,1)
entry(2,1)
exit(1,1) */


function occupancy() {
  return{
adults: adults,
children: children
  }
}



function entry(numAdult, numChildren) {
if(numAdult >= numChildren){
totalObject.adults += numAdult
totalObject.children += numChildren
  adults += numAdult
  children += numChildren
  return true
}
return false
}



function exit(numAdult, numChildren) {
  if(numAdult< numChildren || (adults-numAdult)< (children-numChildren)){
    return false
  }
  adults -= numAdult
  children -= numChildren
  return true
}
 function total (){
  return totalObject
 }




// TODO: Change the undefined values below to the name of your functions
module.exports = {
  enter: entry,
  leave: exit,
  occupancy: occupancy,
  total: total
}
