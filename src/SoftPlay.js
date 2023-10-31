let adults = 0;
let children = 0;
const AdultsAndChildren = { adults: 0, children: 0 };


// TODO: Write your functions in the below section. Your functions should update
// the adults and children variables defined above.
// Start with the occupancy function.


const enter = (numbAdults, numbChildren) => {
  if (numbChildren > numbAdults) {
    return false
  } else {
    adults += numbAdults
    children += numbChildren
    AdultsAndChildren.adults += numbAdults
    AdultsAndChildren.children += numbChildren

    return true
  }
}

const leave = (numbAdults, numbChildren) => {
  if (numbChildren > numbAdults || adults - numbAdults < children - numbChildren) {
    return false
  } else {
    adults -= numbAdults
    children -= numbChildren

    return true
  }
}

const total = () => AdultsAndChildren

const occupancy = () => ({ adults: adults, children: children })

// TODO: Change the undefined values below to the name of your functions
module.exports = {
  enter: enter,
  leave: leave,
  occupancy: occupancy,
}
