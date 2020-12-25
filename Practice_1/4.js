   /*
================================
Array Mastery: Add Evens and Odds
================================
[INSTRUKSI]
Function addEvenOdd akan menerima satu parameter berupa array of number. 
Kelompokkanlah hasil penjumlahan bilangan yang genap dan bilangan yang ganjil dan return array 2 dimensi 
di mana array pertama merupakan hasil penjumlahan angka ganjil dan array selanjutnya adalah hasil penjumlahan angka genap
Contoh:
input: [3, 5, 7, 8]
output: [[15], [8]]
input: [2, 4, 6, 10]
output: [[0], [22]]
input: []
output: [[0], [0]]
[RULE]
- Wajib menuliskan pseudocode.
- Dilarang menggunakan Regex (.match, .test, dan sebagainya)
- Dilarang menggunakan .map, .filter, dan .reduce!
- Dilarang menggunakan sintaks eval()!
*/


function addEvenOdd(arrNum) {
    //tulis kode anda di sini
    let oddEven = [0,0]
    for (const i of arrNum) {
        if(i%2===0){
            oddEven[1] = oddEven[1]+i
        }else{
            oddEven[0] = oddEven[0]+i
        }
    }
    return(oddEven)
}
// function addEvenOdd(arrNum) {
//     //tulis kode anda di sini
//     let oddEven = [[0],[1]]
//     // console.log(oddEven[0])
//     for (const i of arrNum) {
//         if(i%2===0){
//             oddEven[1] = oddEven[1]+i
//         }else{
//             oddEven[0] = oddEven[0]+i
//         }
//     }
//     return(oddEven)
// }
console.log(addEvenOdd([3, 5, 7, 8])); // [ [15], [8] ]
console.log(addEvenOdd([2, 4, 6, 10])); // [ [0], [22] ]
console.log(addEvenOdd([])); // [ [0], [0] ]