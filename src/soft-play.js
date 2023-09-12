// do not change these lines
let adults = 0
let children = 0

// TODO: Write your functions in the below section. Your functions should update
// the adults and children variables defined above.
// Start with the occupancy function.
const occupants = {}
let childrenLeft = 0
let adultsLeft = 0

// I was not going to finifh this last night, but I suddenly figured out that, since the variables adults and children were there to keep track of each, then writing all 3 functions using these should allow to keep track of changes.
// I'd love to hear if we can improve on this!
// Another thing is that we originally were trying to have occupancy() take parameters. But since all it does is put the values from both variables (children and adults) in an object, there is no need to be able to pass any other values through it.
// I am not sure about this last one, but I think enter() and leave() actually only need to return the value true. The changes they make to the values of the variable children and adults are stored in these variables. Therefore, those results just do not need to be returned.
// We are also just writing the functions, not calling them. But if we do, and I experimented and console.log that quite a bit. It's all working fine.
// I was wondering whether we could add some error messages to our if statements (but did not want to risk it)

// We figured out most of this first one yesterday afternoon, but I think the parameters might have been the issue (as in, we do not need any)
function occupancy() {
  occupants.adults = adults
  occupants.children = children
  return occupants
}

function enter(numAdults, numChildren) {
  // checks that there are not more children than adults coming in
  if (numAdults < numChildren) {
    return false
  }
  // keeps track of newcomers by reassigning the value of our two main variables (adults and children)
  children += numChildren
  adults += numAdults
  // returns true
  return true
}

// I wrote the function below with a succession of separated if statements, instead of using if else. Not sure which is best here specifically

const leave = (numAdults, numChildren) => {
  childrenLeft = children - numChildren
  adultsLeft = adults - numAdults
  // check no children leaves unaccompanied and that there are always at least as many or more adults leaving that children
  if (numAdults < numChildren) {
    return false
  }
  // checks that there will never be more children than adults left in the room
  if (adultsLeft < childrenLeft) {
    return false
  }
  // checks that there are no more children leaving than there are children in the room
  if (children < numChildren) {
    return false
  }
  // checks that there are no more adults leaving than there are adults in the room
  if (adults < numAdults) {
    return false
  }
  // if all checks are fine, then we reassign our two variables (children and adults) to their new values
  children = children - numChildren
  adults = adults - numAdults
  // and return true
  return true
}

// TODO: Change the undefined values below to the name of your functions: DONE
module.exports = {
  enter: enter,
  leave: leave,
  occupancy: occupancy
}
