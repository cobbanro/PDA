var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  })

  it('it can add', function(){
    calculator.previousTotal = 0
    calculator.add(2)
    assert.equal(2, calculator.runningTotal)
  })

  it('it can subtract', function(){
    calculator.previousTotal = 2
    calculator.subtract(2)
    assert.equal(0, calculator.runningTotal)
  })

  it('it can multiply', function(){
    calculator.previousTotal = 2
    calculator.multiply(2)
    assert.equal(4, calculator.runningTotal)
  })

  it('it can divide', function(){
    calculator.previousTotal = 4
    calculator.divide(2)
    assert.equal(2, calculator.runningTotal)
  })

  it('it can concatenate a value after click', function(){
    calculator.numberClick(2)
    calculator.numberClick(2)
    assert.equal(22, calculator.runningTotal)
  })

  it('it can clear running total and reset newTotal when there is a 0 in the running total or operation has been completed', function(){
  calculator.runningTotal = 10
  calculator.numberClick(2)
  assert.equal(2, calculator.runningTotal)
  assert.equal(false, calculator.newTotal)
  })

  it('it can perform addition on a number', function (){
    calculator.numberClick(5)
    calculator.operatorClick('+')
    calculator.numberClick(5)
    calculator.operatorClick('=')
    assert.equal(10, calculator.runningTotal)
  })

  it('it can perform division on a number', function (){
    calculator.numberClick(5)
    calculator.operatorClick('/')
    calculator.numberClick(5)
    calculator.operatorClick('=')
    assert.equal(1, calculator.runningTotal)
  })

  it('it can perform subraction on a number', function (){
    calculator.numberClick(5)
    calculator.operatorClick('-')
    calculator.numberClick(5)
    calculator.operatorClick('=')
    assert.equal(0, calculator.runningTotal)
  })

  it('it can perform multiplication on a number', function (){
    calculator.numberClick(5)
    calculator.operatorClick('*')
    calculator.numberClick(100)
    calculator.operatorClick('=')
    assert.equal(500, calculator.runningTotal)
  })

  it('it can clear the previous calculation', function (){
    calculator.runningTotal = 12
    calculator.clearClick()
    assert.equal(0, calculator.runningTotal)
  })

})
