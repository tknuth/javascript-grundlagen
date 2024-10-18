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

// Quadratwurzel
Math.sqrt(2);

// Vorsicht, Fließkommazahlen können zu unerwarteten Ergebnissen führen.
0.1 + 0.2 === 0.3;

// Konkatenation von Strings
let name = prompt("Wie heißt du?");
"Hallo " + name;

// implizite Typkonvertierung
"3" * 4;

// Konvertierung von Strings in Zahlen
const x = "3";
+x;

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
