var { myOwnPromise } = require('./functionPromise')

describe('Test Promise Function Block', () => {
  var arr
  var arr_native
  beforeEach(() => {
    arr = []
    arr_native = []
  })
  afterEach(() => {
    arr = null
    arr_native = null
  })

  test('Promise resolve then function', () => {
    var _fun = function() {
      return new myOwnPromise((resovle, reject) => {
        arr.push('1')
        setTimeout(() => {
          resovle('2')
        }, 3000)
      })
    }
    _fun().then(n => {
      arr.push(n)
      arr.push('3')
    })

    var _fun_native = function() {
      return new Promise((resovle, reject) => {
        arr_native.push('1')
        setTimeout(() => {
          resovle('2')
        }, 3000)
      })
    }
    _fun_native().then(n => {
      arr_native.push(n)
      arr_native.push('3')
    })

    setTimeout(() => {
      expect(arr).toEqual(arr_native)
    }, 5000);
  })
})
