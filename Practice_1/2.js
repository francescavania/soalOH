/*
INSTRUKSI
Diberikan sebuah array, tugasmu adalah menghitung berapa jumlah siswa yang lulus ujian.
Siswa dikatakan lulus ujian jika nilai nya lebih dari atau sama dengan 75.

CONTOH:
data : [
    {
        name:"Svetlana Isakova",
        score: 78
    },
    {
        name:"Arnauld Gauliani",
        score: 74
    },
    {
        name:"Khabib Nurmagomedov",
        score: 81
    }
]

input: jumlahSiswaLulus(data)
output: 2 orang lulus

input: jumlahSiswaLulus([])
output: Tidak ada data


input: jumlahSiswaLulus([{ name: "Tiger Woods", score: 54 }])
output: Tidak ada yang lulus

 */


function jumlahSiswaLulus(datas) {
    let lulus=0
    console.log(datas)
    if(datas.length!=0){
        for (let index = 0; index < datas.length; index++) {
            if(datas[index].score>=75){
                lulus++
            }    
        }
        console.log(lulus!=0 ? lulus+" orang lulus":"Tidak ada yang lulus")
    }else{
        console.log("Tidak ada data")
    }
    
}

//output: 2 Orang lulus
jumlahSiswaLulus([{ name: "Khabib", score: 89 }, { name: "Athena", score: 78 }, { name: "Shrek", score: 64 }])

//output: 1 Orang lulus
jumlahSiswaLulus([{ name: "Khabib", score: 19 }, { name: "Athena", score: 78 }, { name: "Shrek", score: 64 }])

//output: Tidak ada yang lulus
jumlahSiswaLulus([{ name: "Khabib", score: 19 }, { name: "Athena", score: 38 }, { name: "Shrek", score: 64 }])

//output: tidak ada data
jumlahSiswaLulus([])