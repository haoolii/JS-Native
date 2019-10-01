Function.prototype.myOwnCall = function(someOtherThis) {
  someOtherThis = someOtherThis || global
  var uniqueID = '00' + Math.random()
  while (someOtherThis.hasOwnProperty(uniqueID)) {
    uniqueID = '00' + Math.random()
  }
  someOtherThis[uniqueID] = this
  const args = []

  for (var i = 1, len = arguments.length; i < len; i++) {
    args.push('arguments[' + i + ']')
  }
  var result = eval('someOtherThis[uniqueID](' + args + ')')
  delete someOtherThis[uniqueID]
  return result
}

Function.prototype.myOwnApply = function(someOtherThis, arr) {
  someOtherThis = someOtherThis || global
  var uniqueID = '00' + Math.random()
  while (someOtherThis.hasOwnProperty(uniqueID)) {
    uniqueID = '00' + Math.random()
  }
  someOtherThis[uniqueID] = this

  var args = []
  var result = null
  if (!arr) {
    result = someOtherThis[uniqueID]()
  } else {
    for (let i = 1, len = arr.length; i < len; i++) {
      args.push('arr[' + i + ']')
    }
    result = eval('someOtherThis[uniqueID](' + args + ')')
  }

  delete someOtherThis[uniqueID]
  return result
}
const person = {
  title: 'person'
}

Function.prototype.myOwnBind = function(newThis) {
  if (typeof this !== 'function') {
    throw new Error(this + "cannot be bound as it's not callable")
  }
  var boundTargetFunction = this
  var boundArguments = Array.prototype.slice.call(arguments, 1)
  return function boundFunction() {
    // here the arguments refer to the second time when we call the target function returned from bind
    var targetArguments = Array.prototype.slice.call(arguments)
    return boundTargetFunction.apply(
      newThis,
      boundArguments.concat(targetArguments)
    )
  }
}

// https://blog.usejournal.com/implement-your-own-call-apply-and-bind-method-in-javascript-42cc85dba1b