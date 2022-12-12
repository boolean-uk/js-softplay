class SoftPlay {
  constructor(numAdults, numChildren) {
    this.numAdults = numAdults
    this.numChildren = numChildren
  }

  enter(numAdults, numChildren) {
    // 🔴 More children entering than adults
    if (numChildren > numAdults) return false

    // 🟢 Passed
    this.numAdults += numAdults
    this.numChildren += numChildren
  }

  leave(numAdults, numChildren) {
    // 🔴 More Leaving than there actualy are
    if (numAdults > this.numAdults || numChildren > this.numChildren)
      return false

    // 🔴 More adults leaving, children will be left alone
    const enoughtAdultsRemaining =
      this.numAdults - numAdults < this.numChildren - numChildren
    if (!enoughtAdultsRemaining) return false

    // 🔴 More children leaving than adults
    if (numChildren > numAdults) return false

    // 🟢 Passed
    this.numAdults -= numAdults
    this.numChildren -= numChildren
  }

  occupancy() {
    return {
      adults: this.numAdults,
      children: this.numChildren
    }
  }
}

module.exports = SoftPlay
