// 1. Dat je neki pocetni string "Hello". Na taj string treba nadovezati brojeve od 5 do 55 (Hello5678....) i ispisati taj string (preko while petlje).

let str = "Hello";
let i = 5;

while (i <= 55) {
    str += i
    i++
}
console.log(str);
/*
for (let i = 5; i <=55; i++){
    str += i
}
console.log(str);*/

// 2. Tri igraca (player1, player2, player3) izvlace random broj  od 0-5... sum = br1+br2+br3, ispisati najvecu sumu

let player1 = 0;
let player2 = 0;
let player3 = 0;

let numberOfRollings = 0;
let winner;

while (numberOfRollings < 3) {
    player1 = player1 + Math.random() * 5
    player2 = player2 + Math.random() * 5
    player3 = player3 + Math.random() * 5
    numberOfRollings++
}
let max
if (player1 > player2 && player1 > player3) {
    max = player1;
    winner = 1;
}
else if (player2 > player3) {
    max = player2;
    winner = 2;
}
else { max = player3;
    winner=3;}
console.log(max, `, Winner is player ${winner}`);