// do not change these lines
let adults = 0
let children = 0
let adultsTally = 0
let childrenTally = 0

// TODO: Write your functions in the below section. Your functions should update
// the adults and children variables defined above.
// Start with the occupancy function.

function enter(adultsEntering,childrenEntering) {
  if (adultsEntering >= childrenEntering) {
    children = children + childrenEntering
    adults = adults + adultsEntering
    adultsTally = adultsTally + adultsEntering
    childrenTally = childrenTally + childrenEntering
  return true} else {return false};
}

function leave(adultsLeaving,childrenLeaving) {
  if (adultsLeaving >= childrenLeaving && adults - adultsLeaving >= children - childrenLeaving ) {
    adults = adults - adultsLeaving
    children = children - childrenLeaving   
  return true} else {return false};
}

//if the number of adults remaining is higher than the number of children remaining, then they are allowed to leave. 
// 

function occupancy() {
  return {"adults" :adults, "children" :children}
}

function total(){
  return{
    adults: adultsTally,
    children: childrenTally
  };
  
}

console.log(total())



// TODO: Change the undefined values below to the name of your functions
module.exports = {
  enter: enter,
  leave: leave,
  occupancy: occupancy,
  total: total
}
