// do not change these lines
let adults = 0
let children = 0

// TODO: Write your functions in the below section. Your functions should update
// the adults and children variables defined above.
// Start with the occupancy function.
function occupancy () {
  const object = {}
   object.adults = adults
   object.children = children
return object
  console.log(object)
}

// function enter = every child + one adult
// if child is accompanied = true (if true adults + kids are added to total)
// if not = false

// function leave
// no child to leave with out adult
// checks that there are more adults than kids inside at all times
// check there are more people inside than leaving


// TODO: Change the undefined values below to the name of your functions
module.exports = {
  enter: undefined,
  leave: undefined,
  occupancy: undefined
}
