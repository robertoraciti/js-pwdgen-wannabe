const userName = prompt("Inserisci qui il tuo nome");
const userSurName = prompt("Inserisci qui il tuo Cognome");
const userPrefColor = prompt("Inserisci qui il tuo colore preferito");

const pdwGenerator = userName + userSurName + userPrefColor + "21";

const pdwGenerated = `
<h3>La tua password è: </h3>
<p>${pdwGenerator} `;

document.getElementById("pdw").innerHTML = pdwGenerated;
