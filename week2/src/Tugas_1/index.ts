function segitiga(panjang:number) {
    let hasil:string = ''; 
    for(let a: number = panjang; a > 0; a--) {
        for(let b :number = 1; b <= panjang; b++) { // <= artinya sama dengan 
            if (b >= a) {
                hasil += ' *'; // += artinya reassign, reassign artinya yaitu menugaskan ulang
            }else {
                hasil +='  '
            }
        }
        hasil += '\n';
    }
    return hasil;
}

console.log(segitiga(7));

