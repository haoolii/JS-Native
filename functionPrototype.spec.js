require('./functionPrototype')

describe('Test Function.prototype Block', () => {
  var person = {}
  var printName

  beforeEach(() => {
    person = {
      name: 'Neil'
    }
    printName = function(message) {
      return `${this.name} say: ${message}`
    }
  })
  afterEach(() => {
    person = null
    printName = null
  })

  test('Function.prototype.call', () => {
    expect(printName.myOwnCall(person, 'Hello!')).toEqual(
      printName.call(person, 'Hello!')
    )
  })

  test('Function.prototype.apply', () => {
    expect(printName.myOwnApply(person, ['Hello!'])).toEqual(
      printName.apply(person, ['Hello!'])
    )
  })

  test('Function.prototype.bind', () => {
    expect(printName.myOwnBind(person, 'Hello!')()).toEqual(
      printName.bind(person, 'Hello!')()
    )
  })
})
