export default function () {
  return {transactions: 'http://localhost:3000/api/transactions',
          auth: 'http://localhost:3000/api/auth'}
}

// const authentication = async (email, password) => {
//   fetch('http://localhost:3000/api/auth', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//       accept: 'x-auth-token'
//     },
//     body: JSON.stringify({email : email, password: password})
//   })
//     .then(response => console.log(response.headers.get('x-auth-token')))
// }