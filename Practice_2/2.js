/*
SUM IF 4!

Instruksi:
Buatlah sebuah function yang menerima parameter array.
Array tersebut adalah sekumpulan angka.

Buatlah sebuah kode supaya array tersebut mengumpulkan nilai-nilai yang
jika dijumlahkan bernilai 4.

Contoh:
Input : sumFour([1,1,2,5,1,3,6])
Output: [ [1,3] ]
Reason: Karena 1 + 3 adalah 4

Input : sumFour([1,3,2,2,4,0,5])
Output: [ [1,3], [2,2], [4,0]  ]
Reason: Karena hhasil penjumlahan  1+3 = 4, 2+2 = 4, 4+0 = 4


HINT:
- Gunakan looping untuk menjumlahkan index sebelumnya.

*/


function sumFour(nums){
    //tulis kode anda di sini
    let prev=0,hasil=[]
    for (let i = 0; i < nums.length; i++) {
        if(nums[i]+prev==4){
            hasil.push([prev,nums[i]])
        }
        prev = nums[i]  
    }
    console.log(hasil)
}


//output: [ [4,0], [1,3], [2,2]]
sumFour([1,1,2,4,0,1,3,2,2,9])

//output: [[1,3]]
sumFour([1,1,2,5,1,3,6])