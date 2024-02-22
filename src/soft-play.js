// do not change these lines
let adults = 0
let children = 0

// TODO: Write your functions in the below section. Your functions should update
// the adults and children variables defined above.
// Start with the occupancy function.

let adultsTotal = 0;
let childrenTotal = 0;

function enter (adultsNumber, childrenNumber) {
  
  if(adults === 0 && children > 0) {
    return false;
  }
  if(childrenNumber > adultsNumber){
    return false;
  }
  adults += adultsNumber
  children+= childrenNumber

  adultsTotal += adultsNumber;
  childrenTotal += childrenNumber;
  return true;
}

function leave (adultsNumber, childrenNumber) {
  if(adultsNumber === 1 && adults - adultsNumber > 1 && children >= adults - adultsNumber){
    adults -= adultsNumber
      children -= childrenNumber
      return true;
  }
  if(childrenNumber === 1 && adultsNumber == 1 && adults > 0 && children > 0)  {
      adults -= adultsNumber
      children -= childrenNumber
      return true;
  }

  if(children === 1 && adults === 1 && adultsNumber > 0 && childrenNumber === 0)  {
    return false;
  }
  
  if(adults - adultsNumber === 0 && children - childrenNumber === 0) {
      adults -= adultsNumber
      children -= childrenNumber
      return true;
  }
  
  if(adultsNumber > adults || childrenNumber > children) {
    return false;
  }
  if(adultsNumber === 0 && childrenNumber > 0) {
    return false;
  }
  
  if(adultsNumber > 0 && children > 1) {
    return false;
  }
  
  
  
  adults -= adultsNumber
  children -= childrenNumber
  return true;
}

function occupancy () {
  console.log(adults, children + " occupancy")
  return {
    adults: adults,
    children: children
  }
}

function total (){
  console.log(adultsTotal, childrenTotal + " total")
  return {
    adults: adultsTotal,
    children: childrenTotal
  }
}


// TODO: Change the undefined values below to the name of your functions
module.exports = {
  enter: enter,
  leave: leave,
  occupancy: occupancy,
  total: total
}
