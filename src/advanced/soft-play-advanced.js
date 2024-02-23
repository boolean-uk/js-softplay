// do not change these lines
// let adults = 0
// let children = 0
// let adultsLeaving = 0
// let childrenLeaving = 0

// TODO: Write your functions in the below section. Your functions should update
// the adults and children variables defined above.
// Start with the occupancy function.
class Softplay {
  constructor(entranceRatio, occupancyRatio) {
    this.entranceRatio = entranceRatio // Add as adult:child
    this.occupancyRatio = occupancyRatio // Add as adult:child
    this.adults = 0
    this.children = 0
    this.adultsLeaving = 0
    this.childrenLeaving = 0
    this.occupancyValueTotal = {
      adults: 0,
      children: 0
    }
  }
}
// Example object to show the configuration for other softplays to be added to the platform

// softplay = {
//   entranceRatio: '1:1',
//   occupancyRatio: '1:1',
//   adults: 0,
//   children: 0,
//   adultsLeaving: 0,
//   childrenLeaving: 0,
//   occupancyValueTotal: {
//     adults: 0,
//     children: 0
//   }
// }

const softplay = new Softplay('1:1', '1:1')

const softplay2 = new Softplay('1:1', '1:1')

const softplay3 = new Softplay('1:1', '1:1')

function occupancy(softPlayCentre) {
  const occupancyValue = {}
  occupancyValue.adults = softPlayCentre.adults
  occupancyValue.children = softPlayCentre.children

  if (occupancyValue.adults === undefined || occupancyValue.adults === '') {
    occupancyValue.adults = 0
  }

  if (occupancyValue.children === undefined || occupancyValue.children === '') {
    occupancyValue.children = 0
  }

  return occupancyValue
}
function enter(numAdults, numChildren, softPlayCentre) {
  entranceRatio = softPlayCentre.entranceRatio.split(':')

  console.log(Number(entranceRatio[0]) + ' ' + Number(entranceRatio[1]))
  if (Number(entranceRatio[0]) === 0 || Number(entranceRatio[1]) === 0) {
    throw new Error(
      'Your softplay entrance ratio is not configured correctly, please ensure that neither value is 0'
    )
  }

  if (
    numAdults / Number(entranceRatio[0]) <
    numChildren / Number(entranceRatio[1])
  ) {
    return false
  }

  softPlayCentre.adults += numAdults
  softPlayCentre.children += numChildren
  return true
}
function leave(numAdults, numChildren, softPlayCentre) {
  if (
    softPlayCentre.occupancyRatio.split(':')[0] === 0 ||
    softPlayCentre.occupancyRatio.split(':')[1] === 0
  ) {
    throw new Error(
      'Your softplay entrance ratio is not configured correctly, please ensure that neither value is 0'
    )
  }
  if (
    numAdults < numChildren ||
    numAdults > softPlayCentre.adults ||
    numChildren > softPlayCentre.children ||
    softPlayCentre.adults / softPlayCentre.occupancyRatio.split(':')[0] -
      numAdults <
      softPlayCentre.children / softPlayCentre.occupancyRatio.split(':')[1] -
        numChildren ||
    numAdults === '' ||
    numChildren === '' ||
    numAdults === undefined ||
    numChildren === undefined
  ) {
    return false
  }

  softPlayCentre.adults -= numAdults
  softPlayCentre.children -= numChildren
  softPlayCentre.adultsLeaving += numAdults
  softPlayCentre.childrenLeaving += numChildren

  return true
}

function total(softPlayCentre) {
  if (
    softPlayCentre.occupancyValueTotal.adults === undefined ||
    softPlayCentre.occupancyValueTotal.adults === ''
  ) {
    softPlayCentre.occupancyValueTotal.adults = 0
  }

  if (
    softPlayCentre.occupancyValueTotal.children === undefined ||
    softPlayCentre.occupancyValueTotal.children === ''
  ) {
    softPlayCentre.occupancyValueTotal.children = 0
  }

  softPlayCentre.occupancyValueTotal.adults +=
    softPlayCentre.adults + softPlayCentre.adultsLeaving
  softPlayCentre.occupancyValueTotal.children +=
    softPlayCentre.children + softPlayCentre.childrenLeaving

  return softPlayCentre.occupancyValueTotal
}

// console.log(enter(1, 2, softplay)) // nope
// console.log(enter(2, 2, softplay))
// console.log(leave(1, 0, softplay)) // nope
// console.log(enter(0, 1, softplay)) // nope
// console.log(enter(1, 1, softplay))
// console.log(leave(3, 3, softplay))
// console.log(occupancy(softplay))
// console.log(total(softplay))

// console.log('------------------------')

// console.log(enter(1, 1, softplay2))
// console.log(enter(2, 1, softplay2))
// console.log(leave(1, 0, softplay2))
// console.log(enter(1, 1, softplay2))
// console.log(enter(2, 1, softplay2))
// console.log(leave(1, 1, softplay2))
// console.log(occupancy(softplay2))
// console.log(total(softplay2))

// console.log('------------------------')

// console.log(enter(1, 2, softplay3)) // nope
// console.log(enter(2, 2, softplay3))
// console.log(leave(1, 0, softplay3)) // nope
// console.log(enter(0, 1, softplay3)) // nope
// console.log(enter(1, 1, softplay3))
// console.log(leave(3, 3, softplay3))
// console.log(occupancy(softplay3))
// console.log(total(softplay3))

// TODO: Change the undefined values below to the name of your functions
module.exports = {
  enter: enter,
  leave: leave,
  occupancy: occupancy,
  total: total
}
