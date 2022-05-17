// do not change these lines

function reset() {
  adults = 0
  children = 0
}

let adults = 0
let children = 0

function occupancy() {
  return { adults: adults, children: children }
}

function enter(numAdults, numChilds) {
  //console.log('+++++++++ENTER+++++++++');
  //console.log('numAdults: ' + numAdults + ' numChilds: ' + numChilds)
 
  if (numAdults >= numChilds) {
    //console.log('TRUE')
    adults = adults + numAdults;
    children = children + numChilds;
    //console.log('adults:' + adults + 'children:' + children+'\n');
    return true
  } else if (numAdults < numChilds) {
    //console.log('FALSE')
    return false
  }
}
function leave(numAdults, numChilds) {
//console.log('--------LEAVE------------');

  //Adults came out==Adults came in
  //console.log('numAdults:' + numAdults + ' numChilds:' + numChilds);
   
 let childrenRemain = children - numChilds ;
 let adultsRemain = adults - numAdults;
 //console.log('adults:' +adultsRemain+'children:' +childrenRemain);
  if (
    numAdults >= numChilds &&
    numChilds <= children &&
    numAdults <= adults &&
    adultsRemain >=childrenRemain
  ) {
    adults = adultsRemain;
    children =childrenRemain;
   
    //console.log(' TRUE ');
    return true
  } else {
    //console.log(' FALSE ');
    return false
  }
 
}

// TODO: Write your functions in the below section. Your functions should update
// the adults and children variables defined above.

// TODO: Change the undefined values below to the name of your functions
module.exports = {
  enter: enter,
  leave: leave,
  occupancy: occupancy,
  reset: reset
}
