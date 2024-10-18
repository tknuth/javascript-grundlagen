let languages = ["C", "C++", "Java", "JavaScript", "Python", "Ruby"];

for (let language of languages) {
  console.log(language);
}

// Das Schlüsselwort `break` beendet die Schleife vollständig.
for (let language of languages) {
  console.log(language);
  if (language === "Python") {
    console.log("Python gefunden!");
    break;
  }
}

// Der zweite Parameter der an `forEach` übergebenen Funktion ist der Index.
languages.forEach((language, i) => {
  console.log(`${i + 1}. ${language}`);
});

for (let i = 0; i < 10; i++) {
  // Gib eine Zahl aus, wenn sie gerade ist
  if (i % 2 === 0) {
    console.log(i);
  }
}

// `continue` fährt sofort mit der nächsten Iteration fort.
let i = 0;
while (i < 10) {
  if (i % 2 === 0) {
    continue;
  }
  console.log(i);
  i += 1;
}

// Mit `while (true)` kann eine Endlosschleife erstellt werden,
// die durch `break` beendet wird.
let i = 2;
while (true) {
  console.log(`2^${i} = ${2 ** i}`);
  if (prompt("Fortfahren (j/n)?") !== "j") {
    break;
  }
  i += 1;
}

// In diesem Fall kann die Bedingung allerdings
// auch direkt zu Beginn geprüft werden.
i = 2;
n = 100;
while (prompt("Fortfahren (j/n)?") === "j") {
  console.log(`2^${i} = ${2 ** i}`);
  i += 1;
}

// Schreiben Sie ein Programm, das die Fakultät einer Zahl berechnet.
n = 5;

// Schreiben Sie ein Programm,
// das alle ganzen Zahlen im Bereich von a und b ausgibt,
// die durch x teilbar sind, aber nicht durch y.
let a = 1;
let b = 100;
let x = 3;
let y = 5;

// Schreiben Sie ein Programm,
// mit dem Sie die Quersumme einer Zahl berechnen können.
n = 199;
