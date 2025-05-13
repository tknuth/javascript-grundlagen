const s = "Hallo Welt!";

// Der Index beginnt bei 0.
s[0];

// Slicing bildet ein Intervall [a:b).
s.slice(3, 5);

// Mit Template-Strings können Texte mit Variablen befüllt werden.
const greeting = "Guten Morgen";
const name = "Anna"
`${greeting}, ${name}`;

// Wiederholung von Strings
"ab".repeat(3) + "c";

let message = " HiER ist eTwAS schieFgegangen.";
message.trim().toLowerCase().replace("etwas", "nichts");

["a", "b", "c"].join(", ");

"Dies ist ein Satz, der auch ein Komma enthält.".split(", ");

// Passen Sie den Code an, sodass die Elemente sortiert ausgegeben werden.
let l = "Apfel, Kiwi, Banane, Avocado, Kirsche, Pflaume";

// Prüfen Sie, ob die beiden Wörter ein Anagramm bilden.
const a = "Lehm";
const b = "Mehl";

// Berechnen Sie die Zeitdifferenz zwischen a und b in Minuten.
const a = "17:45";
const b = "19:15";
