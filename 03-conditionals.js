console.log(typeof true);

// Vergleiche ergeben Wahrheitswerte.
console.log(`${1 == 1}`);
console.log(`${1 != 0}`);
console.log(`${1 >= 0}`);

// `includes` prüft, ob ein Element in einem Array enthalten ist.
console.log(["a", "b", "c"].includes("a"));

let weather = "Regen";

if (weather === "Regen") {
  console.log("Nimm einen Regenschirm mit.");
} else if (weather === "Sonne") {
  console.log("Nimm eine Sonnenbrille mit.");
} else if (weather === "Schnee") {
  console.log("Nimm Handschuhe mit.");
} else {
  console.log("Nimm nichts mit.");
}

// if-else als Ausdruck
let a = 1;
let b = 2;

let c = a > b ? 3 : 4;

// Truthy/Falsy und Short-Circuiting
console.log(a || b);
console.log(a && b);

// Vervollständigen Sie das Programm.
let x = prompt("Nenne eine Zahl:");
console.log("Die Zahl ist gerade.");
console.log("Die Zahl ist ungerade.");

// Programmieren Sie Schere, Stein, Papier.
let choices = ["Schere", "Stein", "Papier"];
let player = prompt("Schere, Stein oder Papier?");
let computer = choices[Math.floor(Math.random() * choices.length)];
