/* 1. Zadatak 

    Napisati program koji ispisuje racun u kafani , ali samo musterijama koje imaju vise od 18 godina.

    Popust se odobrava u sledeca dva slucaja:
    1. Broj godina je deljiv sa 7 (15% popusta)
    2. Broj godina je deljiv sa 11 (25% popusta)

    Ulazni podaci:
    * Kolicina (broj pica)
    * Cena jednog pica
    * Broj godina musterije

    Napomena: 
    Proveriti ulazne podatke (Validnost kolicine , cene i godina) 

    Primer:
    ```
    let kolicina = 9
    let cenaPoKomadu = 180
    let godine = 21
    ```
    ```
    Racun: 1377rsd

    Objasnjenje:
    - 9 * 180 = 1620
    - 21 je deljivo sa 7, pa se racuna i popust od 15%    */

let kolicina = 9;
let cena = 100;
let godine = 21;

function racun(kolicina, cena, godine) {
    if (godine < 18 && godine > 0) {
        return 'Maloletne osobe ne mogu kupiti pice.'
    }
    if (godine <= 0 || cena <= 0 || kolicina <= 0) {
        return 'Uneti podaci nisu validni'
    }
    if ((godine % 11 === 0) || (godine % 11 === 0 && godine % 7 === 0)) {
        return cena * kolicina * 0.75
    }
    else if (godine % 7 === 0) {
        return cena * kolicina * 0.85
    }
    else {
        return cena * kolicina
    }

}
console.log(racun(4, 180, 19));