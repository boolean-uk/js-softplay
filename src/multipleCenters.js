// array of all centers
const centers = []

// here is what the object of the individual place looks like
function center(sport) {
  this.id = centers.length
  this.sport = sport
  this.enter = (adultsEntering, childrenEntering) => {
    if (adultsEntering >= childrenEntering) {
      this.currentPresence.adults += adultsEntering
      this.currentPresence.children += childrenEntering
      this.totalTally.adults += adultsEntering
      this.totalTally.children += childrenEntering
      return true
    } else {
      return false
    }
  }
  this.leave = (adultsLeaving, childrenLeaving) => {
    if (adultsLeaving >= childrenLeaving && this.currentPresence.adults - childrenLeaving >= this.currentPresence.children - childrenLeaving) {
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

printCenter(2)
enterIntoCenter(2, 1, 1)
console.log(occupancy(2))
enterIntoCenter(2, 1, 1)
console.log(occupancy(2))
printCenter(2)
leaveCenter(2, 1, 1)
console.log(occupancy(2))