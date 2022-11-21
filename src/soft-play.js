// do not change these lines
let adults = 0
let children = 0
let totAdults = 0
let totChildren = 0

// TODO: Write your functions in the below section. Your functions should update
// the adults and children variables defined above.
// Start with the occupancy function.

function occupancy()
{
  return {adults: adults, children: children}
}

function total()
{
  return {adults: totAdults, children: totChildren}
}

function enter(numAdults, numChildren){
  if(numAdults >= numChildren)
  {
    adults += numAdults
    totAdults += numAdults
    children += numChildren
    totChildren += numChildren
    return true
  }else
  {
    return false
  }
}

function leave(numAdults, numChildren) {
  if(numChildren <= numAdults && adults-numAdults >= children-numChildren && adults-numAdults>=0 && children-numChildren >= 0)
  {
    adults -= numAdults
    children-=numChildren
    return true
  }
  else
    return false
}

// TODO: Change the undefined values below to the name of your functions
module.exports = {
  enter: enter,
  leave: leave,
  occupancy: occupancy,
  total: total
}
