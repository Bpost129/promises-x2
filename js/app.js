// const p = new Promise(function(resolve, reject) {
// synchronous promise  
  // console.log(resolve, reject)
  // let value = 41
  // resolve(value)

// asynchronous promise
  // setTimeout(function() {
  //   reject('Time is up!')
  // }, 2000)
// })

// p.then(function(result) {
//   console.log(result, '<-- first .then')
//   return 42
// })
// .then(function(result) {
//   console.log(result, '<-- second .then')
//   return 'Done!'
// })
// .then(function(result) {
//   console.log(result, '<-- third .then')
// })

// .catch(function(err) {
//   console.log(err)
// })


function asyncAdd(a, b, delay) {
  return new Promise(function(resolve) {
    setTimeout(function() {
      resolve(a + b)
    }, delay)
  })
}


asyncAdd(2, 3, 2000)
.then(function(sum) {
  console.log(sum)
  return asyncAdd(sum, 100, 1000)
})
.then(function(sum) {
  console.log(sum)
})