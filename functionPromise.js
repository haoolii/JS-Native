var myOwnPromise = function(executor) {
  var self = this
  self.status = 'pending'
  self.data = undefined
  self.onResolvedCallback = []
  self.onRejectedCallback = []

  function resolve(value) {
    if (self.status === 'pending') {
      self.status = 'resolved'
      self.data = value
      for (var i = 0; i < self.onResolvedCallback.length; i++) {
        self.onResolvedCallback[i](value)
      }
    }
  }

  function reject(reason) {
    if (self.status === 'pending') {
      self.status = 'rejected'
      self.data = reason
      for (var i = 0; i < self.onRejectedCallback.length; i++) {
        self.onRejectedCallback[i](reason)
      }
    }
  }

  try {
    executor(resolve, reject)
  } catch (e) {
    reject(e)
  }
}

myOwnPromise.prototype.then = function(onResolved, onRejected) {
  var self = this

  onResolved =
    typeof onResolved === 'function' ? onResolved : function(value) {}
  onRejected =
    typeof onRejected === 'function' ? onRejected : function(reason) {}

  if (self.status === 'resolved') {
    return new myOwnPromise(function(resolve, reject) {
      try {
        var x = onResolved(self.data)
        if (x instanceof myOwnPromise) {
          x.then(resolve, reject)
        }
        resolve(x)
      } catch (e) {
        reject(e)
      }
    })
  }

  if (self.status === 'rejected') {
    return (promise2 = new myOwnPromise(function(resolve, reject) {
      try {
        var x = onRejected(self.data)
        if (x instanceof myOwnPromise) {
          x.then(resolve, reject)
        }
      } catch (e) {
        reject(e)
      }
    }))
  }

  if (self.status === 'pending') {
    return (promise2 = new Promise(function(resolve, reject) {
      self.onResolvedCallback.push(function(value) {
        try {
          var x = onResolved(self.data)
          if (x instanceof myOwnPromise) {
            x.then(resolve, reject)
          }
        } catch (e) {
          reject(e)
        }
      })

      self.onRejectedCallback.push(function(reason) {
        try {
          var x = onRejected(self.data)
          if (x instanceof myOwnPromise) {
            x.then(resolve, reject)
          }
        } catch (e) {
          reject(e)
        }
      })
    }))
  }
}

myOwnPromise.prototype.catch = function(onRejected) {
  return this.then(null, onRejected)
}

module.exports = { myOwnPromise }
