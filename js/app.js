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


// function asyncAdd(a, b, delay) {
//   return new Promise(function(resolve) {
//     setTimeout(function() {
//       resolve(a + b)
//     }, delay)
//   })
// }


// asyncAdd(2, 3, 2000)
// .then(function(sum) {
//   console.log(sum)
//   return asyncAdd(sum, 100, 1000)
// })
// .then(function(sum) {
//   console.log(sum)
// })



// const urls = [
//     'https://jsonplaceholder.typicode.com/users',
//     'https://jsonplaceholder.typicode.com/posts',
// 		'https://jsonplaceholder.typicode.com/albums',
// ]

// Promise.all(urls.map(url => 
//   fetch(url).then(response => response.json())
// ))
// .then(data => console.log(data))

// async/await
// const texts = await Promise.all(urls.map(async url => {
//   const response = await fetch(url)
//   return response.json()
// }))

// console.log(texts)

// fetch request using .then

function fetchUser() {
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => {
    return response.json()
  })
  .then(data => {
    console.log(data)
  })
}
fetchUser()

// fetch request using async/await

// async function fetchUser() {
//   const response = await fetch('https://jsonplaceholder.typicode.com/users')
//   const data = await response.json()

//   console.log(data)
// }

// fetchUser()