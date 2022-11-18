// do not change these lines
let adults = 0
let children = 0

// TODO: Write your functions in the below section. Your functions should update
// the adults and children variables defined above.
// Start with the occupancy function.
function occupancy() {
  return {
    adults: adults,
    children: children
  }
}

function incrementAdult() {
  adults++
}
function incrementChildren() {
  children++
}

function decrementAdult() {
  adults--
}
function decrementChild() {
  children--
}

function enter(numAdult, numChildren) {
  let value = true

  if (numChildren <= numAdult) {
    
    console.log(value)
    for (let i = 0; i < numAdult; i++) {
      incrementAdult()
    }
    for (let i = 0; i < numChildren; i++) {
      incrementChildren()
    }
  } else {
    value = false
  }
  return value
}
//console.log(enter(1, 1))

function leave(leavAdult, leavChildren) {
  let value = true
  const remainAdult = adults - leavAdult
  const remainChildren = children - leavChildren
  if (leavChildren > leavAdult) {
    return false
  }
  if (leavAdult === 0 && leavChildren > 0) {
    return false
  }
  if (remainAdult < 0) {
    return false
  }
  if (remainChildren < 0) {
    return false
  }
  if (remainAdult >= remainChildren) {
    value = true
    for (let i = 0; i < leavAdult; i++) {
      decrementAdult()
    }
    for (let i = 0; i < leavChildren; i++) {
      decrementChild()
    }
  } else {
    value = false
  }
  return value
}
//console.log(leave(2, 2))

// TODO: Change the undefined values below to the name of your functions
module.exports = {
  enter: enter,
  leave: leave,
  occupancy: occupancy
}
