// do not change these lines
let adults = 0
let children = 0

// TODO: Write your functions in the below section. Your functions should update
// the adults and children variables defined above.
// Start with the occupancy function.

// Starting with the occupancy function. Making the object 'humans' and the keys adultNum and childNum. Assigning to the adult and children variable. Using return to return the object 'humans'
function occupancy() {
  const humans = {}
  humans.adults = adults
  humans.children = children
  return humans
}


// Condition is that every child entering - must be accompanied by 1 adult - ///if children are higher than adults then this will fail.
// E.g, adult           child
//        5              2
// so adult       >     child = true
// As a child has to be with at least one adult it will be >= because we cannot have 
//       adult          child
//        5               4
// 
// Adding to totals
// numAdults are adults entering
// adults are adults in the centre
// numChildren are children entering
// children are children in the centre
// Add adults    +    numAdults              =    adults
//     Existing  +    New Adults entering    =    New total for adults

// Add children    +    numChildren          =    children
// Existing  +    New children entering    =      New total for adults
function enter(numAdults, numChildren){

if (numAdults >= numChildren) {
  adults = adults + numAdults
  children = children + numChildren
  return true
}
else {
  return false 
} 
} 


// numAdults are adults leaving
// numChildren are children leaving

// adults are adults in the centre
// children are children in the centre

//condition 1 - make it false
// - Child attempting to leave without adults - false. So numChildren is greater than numAdults.

// condition 2 - make it false
//number of adults and children inside centre - more children than adults in centre, so find out the difference of total adults leaving and in centre, and total children leaving and in centre.

//condition 3 & 4 - make it false
//every child leaving soft play, should not be accompanied by an adult so;
// total adults and children leaving (numAdults + numChildren) - make it greater than total adults and children in the centre

function leave(numAdults, numChildren) {
if (numChildren > numAdults) 
{return false}

else if (children - numChildren > adults - numAdults) 
{return false}

else if (numAdults + numChildren > adults + children)
{return false}

else if (adults < 1 || children < 1)
{return false}

else {
adults = adults - numAdults
children = children - numChildren
return true}}


// console.log(enter(2, 1))
// console.log(occupancy())
// console.log(enter(2, 1))
// console.log(occupancy())
// console.log(enter(1, 4))
// console.log(occupancy())
// console.log(leave(1, 1))
// console.log(occupancy())

// TODO: Change the undefined values below to the name of your functions
module.exports = {
  enter: enter,
  leave: leave,
  occupancy: occupancy
}
