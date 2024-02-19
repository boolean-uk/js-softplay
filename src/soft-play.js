// do not change these lines
let adults = 0
let children = 0
let totalAdults = 0
let totalChildren = 0

function enter(numAdults, numChildren) {
  if (numChildren > numAdults) {
    return false
  }
  adults += numAdults
  children += numChildren
  totalAdults += numAdults
  totalChildren += numChildren
  return true
}

function leave(numAdults, numChildren) {
  if (
    numChildren > numAdults ||
    adults - numAdults < 0 ||
    children - numChildren < 0
  ) {
    return false
  }

  if (adults - numAdults < children - numChildren) {
    return false
  }

  adults -= numAdults
  children -= numChildren
  return true
}

function occupancy() {
  return { adults: adults, children: children }
}

function total() {
  return { adults: totalAdults, children: totalChildren }
}

/* Reflection
If we want to keep track of multiple soft play centers at the same time,
we would want to create a SoftPlayCenter class. This way we could have each
instantiated SoftPlayCenter keep track of their respective adult/children counter.

If we want different rules for each of the centers, we could have an ISoftPlayCenter interface (or an abstract class)
that gives us a fundamental set of methods to implement, but the methods may vary in how
the rules are implemented.
*/

module.exports = {
  enter: enter,
  leave: leave,
  occupancy: occupancy,
  total: total
}
