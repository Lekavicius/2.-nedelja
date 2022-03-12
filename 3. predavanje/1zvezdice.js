// 1. Ispisati brojeve 1,2,3,4,5...25 u jednom redu
{
let str = ''
for (let i = 1; i <= 25; i++) {
    str += i + ' '
}
console.log(str);
}
console.log('----------');
// 2. Napisati program koji na osnovu unetog N pravi kvadrat tih dimenzija
{
 let N = 7;
 let row = '';
 for (let i = 0; i <= N; i++) {
    row += '*' 
 }
 for (let i = 1; i <= N; i++) {
     console.log(row);
 }
}

// drugi nacin:
{
    let N = 12;
    let row = '*'.repeat(N);
    for (let i = 1; i <= N; i++) {
        console.log(row);
    }
    
}
console.log('-------------');

// treci nacin (ugnjezdena petlja)
{
    let N = 6;
    let row = '';
for (let i = 0; i < N; i++) {   // spoljasnja petlja je za ponavljanje redova
    for (let j = 0; j < N; j++) {   // -unutrasnja petlja je za jedan red
        row += '*'
    }
    row+= '\n'
}
console.log(row);
}
/* Kod ugnjezdenih petlji: za i=0, vrti se cela unutrasnja petlja dok se ne izvrsi, znaci j=0+, ++, dok j ne bude 5,
 pa onda opet tako za i=1 itd. dok se ne izvrsi cela spoljasnja petlja*/

 console.log('-------');

 /* 3. Napisati program koji na osnovu unetog N pravi kvadrat tih dimenzija:

 N = 5    *****
          *   *
          *   *
          *   *
          *****           */

{
    let N = 7;
    console.log('*'.repeat(N));
    let row = '*' + ' '.repeat(N-2) + '*';
    for (let i = 1; i <= N-2; i++) {
        console.log(row);
    }
    console.log('*'.repeat(N));
}
console.log('-------');

// drugi nacin:
{
    let N = 6;
    console.log('*'.repeat(N));
    let middleRow = '*' + ' '.repeat(N-2) + '*\n'
    console.log(middleRow.repeat(N-2).trim());
    console.log('*'.repeat(N));
}
