// do not change these lines
let adults = 0
let children = 0

// TODO: Write your functions in the below section. Your functions should update
// the adults and children variables defined above.
// Start with the occupancy function.
let allTimeAdults = 0,
  allTimeChildren = 0
function enter(nAdults, nChildren) {
  //Every child entering the soft play center is accompanied by at least 1 adult.
  if (nAdults >= nChildren && nChildren >= 1) {
    adults += nAdults
    children += nChildren
    //
    allTimeAdults += nAdults
    allTimeChildren += nChildren
    return true
  } else {
    //Cant enter without a child, or an adult
    return false
  }
}
function total() {
  return { adults: allTimeAdults, children: allTimeChildren }
}

function leave(nAdults, nChildren) {
  /*
   * A child is not attempting to leave without an adult
   * The number of adults and children left inside the center will not cause there to be more children than adults (there must be at least 1 adult for 1 child inside the center at all times)
   * Every child leaving the soft play center is accompanied by at least 1 adult.
   * The number of adults and children attempting to leave is not greater than the number currently inside the center
   */
  const hasAnAdultLeavingWith = nAdults >= nChildren
  const hasAnAdultForEachChildInsideCenter =
    adults - nAdults >= children - nChildren
  const peopleDontGrowOnTrees = adults + children >= nAdults + nChildren

  if (
    hasAnAdultLeavingWith &&
    hasAnAdultForEachChildInsideCenter &&
    peopleDontGrowOnTrees
  ) {
    adults -= nAdults
    children -= nChildren
    return true
  } else return false
}

function occupancy() {
  return { adults, children }
}

// TODO: Change the undefined values below to the name of your functions
module.exports = {
  enter,
  leave,
  occupancy,
  total
}
