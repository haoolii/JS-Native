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

  var aysncExcept = function(time) {
    return new Promise((resovle, reject) => {
      setTimeout(resovle, time)
    })
  }

  test('Promise resolve then function', () => {
    var _fun = function() {
      return new myOwnPromise((resovle, reject) => {
        arr.push('1')
        setTimeout(() => {
          resovle('2')
        }, 100)
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
        }, 100)
      })
    }
    _fun_native().then(n => {
      arr_native.push(n)
      arr_native.push('3')
    })

    return aysncExcept(500).then(() => {
      expect(arr).toStrictEqual(arr_native)
    })
  })
})
