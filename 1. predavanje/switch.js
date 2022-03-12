// skraceni if
// let c = a>b ? a : b
// znaci ako je a>b, bice a....ako je a<b, bice b

/* Ako imamo tacan broj vrednosti za koje zelimo da pravimo uslove, mozemo da koristimo switch.
   Npr. za dane u nedelji, mesece u godini, za svaki tip korisnika... */

// administrator, moderator, premium, vip, regular

let user = 'administrator';

switch (user) {
    case 'administrator':  // proverava trostruku jednakost (user===='administrator') 
        console.log('Korisnik je administrator.');
        break;  // da ovde nismo imali break, ispisalo bi i administrator i moderator. Da smo svuda sklonili break, ispisalo bi sve slucajeve. U vecini slucajeva je potreban break.

    case 'moderator':
        console.log('Korisnik je moderator');
        break;

    case 'premium':
        console.log('Korisnik je premium.');
        break;

    case 'regular':
        console.log('Korisnik je regular.');
        break;

    default:   //  ovo ce ispisati ako nije izvrsen nijedan uslov
        console.log('Neka greska.');
        break;
}

// 2. primer

let day = 4;

switch (day) {
    case 1: console.log(false);
        break;
    case 2: console.log(false);
        break;
    case 3: console.log(false);
        break;
    case 4: console.log(false);
        break;
    case 5: console.log(false);
        break;
    case 6: console.log(true);
        break;
    case 7: console.log(true);
        break;
    default: console.log('Unos mora biti broj od 1 do 7.');
        break;
}

// Ovo moze da se ispise dosta krace: 
switch (day) {
    case 1: case 2: case 3: case 4: case 5:
        console.log(false);
        break;
    case 6: case 7:
        console.log(true);
        break;
    default: console.log('Unos mora biti broj od 1 do 7.');
        break;
}
// Nema break-a, pa ce da ode do slucaja gde postoji break.

let a = 3;
switch (a > 4) {
    case true:
        console.log('Jeste vece od 4.');
        break;
    case false:
        console.log('Manje je od 4.');
        break;
    default:
        console.log('Jednako je 4.');
        break;
}
// Naravno, ovo je lakse i bolje odraditi preko if.

// FALSE VREDNOSTI:  0, null, undefined, '', NaN, Number('asasg'), false. 