const p = new Promise(function(resolve, reject) {
  // console.log(resolve, reject)
  let value = 42
  resolve(value)
})

console.log(p)