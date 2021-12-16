// do not change these lines
function reset () {
  adults = 0
  children = 0
}

let adults = 0
let children = 0

// TODO: Write your functions in the below section. Your functions should update
// the adults and children variables defined above.
function enter (adultsNum, childrenNum) {
  if (adultsNum >= childrenNum) {
    adults += adultsNum
    children += childrenNum
    return true
  } else {
    return false
  }
}
function leave (adultsNum, childrenNum) {
  if (adultsNum === 0 && childrenNum > 0) {
    return false
  } else if (adults - adultsNum === 0 && children - childrenNum !== 0) {
    return false
  } else if (adults === 0 || children === 0) {
    return false
  } else if (adultsNum > adults || childrenNum > children) {
    return false
  } else {
    adults -= adultsNum
    children -= childrenNum
    return true
  }
}

const occ = {
  adults: 0,
  children: 0
}
function occupancy () {
  occ.adults = adults
  occ.children = children
  return occ
}

// TODO: Change the undefined values below to the name of your functions
module.exports = {
  enter: enter,
  leave: leave,
  occupancy: occupancy,
  reset: reset
}
