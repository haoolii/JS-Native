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

myOwnPromise.prototype.then = function() {
  var self = this

  onResolved = typeof onResolved === 'function' ? onResolved : function(v) {}
  onRejected = typeof onRejected === 'function' ? onRejected : function(r) {}

  if (self.status === 'resolved') {
    return new myOwnPromise(function(resolve, reject) {})
  }

  if (self.status === 'rejected') {
    return new myOwnPromise(function(resolve, reject) {})
  }

  if (self.status === 'pending') {
    return new myOwnPromise(function(resolve, reject) {})
  }
}

module.exports = { myOwnPromise }
