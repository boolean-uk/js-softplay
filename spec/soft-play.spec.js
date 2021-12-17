const {enter, leave, occupancy, reset, total,} = require('../src/soft-play.js')

describe("Soft Play", () => {  
  
  it("Initial state is empty", function() {
    reset()
    expect(occupancy()).toEqual({adults: 0, children: 0})
  })

  it("Single adult and child enter", function() {
    reset()
    expect(enter(1,1)).toBeTrue()
    expect(occupancy()).toEqual({adults: 1, children: 1})
  })

  it("Adult can leave when adults 2 and children 1", function() {
    reset()
    enter(2,1)
    expect(leave(1,0)).toBeTrue()
    expect(occupancy()).toEqual({adults: 1, children: 1})
  })

  it("Adult cannot leave when adults 1 and children 1", function() {
    reset()
    enter(1,1)
    expect(leave(1,0)).toBeFalse()
    expect(occupancy()).toEqual({adults: 1, children: 1})
  })

  it("More children cannot leave than are in the soft play center", function() {
    reset()
    expect(enter(1,1)).toBeTrue()
    expect(leave(1,2)).toBeFalse()
    expect(occupancy()).toEqual({adults: 1, children: 1})
  })

  it("Child cannot enter on own", function() {
    reset()
    expect(enter(0,1)).toBeFalse()
    expect(occupancy()).toEqual({adults: 0, children: 0})
  })

  it("Child cannot leave on own", function() {
    reset()
    enter(1,1)
    expect(leave(0,1)).toBeFalse()
    expect(occupancy()).toEqual({adults: 1, children: 1})
  })

  it("Adult can leave with children", function() {
    reset()
    enter(2,1)
    expect(leave(2,1)).toBeTrue()
    expect(occupancy()).toEqual({adults: 0, children: 0})
  })

  it("More Children than Adults", function() {
    reset()
    expect(enter(1,2)).toBeFalse()
    expect(occupancy()).toEqual({adults: 0, children: 0})
  })

  it("Children leaving without adults", function() {
    reset()
    enter(3,1)
    expect(leave(0,1)).toBeFalse()
    expect(occupancy()).toEqual({adults: 3, children: 1})
  })

  it("Always same or more adults than children", function() {
    reset()
    enter(3,3)
    expect(leave(1,0)).toBeFalse()
    expect(occupancy()).toEqual({adults: 3, children: 3})
  })

  it("More adults or children leaving than in centre", function() {
    reset()
    enter(1,1)
    expect(leave(2,2)).toBeFalse()
    expect(occupancy()).toEqual({adults: 1, children: 1})
  })

  it("Total is recorded correctly", function() {
    reset()
    enter(1,1)
    enter(2,1)
    enter(8,6)
    leave(2,2)
    expect(occupancy()).toEqual({adults: 9, children: 6})
    expect(total()).toEqual({adults: 11, children: 8})
  })

  
  it("More adults or children leaving than in centre", function() {
    reset()
    enter(1,1)
    expect(leave(1,1)).toBeTrue()
    expect(occupancy()).toEqual({adults: 0, children: 0})
  })
})

