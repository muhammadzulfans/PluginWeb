const getmonth = (callback:any) => {
    setTimeout (() => {
        let error = false;
        let month = ['January', 'February', 'March', 'April', 'May','Juni', 'July', 'August', 'September', 'Oktober', 'November', 'Desember'];
        if(!error) {
            callback(null, month)
        }else {
            callback(new Error('Sorry Data Not Found'),[])
        }
        
 }, 1000)
}

getmonth((err:any, res: any) => {
    const bulan = res.map((item : [], i : number, z : []) => {
        return item;
        });
        console.log(bulan);
    })

    // (a,b) => {}
    
    
    // const bulan = month.map
    //     console.log(bulan);