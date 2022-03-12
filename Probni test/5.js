/* 5. Zadatak

    Napraviti funkciju koja ISPISUJE poslednju cifru datog broja i VRACA dat broj bez poslednje cifre:
    ```
    let x = 41325

    x = obrisiPoslednjuCifru(x) //ispis ce biti 5
    console.log(x) //ispis ce biti 4132
    ```

    Bonus: 
    Ispisati sve cifre broja x u obrnutom redosledu koristeci napravljenu funkciju.
    ```
    5
    2
    3
    1
    4
    ```

    Napomena : radi za bilo koje x vece od 0                 */
{
let x = 41325;
let str = ''
function number(x) {
    console.log(x % 10);
    str += x
    return str.slice(0,str.length-1)
}
console.log(number(x));
}

{   let x = 41325;
    let str = '';
    function reverseNumber(x){
        str += x;
        return str.split("").reverse().join("")     
    }
    str += '\n'
    console.log(reverseNumber(x));
}

{
    let x = 41325;
    let str = '';
    if (x<=0) {
        console.log('ahahashah');
    }
    else{
        function reverseNumber(x){
            str += x;
            return str.split("").reverse().join("")
    }
}
 console.log(reverseNumber(x));
}

// NISAM SIGURAN JEL TO TREBA UOPSTE, ALI NE ZNAM KAKO BIH NAPISAO CIFRE JEDNU ISPOD DRUGE???
