const p = new Promise(function(resolve, reject) {
// synchronous promise  
  // console.log(resolve, reject)
  // let value = 42
  // resolve(value)

// asynchronous promise
  setTimeout(function() {
    reject('Time is up!')
  }, 2000)
})

p.then(function(result) {
  console.log(result)
}).catch(function(err) {
  console.log(err)
})
