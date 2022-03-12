// Pravimo nasu funkciju

function imeFunkcije() {
    //telo funkcije
    console.log('nasa prva funkcija');
}

imeFunkcije()  // poziv funkcije...tek ce se ovde izvrsiti console.log kad pozovemo funkciju. I funkcija moze da se pozove koliko god puta.


// Napraviti nas repeat

function ourRepeat(string,numberOfRepeats) {
    if (numberOfRepeats<=0) {
        return ''
    }
    let rez = ''
    for (let i = 1; i <= numberOfRepeats; i++){
        rez+=string
    }
    return rez
}
console.log(ourRepeat('Hello ',3));

// Funkcija koja vraca obim pravougaonika:
{
    function povrsina(a,b) {
        return a*b
    }
    console.log(povrsina(3,4));
}

// Napisati funkciju koja vraca najveci broj od tri uneta

function highestNumber(x,y,z) {
    if (x>y && x>z) {
        return x
    }
    else if(y>z){
        return y
    }
    else{
        return z
    }
}
console.log(highestNumber(4,7,3));

// drugi nacin
{
function najveciOd2(x,y) {
    return x>y ? x : y
}

function najveciOd3(a,b,c){
    return a>b ? najveciOd2(a,c) : najveciOd2(b,c)
}

}

function punoletan(godine){
    return godine >= 18 ? `Cena je 2` : `Cena je 10`
}
console.log(punoletan(14));