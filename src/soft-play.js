let numAdults = 0; // Counter for the number of adults currently inside
let numChildren = 0; // Counter for the number of children currently inside
let totalAdults = 0; // Counter for the total number of adults entered
let totalChildren = 0; // Counter for the total number of children entered

// Function to register adults and children entering the soft play center
function enter(numAdultsEntering, numChildrenEntering) {
  // Check if children are entering without adults
  if (numChildrenEntering > numAdultsEntering) {
    return false; // Child needs at least 1 adult
  }
  
  // Update the counts for adults and children
  numAdults += numAdultsEntering;
  numChildren += numChildrenEntering;
  
  // Update the total counts
  totalAdults += numAdultsEntering;
  totalChildren += numChildrenEntering;

  return true; // Entry successful
}

// Function to register adults and children leaving the soft play center
function leave(numAdultsLeaving, numChildrenLeaving) {
  // Check if more children are leaving than adults
  if (numChildrenLeaving > numAdultsLeaving) {
    return false; // More children leaving than adults
  }
  
  // Check if attempting to leave more than entered
  if (numAdultsLeaving + numChildrenLeaving > numAdults + numChildren) {
    return false; // Trying to leave more than entered
  }
  
  // Check if children are left without an adult
  if (numAdults - numAdultsLeaving < numChildren - numChildrenLeaving) {
    return false; // Child left without adult
  }
  
  // Update the counts for adults and children
  numAdults -= numAdultsLeaving;
  numChildren -= numChildrenLeaving;

  return true; // Leave successful
}

// Function to get the current occupancy
function occupancy() {
  return {
    adults: numAdults,
    children: numChildren,
  };
}

// Function to get the total counts of adults and children entered
function total() {
  return {
    adults: totalAdults,
    children: totalChildren,
  };
}

module.exports = {
  enter: enter,
  leave: leave,
  occupancy: occupancy,
  total: total, // Include the 'total' function in exports
};
