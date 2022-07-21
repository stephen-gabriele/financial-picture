export default {transactions: 'http://localhost:3000/api/transactions',
          auth: 'http://localhost:3000/api/auth',
          users: 'http://localhost:3000/api/users'
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