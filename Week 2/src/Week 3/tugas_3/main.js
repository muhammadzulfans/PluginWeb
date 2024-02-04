fetch ('https://jsonplaceholder.typicode.com/users')
.then((name) => name.json())

.then(json => json.map(hasil => {
    console.log(hasil.name);
}))

// .then((result) => console.log(result[0].name))
// // .catch(err => console.log(err))
