// do not change these lines
let adults = 0
let children = 0

// TODO: Write your functions in the below section. Your functions should update
// the adults and children variables defined above.
// Start with the occupancy function.

console.log('--------OCCUPANCY---------')
// ------------------------OCCUPANCY--------------------------------
// function should return object with two keys:
// 1. adults
// 2. children

// {
//   adults: 4,
//   children: 3
// }

// Expected output

// Example
// occupancy()
// {adults: 0, children: 0}

// Example
// 2 adults and 1 child enter
// enter(2,1)
// true

function occupancy() {
  return { adults, children }
}

console.log(occupancy())

// { adults: 3, children: 3 }

// ----------------------------ENTER--------------------------------
// Expected output
// function enter(numAdults, numChildren)
// function enter(2 adults, 3 children)
// this should fail, because children are greater than adults

// if children are greater than 1 && adults are greater then 1, then true this.
// because 1 adult and 1 child needs can enter

console.log('---------ENTER---------')

function enter(numAdults, numChildren) {
  adults = 0;
  children = 0;

  if (numAdults >= numChildren) {
    adults += numAdults
    children += numChildren
    return true
  } else {
    return false
  }
}
console.log('A entering:1, C entering:1', enter(1, 1))
console.log('OC', occupancy())
console.log('A:1, C:2', enter(1, 2))
console.log('OC', occupancy())
console.log('A:2, C:1', enter(2, 1))
console.log('OC', occupancy())

// ---------------------------LEAVE--------------------------------
console.log('---------LEAVE---------')
// Plan
// conditions:

// 1. child is not attempting to leave without an adult
// child is greater 1 and adult is less then 1 --> fail (num)

// 2. child will be the same as adults inside the center
// child !== adults --> fail
// child === adults --> pass

// 3.  numChild leaving, must be accompanied with at least one numAdult
// numChild < 1 && numAdult > 1 --> pass

// 4. number of adults and children leaving is greater than people inside --> fail
// The number of adults and children leaving < inside --> fail

function leave(numAdults, numChildren) {
  const totalPeopleToLeaving = numAdults + numChildren
  const totalPeopleInside = adults + children

  if (totalPeopleInside >= totalPeopleToLeaving && numAdults >= numChildren) {
    const leftAdults = adults - numAdults
    const leftChildren = children - numChildren
    if (leftAdults >= leftChildren) {
      adults -= numAdults
      children -= numChildren
      return true
    }
  }
  return false
}

enter(2, 1)
console.log('(2,1) -> Adult Leaving:1, Child Leaving:0', leave(1, 0))
console.log(occupancy())

enter(1, 1)
console.log('(1,1) -> Al:1, Cl:0', leave(1, 0))
console.log(occupancy())

enter(2, 2)
console.log('(2,2) Al:1, Cl:0', leave(1, 0))
console.log(occupancy())

enter(1, 1)
console.log('(1,1) -> Al:1, Cl:2', leave(1, 2))
console.log(occupancy())

enter(1, 1)
console.log('(1,1) -> Al:2, Cl:1', leave(2, 1))
console.log(occupancy())

enter(1, 1)
console.log('(1,1) -> Al:0, Cl:1', leave(0, 1))
console.log(occupancy())

enter(2, 2)
console.log('(2,2) -> Al:1, Cl:2', leave(1, 2))
console.log(occupancy())

enter(2, 2)
console.log('(2,2) -> Al:2, Cl:2', leave(2, 2))
console.log(occupancy())

// TODO: Change the undefined values below to the name of your functions
module.exports = {
  enter: enter,
  leave: leave,
  occupancy: occupancy
}
