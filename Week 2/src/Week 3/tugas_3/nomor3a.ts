import { rejects } from "assert"
import { error, log } from "console"
import { resolve } from "path"

const cekHariKerja = ((day: string) => {
    return new Promise((resolve, rejects) => {
        setTimeout(() => {
            const dataDay = ['senin', 'selasa', 'rabu', 'kamis' ,'jumat']
            let cek = dataDay.find((item) => {
                return item === day
            })
            if(cek){
                resolve(cek)
            }else {
                rejects(new Error('Hari ini bukan hari kerja'))
            }
        },3000)
    })
})

let hari = 'jumat'
cekHariKerja(hari).then((res) => {
    console.log(res);
}).catch((err) => {
    console.log(err);
})

async function dayCek() {
    const dayCek = 'sabtu';
    try{
        const res = await cekHariKerja(dayCek);
        console.log(res);
    }catch (err) {
        console.log(err);
    }
}
dayCek()

// perbedaan menggunakan then catch dan try catch adalah saat menggunakan try catch,kita harus
// menggunakan await karena cekHariKerja mengembalikan promise.Dan kita harus membuat sebuah function
// yang diawali dengan async untuk menjalakan program tersebut.