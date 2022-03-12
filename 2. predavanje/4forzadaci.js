// 1. Izracunati faktorijal N.
{
    let N = 5;  // 5*4*3*2*1
    let factorial = 1;
    for (N; N > 0; N--) {
        factorial *= N;
    }
    console.log(factorial);
}
// 2. Apsolutna vrednost brojeva od -10 do 10.
{
    for (let i = -10; i <= 10; i++) {
        console.log(Math.abs(i));
    }
}

//2. nacin:
{
    for (let i = -10; i <= 10; i++) {
        console.log(i<0 ? -i : i);
        
    }
}
console.log('-------------');
// 3. Prebrojati koliko brojeva u intervalu od N do M sadrzi cifru 6
{
    let N = 2;
    let M = 73;
    let str = '';
    let count = 0;
    for (N; N < M; N++) {
       if ((str+N).includes('6')) {
           count++
       }
    }
    console.log(count);
}
console.log('-----------');
// 4. Ispisati da li je broj prost.
{
    let i = 11;
    if ((i<=5 && i%i==0 && i!=4) || (i>5 && i%i==0 && i%2!=0 && i%3!=0 && i%5!=0)) {
        console.log(true);
    }else{
        console.log(false);
    }
}

// 2. nacin (Ovako su oni uradili, nisam se setio toga)
{
let x = 13;
let isPrimeNumber = true;
for (let i = 2; i < x; i++) {
    if (x%i==0) {
        isPrimeNumber = false;
    }   
}
console.log(isPrimeNumber);
}


console.log('---------------');
// 5. Ispisati sve proste brojeve do N.
{
    for (let i = 1; i < 37; i++) {
        if ((i<=5 && i%i==0 && i!=4) || (i>5 && i%i==0 && i%2!=0 && i%3!=0 && i%5!=0)){
            console.log(i);
        }
        
    }
}
console.log('--------------');
// 2. nacin (njihov)  TREBA MI OBJASNJENJE ZA OVAJ NACIN!!!!
{
    let N = 20;
for (let j = 1; j < N; j++) {
    let isPrimeNumber = true;
    for (let i = 2; i < j; i++) {
        if (j%i == 0) {
            isPrimeNumber = false;
        }
        
    }
    console.log(isPrimeNumber ? j : '');
}
}

console.log('-------------');
// 6. Tablica mnozenja (1-9) za dati broj N. 5*1=5  5*2=10 5*3=15

let N = 5;
for (let i = 1; i < 10; i++) {
    console.log(`${N}*${i}=${N*i}`);
}

