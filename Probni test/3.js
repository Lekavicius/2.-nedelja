/* 3. Zadatak

    Napisati program koji ispisuje zbir brojeva deljivih sa 3 i  proizvod brojeva koji nisu deljivi sa 3 a jesu sa 7 (Izmedju K i N ukljucujuci K i ne ukljucujuci N)

    Napomena : K moze biti vece od N         */

let K = 8;
let N = 2;

if (K > N) {
    let t = K;
    K = N;
    N = t;
}

let zbir = 0;
let proizvod = 1;

for (K; K < N; K++) {
    if (K % 3 === 0) {
        zbir += K;
    }
    if (K % 3 !== 0 && K % 7 === 0) {
        proizvod *= K
    }
}
console.log(`Trazeni zbir iznosi ${zbir}, a trazeni proizvod iznosi ${proizvod}.`);