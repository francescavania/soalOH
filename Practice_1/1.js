  /**
  =========================
  Konversi Nilai
  =========================
  [INSTRUKSI]
  Buatlah sebuah function yanng menerima satu parameter nilai,
  Jika nilai tersebut di atas 100, return kan "Invalid!",
  Jika nilai tersebut diantara 80 - 100, return kan "A",
  Jika nilai tersebut diantara 65 - 79, return kan "B",
  Jika nilai tersebut diantara 50 - 64, return kan "C",
  Jika nilai tersebut diantara 35 - 49, return kan "D"
  Jika semua nilai di atas tidak terpenuhi, return kan "Invalid"


  **ASUMSI
  - parameter pasti sebuah number

  HiNT:
  - Gunakan if, else if dan else


  */

 function convertNumToLetter(num) {
    //tulis kode anda di sini
    if(num>100){
        return("invalid!")
    }else if(num>=80){
        return("A")
    }else if(num>=65){
        return("B")
    }else if(num>=50){
        return("C")
    }else if(num>=03){
        return("D")
    }else{
        return("invalid")
    }
}


//Output harus: Invalid
console.log(convertNumToLetter(1006))


//Output harus: A
console.log(convertNumToLetter(95))


//Output harus: B
console.log(convertNumToLetter(71))


//Output harus: C
console.log(convertNumToLetter(63))


//Output harus: Invalid
console.log(convertNumToLetter(0))