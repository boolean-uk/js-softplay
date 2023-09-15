// array of all centers
const centers = []

// here is what the object of the individual place looks like
function center(sport) {
  this.id = centers.length
  this.sport = sport
  this.enteringCheck = (adultsEntering, childrenEntering) => adultsEntering >= childrenEntering ? true : false
  this.enter = (adultsEntering, childrenEntering) => {
    if (this.enteringCheck(adultsEntering, childrenEntering)) {
      this.currentPresence.adults += adultsEntering
      this.currentPresence.children += childrenEntering
      this.totalTally.adults += adultsEntering
      this.totalTally.children += childrenEntering
      return true
    } else {
      return false
    }
  }
  this.leavingCheck = (adultsLeaving, childrenLeaving) => (adultsLeaving >= childrenLeaving && this.currentPresence.adults - childrenLeaving >= this.currentPresence.children - childrenLeaving) ? true : false
  this.leave = (adultsLeaving, childrenLeaving) => {
    if (this.leavingCheck(adultsLeaving, childrenLeaving)) {
      this.currentPresence.adults -= adultsLeaving
      this.currentPresence.children -= childrenLeaving
      return true
    } else {
      return false
    }
  }
  this.currentPresence = {
    adults: 0,
    children: 0
  }
  this.totalTally = {
    adults: 0,
    children: 0
  }
}

const addCenter = (sport) => centers.push(new center(sport))

addCenter("football")
addCenter("softball")
addCenter("handball")

const enterIntoCenter = (id, adultsEntering, childrenEntering) => centers[id].enter(adultsEntering, childrenEntering)
const leaveCenter = (id, adultsLeaving, childrenLeaving) => centers[id].leave(adultsLeaving, childrenLeaving)
const occupancy = (id) => centers[id].currentPresence
const total = (id) => centers[id].totalTally
const printCenter = (id) => console.log(centers[id])
const changeEnteringRules = (id, conditions) => centers[id].enteringCheck = conditions

printCenter(2)
enterIntoCenter(2, 1, 1)
console.log(occupancy(2))
enterIntoCenter(2, 4, 1)
console.log(occupancy(2))
printCenter(2)
// let's change some rules!
const newRules = (adultsEntering, childrenEntering) => adultsEntering >= 2*childrenEntering ? true : false
changeEnteringRules(2, newRules)
printCenter(2)
enterIntoCenter(2, 1, 1)
console.log(occupancy(2))
enterIntoCenter(2, 4, 1)
console.log(occupancy(2))
leaveCenter(2, 1, 1)
console.log(occupancy(2))