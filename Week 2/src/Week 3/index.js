// promise dan callback function
var nontonYoutube = new Promise(function (resolve, reject, headset) {
    var success = headset;
    if (success) {
        resolve('Berhasil');
    }
    else {
        reject('Gagal');
    }
});
console.log(nontonYoutube.then(function (res) {
    console.log(res);
}).catch(function (err) {
    console.log(err);
}));

const b = () => {
  console.log("AAAAAAAAAAAAAAAAAAAAAA");
};
const headset = () => {
  setTimeout(b, 2000);
};

console.log(headset());