/**
Number Letters
--------------
Implementasikan function `numberLetters` untuk mengganti angka-angka
yang ada di dalam `str` menjadi sebuah huruf yang sesuai dengan aturan:
1 = i
4 = a
3 = e
7 = u
0 = o
Contoh ada di test cases
RULES:
  - Wajib menuliskan pseudocode. Tidak ada pseudocode / pseudocode tidak match
    dengan kode maka indikasi soal tidak diselesaikan secara pribadi dan tidak akan dinilai.
*/
/**
Number Letters
--------------
Implementasikan function `numberLetters` untuk mengganti angka-angka
yang ada di dalam `str` menjadi sebuah huruf yang sesuai dengan aturan:
1 = i
4 = a
3 = e
7 = u
0 = o
Contoh ada di test cases
RULES:
 - Tidak boleh menggunakan fungsi REPLACE
*/

function numberLetters (str) {
    //tulis kode anda di sini
    let chars = str.split('');
    for (let i = 0; i < chars.length; i++) {
        switch (true) {
            case (chars[i]==="1"):
                chars[i] = "i"
                break;
            case (chars[i]==="4"):
                chars[i] = "a"
                break;
            case (chars[i]==="3"):
                chars[i] = "e"
                break;
            case (chars[i]==="7"):
                chars[i] = "u"
                break;
            case (chars[i]==="0"):
                chars[i] = "o"
                break;
        }
        
    }
    return (chars.join(''))
}

// Test cases 
console.log(numberLetters('s3rg31dr4g7n0v')); // sergeidragunov
console.log(numberLetters('j1nk4z4m4')); // jinkazama
console.log(numberLetters('s7m3t4l')); // sumetal
console.log(numberLetters('m04m3t4l')); // moametal
console.log(numberLetters('')); //