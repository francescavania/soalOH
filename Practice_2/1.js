/*
==================================
Array Mastery: Who's the winner?
==================================
Nama:________
[INSTRUKSI]
Ada dua tim, Man. Utd dan Liverpool yang sedang bertarung pada sebuah kompetisi futsal.
Function whosTheWinner akan menerima suatu parameter beruapa array berisikan nama
tim yang sudah mencetak gol. 

Apabila pada array jumlah "Man. Utd" lebih banyak
daripada "Liverpool" maka function akan mereturn "Man. Utd Juara UCL 2018".

Sedangkan jika jumlah "Liverpool" lebih banyak daripada "Man. Utd" maka function
akan mereturn "Liverpool Juara UCL 2018". 

Jika jumlah kedua tim sama,
maka function akan mereturn: "Draw, pertandingan akan dilanjutkan dengan penalty kick!"

*/

function whosTheWinner(points) {
    //Tulis Kode Anda Di Sini
    let a=points[0],temp=0,b
    for (let i = 0; i < points.length; i++) {
        points[i]==a ? temp++:b=points[i]
    }
    let temp2 = points.length-temp
    if(temp>temp2){
        return(a+" Juara UCL 2018")
    }else if(temp<temp2){
        return(b+" Juara UCL 2018")
    }else{
        return("Draw, pertandingan akan dilanjutkan dengan penalty kick!")
    }
}
  
// TEST CASES

// "Liverpool Juara"
console.log(whosTheWinner(["Man. Utd", "Liverpool", "Liverpool"])); 

// "Miami Heats Juara"
console.log(whosTheWinner(["LA Lakers", "Miami Heats", "Miami Heats", "LA Lakers", "Miami Heats"])); 

// "Draw!"
console.log(whosTheWinner(["Taufik Hidayat", "Lin Dan"])); 

// "Draw!"
console.log(whosTheWinner([])); 

// "Miami Heats Juara"
console.log(whosTheWinner(["Miami Heats"])); 