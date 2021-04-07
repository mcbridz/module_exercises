const _ = {}

_.each = (array, iteratee) => {
  for (let i = 0; i < array.length; ++i) {
    iteratee(array[i], i, array)
  }
}

_.map = (array, iteratee) => {
  var output = []
  for (let i = 0; i < array.length; ++i) {
    output.push(iteratee(array[i], i, array))
  }
  return output
}

_.filter = (array, predicate) => {
  var output = []
  for (let i = 0; i < array.length; ++i) {
    if (predicate(array[i], i, array)) {
      output.push(array[i])
    }
  }
  return output
}


_.find = (array, predicate) => {
  for (let i = 0; i < array.length; ++i) {
    if (predicate(array[i], i, array)) {
      return array[i]
    }
  }
}


_.random = (min, max) => {
  // var clock = new Date()
  // return (clock.getTime() % (max - min) + min)
  return Math.floor(Math.random() * (max - min)) + min
}

_.range = (start, stop, step) => {
  var output = []
  for (let i = start; i < stop; step ? i += step : ++i) {
    output.push(i)
  }
  return output
}

_.extend = (destination, ...args) => {
  for (let i = 0; i < args.length; ++i) {
    var newObj = args[i]
    destination = { ...destination, ...newObj }
  }
  return destination
}

_.times = (n, iteratee) => {
  var output = []
  for (let i = 0; i < n; ++i) {
    output.push(iteratee(n))
  }
  return output
}

_.constant = (value) => {
  return () => { return value }
}

_.delay = (func, wait, ...args) => {

}

export default _
