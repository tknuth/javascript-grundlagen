console.log("Willkommen zu JavaScript!");

// Ganzzahl
1;

// Fließkommazahl
1.3;

// Addition
2 + 2;

// Potenzierung
2 ** 5;

// Beachten Sie die Operatorpräzedenz nach PEMDAS.
((50 - 5) * 6) / 4;

// Ganzzahldivision
Math.floor(17 / 3);

// Modulus/Rest
17 % 3;

// Formatierung mit Tausendertrennzeichen
1_000_000;

// Quadratwurzel
Math.sqrt(2);

// Vorsicht, Fließkommazahlen können zu unerwarteten Ergebnissen führen.
0.1 + 0.2 === 0.3;

// `Math.round` rundet auf die nächste ganze Zahl.
let price = 19.99;
let discount = 0.25;
Math.round(price * (1 - discount) * 100) / 100;

let name = prompt("Wie heißt du?");
"Hallo " + name;

// Implizite Typkonvertierung
"3" * 4;

// Das Schlüsselwort `typeof` gibt den Datentyp an.
typeof 3.1;

// Was passiert hier?
let a = prompt("Nenne eine ganze Zahl für a:");
let b = prompt("Nenne eine ganze Zahl für b:");
a + b;

// Was passiert hier?
let birth_year = prompt("In welchem Jahr wurdest du geboren?");
let age = 2024 - birth_year;
"Du bist " + age + " Jahre alt.";
