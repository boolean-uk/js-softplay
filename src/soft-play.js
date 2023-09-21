// do not change these lines
let adults = 0
let children = 0

// TODO: Write your functions in the below section. Your functions should update
// the adults and children variables defined above.
// Start with the occupancy function.

function enter(adultsEntering,childrenEntering) {
  if (adultsEntering >= childrenEntering) {
    children = children + childrenEntering
    adults = adults + adultsEntering
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

console.log(occupancy())


// TODO: Change the undefined values below to the name of your functions
module.exports = {
  enter: undefined,
  leave: undefined,
  occupancy: undefined
}
