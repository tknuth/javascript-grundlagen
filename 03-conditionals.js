console.log(typeof true);

// Vergleiche ergeben Wahrheitswerte.
1 == 1;
1 != 0;
1 >= 0;

// `includes` prüft, ob ein Element in einem Array enthalten ist.
["a", "b", "c"].includes("a");

let weather = "Regen";
let action;

if (weather == "Regen") {
  action = "Nimm einen Regenschirm mit.";
} else if (weather == "Sonne") {
  action = "Nimm eine Sonnenbrille mit.";
} else if (weather == "Schnee") {
  action = "Nimm Handschuhe mit.";
} else {
  action = "Nimm nichts mit.";
}

// if-else als Ausdruck
let a = 1;
let b = 2;

let c = a > b ? 3 : 4;

// Truthy/Falsy und Short-Circuiting
a || b;
a && b;

// Vervollständigen Sie das Programm.
let x = 7;
"Die Zahl ist gerade.";
"Die Zahl ist ungerade.";

// Programmieren Sie Schere, Stein, Papier.
let choices = ["Schere", "Stein", "Papier"];
let player = "Schere";
let computer = choices[Math.floor(Math.random() * choices.length)];
