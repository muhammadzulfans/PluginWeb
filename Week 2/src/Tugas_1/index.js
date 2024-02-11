function segitiga(panjang) {
    var hasil = '';
    for (var a = panjang; a > 0; a--) {
        for (var b = 1; b <= panjang; b++) {
            if (b >= a) {
                hasil += '  *';
            }
            else {
                hasil += '   ';
            }
        }
        hasil += '\n';
    }
    return hasil;
}
console.log(segitiga(9));





//cetak kata plugin
function plugin(number) {
    for (let i = 1; i <= number; i++) {
      let result = "";
      if (i % 3 === 0) {
        result += "plug";
      }  
      console.log(result);
    }
  }
  
  plugin(3)