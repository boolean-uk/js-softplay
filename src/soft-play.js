// do not change these lines
let adults = 0
let children = 0

// TODO: Write your functions in the below section. Your functions should update
// the adults and children variables defined above.
// Start with the occupancy function.

// first we initialize the variables that keep track of the adults and kids
let numAdults = 0;
let numChildren = 0;

// here is what the object of the softballCenter looks like
let softballCenter = {
  "adults": numAdults,
  "children": numChildren
}

// here's the tracker that tracks the total
let softballCenterTotal = {
  "adults": 0,
  "children": 0,
}

// function that basically only prints out the current state of the softball-Center-object
const occupancy = (() => softballCenter)
const total = (() => softballCenterTotal)

//adding shit so i can easily reset them – not necessarily used
const resetOccupancy = (() => {
  softballCenter.adults = 0,
  softballCenter.children = 0
})

const resetTotalCount = (() => {
  softballCenterTotal.adults = 0,
  softballCenterTotal.children = 0
})

// softballCenter.adults += 1
// console.log("occupancy after adding one adult manually", occupancy())

enter = (num1, num2) => {
  if (num1 >= num2) {
    softballCenter.adults += num1
    softballCenter.children += num2
    softballCenterTotal.adults += num1
    softballCenterTotal.children += num2
    return true
  } else {
    return false
  }
}

leave = (num1, num2) => {
  if (num1 >= num2 && softballCenter.adults - num1 >= softballCenter.children - num2) {
    softballCenter.adults -= num1
    softballCenter.children -= num2
    return true
  } else {
    return false
  }
}

// TODO: Change the undefined values below to the name of your functions
module.exports = {
  enter: enter,
  leave: leave,
  occupancy: occupancy,
  total: total,
}