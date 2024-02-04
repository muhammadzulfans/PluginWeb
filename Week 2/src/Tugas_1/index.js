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
