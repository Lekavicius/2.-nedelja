// 1. Ispisati trostruke vrednosti brojeva od 1 do 10.
{
    for (let i = 1; i <= 10; i++) {
        console.log(3 * i);
    }
}
console.log('---------------');
// 2. Ispisati svaki drugi broj od 1 do 15 (1,3,5,7,9,11,13)
{
    for (let i = 1; i < 15; i += 2) {
        console.log(i);
    }
}
console.log('-----------');

// 3. Ispisati parne brojeve od 1 do M, ukljucujuci M.
{
    let M = 10;
    for (let i = 1; i <= M; i++) {
        if (i % 2 === 0) {
            console.log(i);
        }
    }
}
console.log('-------');

// 4. Ispisati brojeve izmedju N i M koji su deljivi sa K.
{
    let N = 2;
    let M = 19;
    let K = 3;
    for (N; N <= M; N++) {
        if (N % K === 0) {
            console.log(N);
        }

    }
}
console.log('------------');

// 5. Ispisati parove brojeva (I,J), tako da su I brojevi od 0 do 5, a J brojevi od 7 do 3.
{
    for (let i = 0, j = 7; i < 5 || j > 3; i++, j--) {
        console.log(i, j);
    }
}
// break, continue
{
    for (let i = 0; i < 15; i++) {
        if (i == 9) {
            break
        }
        console.log(i);    // ispisace brojeve od 0 do 8
    }
}

{
    for (let i = 0; i < 15; i++) {
        if (i == 3 || i ==8) {
            continue
        }
        console.log(i);    // preskovice 3 i 8
    }
}
console.log('--------------');

// 6. Uraditi isto ovo bez continue (da se ispisu brojevi od 1 do 15, ali bez 3 i 8)
{
    for (let i = 1; i <= 15; i++) {
        if (i!=3 && i!=8) {
            console.log(i);
        }
        
    }
}
console.log('-----------');

// 7. Ispisati da li je dati broj N u intervalu od 1 do 100.
{
    let N = 5;
    let found = false;
    for (let i = 1; i < 100; i++) {
        if (i==N) {
            found=true;
            break;
        }

    }
    console.log(found);
    
}
console.log('---------');

// 8. Izracunati zbir brojeva od N do M. 
{
    let N = 3;
    let M = 8;
    let count = 0;
    for (N; N <= M; N++) {
        count += N  
    }
    console.log(count);
}
console.log('------------');

// 9. Izracunati zbir neparnih brojeva od N do M.
{
    let N = 2;
    let M = 16;
    let count = 0;
    for (N; N <= M; N++) {
        if (N%2!=0) {
            count+=N
        }
    }
    console.log(count);
}
console.log('-------');

// 10. Izracunati proizvod brojeva od 1 do M.
{
    let M = 7;
    let count = 1;
    for (let i = 1; i < M; i++) {
        count *= i
    }
    console.log(count);
}
console.log('----------');

// Zamena M i N
/*{
let N = 6;
let M = 3;

let temp = N;
N=M;
M=T;
}*/
console.log('-------------');

// 11. Izracunati prosecnu vrednost brojeva izmedju N i M.
{
    let N = 3;
    let M = 8;
    let count = 0;
    for (N; N < M; N++) {
        count+=N;   
    }
    console.log(count/(M-N));    // IZBACUJE MI INFINITY!!!! Ne znam sto, kapiram da ovako treba da se uradi
}
console.log('----------');
// 12. Izracunati prosecnu vrednost brojeva izmedju N i M koji su deljivi sa 3, a nisu sa 5.
{
    let N = 2;
    let M = 15;
    let zbir = 0;
    let count = 0;
    for (N; N < M; N++) {
        if (N%3===0 && N%5!=0) {
            zbir+=N
            count++
        }
    }
    console.log(zbir/count);
}
