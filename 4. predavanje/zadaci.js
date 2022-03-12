// 1. Napisati funkciju koja vrsi inverziju broja.

let x = 4235;
let str = '';
function inverzija(x) {
    str += x;
    return str.split("").reverse().join("")
}
console.log(inverzija(x))

// 2. Napisati funkciju koja vrsi sabiranje ili oduzimanje ili mnozenje neka dva broja u zavisnosti od zadatih parametara.
// moj nacin:
{
    function calculate(x, y, operacija) {
        if (operacija == "sabiranje") {
            return x + y;
        }
        else if (operacija == "oduzimanje") {
            return x - y;
        }
        else if (operacija == "mnozenje") {
            return x * y
        }
    }
    console.log(calculate(5, 3, "sabiranje"));
}

// 2. nacin:
{
    function calculate(x, y, operacija) {
        switch (operacija) {
            case "sabiranje":
                console.log(x + y);
                break;
            case "oduzimanje":
                console.log(x - y);
                break;
            case "mnozenje":
                console.log(x * y);
                break;
            default:
                break;
        }
    }
}
calculate(4, 5, "mnozenje")

{
    function calculate(x, y, operacija) {
        switch (operacija) {
            case "sabiranje":
                return x + y;
            case "oduzimanje":
                return x - y;
            case "mnozenje":
                return x * y;
            default:
                break;
        }
    }
}
console.log(calculate(2, 3, "mnozenje"));


// 3. Ispisati najduzi palindrom u datom stringu.