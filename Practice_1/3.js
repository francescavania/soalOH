/*
    INSTRUKSI
    Buatlah sebuah method bernama reverseMyName yang menerima satu
    parameter string.

    function ini akan membalikkan pramater.

    CONTOH
    input: reverseMyName("udin")
    output: nidu

    input: reverseMyName("cassandra")
    output:

    input: reverseMyName("")
    output: invalid

*/


// function reverseMyName(name) {
//     //tulis kode anda di sini
//     return name ? reverseMyName(name.substr(1)) + name[0] : name;
// }

function reverseMyName(name){
    let reversed = '';
    for (const c of name) {
        reversed = c + reversed;
    }
    console.log(reversed) 
}
    
reverseMyName("udin")
reverseMyName("cassandra")
reverseMyName("")
