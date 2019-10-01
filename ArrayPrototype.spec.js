require('./ArrayPrototype')

describe('Test Array.prototype Block', () => {
  var arr1
  var arr2
  var arr3
  var arr4
  var arr5
  var arr6
  var arr7

  beforeEach(() => {
    arr1 = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December'
    ]
    arr2 = [1, 3, 5, 7, 9]
    arr3 = [1, 17, 33, 80, 1950, 9, 55, 6]
    arr4 = [[0, 1], [2, 3], [4, 5]]

    arr5 = [1, 56, 23, 646, 12, 76, 3]
    arr6 = [30, 70, 64, 98]
    arr7 = [888, 9, 0, 5556, -50, -3, 1]
  })

  afterEach(() => {
    arr1 = null
    arr2 = null
    arr3 = null
    arr4 = null
  })

  test('Array.prototype.forEach', () => {
    var _fun = function(el) {
      return el
    }
    expect(arr1.myOwnForeach(_fun)).toEqual(arr1.forEach(_fun))
  })

  test('Array.prototype.map', () => {
    var _fun = function(el) {
      return el
    }
    var _fun2 = function(el) {
      return Math.sqrt(el)
    }
    expect(arr1.myOwnMap(_fun)).toEqual(arr1.map(_fun))
    expect(arr2.myOwnMap(_fun2)).toEqual(arr2.map(_fun2))
  })

  test('Array.prototype.filter', () => {
    var _fun1 = function(el) {
      return el >= 10
    }
    expect(arr3.myOwnFilter(_fun1)).toEqual(arr3.filter(_fun1))
  })

  var _fun1 = function(a, b) {
    return a + b
  }
  var _fun2 = function(a, b) {
    return a.concat(b)
  }
  test('Array.prototype.reduce', () => {
    expect(arr3.myOwnReduce(_fun1, 10)).toEqual(arr3.reduce(_fun1, 10))
    expect(arr4.myOwnReduce(_fun2, [])).toEqual(arr4.reduce(_fun2, []))
  })

  test('Array.prototype.every', () => {
    var _fun1 = function (el) {
      return el >= 10
    }
    var _fun2 = function (el) {
      return el >= 10
    }
    var _fun3 = function (el) {
      return el >= 0
    }
    expect(arr5.myOwnEvery(_fun1)).toEqual(arr5.every(_fun1))
    expect(arr6.myOwnEvery(_fun2)).toEqual(arr6.every(_fun2))
    expect(arr7.myOwnEvery(_fun3)).toEqual(arr7.every(_fun3))
  })

  test('Array.prototype.some', () => {
    var _fun1 = function (el) {
      return el >= 10
    }
    var _fun2 = function (el) {
      return el >= 10
    }
    var _fun3 = function (el) {
      return el >= 0
    }
    expect(arr5.myOwnSome(_fun1)).toEqual(arr5.some(_fun1))
    expect(arr6.myOwnSome(_fun2)).toEqual(arr6.some(_fun2))
    expect(arr7.myOwnSome(_fun3)).toEqual(arr7.some(_fun3))
  })
})
