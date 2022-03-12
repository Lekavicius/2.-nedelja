/*
while (uslov){
    // telo petlje

    // menjamo brojac (update)
}

for (INICIJALIZACIJA; USLOV; UPDATE) {
    // telo petlje
    
}
*/

// Ispisi 5X Hello

let i = 0; // 0,1,2,3,4

while (i < 5) {
    console.log('Hello');
    i++
}

for (let i = 0; i < 5; i++) {
    console.log('Zdravo');;
}
// Kod FOR-a se prvo izvrsava inicijalizacija, pa se tek onda desava update.

let j = 0
for (j = 0; j < 5; j++) {
    console.log(j);;  // 0,1,2,3,4
}
console.log(j)  // 5

/* While se najcesce koristi kada imamo kraj petlje, a for kad ne znamo kada ce da se zavrsi  */
