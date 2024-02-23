// do not change these lines
let adults = 0
let children = 0
let adultsLeaving = 0
let childrenLeaving = 0

// TODO: Write your functions in the below section. Your functions should update
// the adults and children variables defined above.
// Start with the occupancy function.
const softplay =  { //example object to show the configuration for other softplays to be added to the platform
  entranceRatio: '1:1',
  occupanyRatio: '1:1',
  adults: 0,
  children: 0,
  adultsLeaving: 0,
  childrenLeaving :0,
  occupancyValueTotal: {
    adults: 0,
    children: 0
  }
}

function occupancy(softPlayCentre) {
  const occupancyValue = {}
  occupancyValue.adults = softPlayCentre.adults
  occupancyValue.children = softPlayCentre.children

  if (occupancyValue.adults === undefined ||occupancyValue.adults === '') {
    occupancyValue.adults = 0
    
  }

  if (occupancyValue.children === undefined ||occupancyValue.children === ''){
    occupancyValue.children = 0
  }

  return occupancyValue
}
function enter(numAdults, numChildren, softPlayCentre) {
  if (numAdults / softPlayCentre.entranceRatio.split(':')[0] < numChildren / softPlayCentre.entranceRatio.split(':')[1]) {
    return false
  }

  softPlayCentre.adults += numAdults
  softPlayCentre.children += numChildren
  return true
}
function leave(numAdults, numChildren, softPlayCentre) {
  
  if (
    numAdults < numChildren || 
    numAdults > softPlayCentre.adults || 
    numChildren > softPlayCentre.children || 
    softPlayCentre.adults - numAdults < softPlayCentre.children - numChildren ||
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
  if (softPlayCentre.occupancyValueTotal.adults === undefined ||softPlayCentre.occupancyValueTotal.adults === '') {
    softPlayCentre.occupancyValueTotal.adults = 0
    
  }
  
  if (softPlayCentre.occupancyValueTotal.children === undefined ||softPlayCentre.occupancyValueTotal.children === ''){
    softPlayCentre.occupancyValueTotal.children = 0
  }
  
  softPlayCentre.occupancyValueTotal.adults += softPlayCentre.adults + adultsLeaving
  softPlayCentre.occupancyValueTotal.children += softPlayCentre.children + childrenLeaving
  
  return occupancyValueTotal
}
// TODO: Change the undefined values below to the name of your functions
module.exports = {
  enter: enter,
  leave: leave,
  occupancy: occupancy,
  total : total
}
