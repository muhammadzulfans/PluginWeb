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



// jawaban soal ujian chunin
function nama(a: string, b: string) {
    let fisrtname: string;
    let lastname: string;
    let fullname: string;

    fisrtname = a;
    lastname = b;

    fullname = fisrtname + lastname;

    return fullname;
}
console.log(nama("anak", "baik"));


