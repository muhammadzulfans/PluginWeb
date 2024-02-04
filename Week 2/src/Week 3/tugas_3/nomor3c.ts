fetch ('https://jsonplaceholder.typicode.com/users/2')
.then((name) => name.json())
.then((result) => console.log(result))
// .catch(err => console.log(err))


// fetch ('https://jsonplaceholder.typicode.com/users')
// .then((name) => name.json:Obj())
// .then(json => json.map(hasil => {
//     console.log(hasil.name);
// }))