Array.prototype.myOwnForeach = function(cb) {
  for (var i of this) cb.call(this, i)
}

Array.prototype.myOwnMap = function(cb) {
  var arr = []
  for (var i = 0; i < this.length; i++) arr[i] = cb.call(this, this[i])
  return arr
}

Array.prototype.myOwnFilter = function(cb) {
  var arr = []
  for (var i of this) cb.call(this, i) ? arr.push(i) : false
  return arr
}

Array.prototype.myOwnReduce = function(reducer, curr) {
  var _curr = curr
  for (var i = this.length - 1; i >= 0; i--)
    _curr = reducer.call(this, this[i], _curr)
  return _curr
}

Array.prototype.myOwnEvery = function(cb) {
  var res = true
  for (var i of this) res = cb.call(this, i) && res
  return res
}

Array.prototype.myOwnSome = function(cb) {
  var res = false
  for (var i of this) res = cb.call(this, i) || res
  return res
}

module.exports = {}
