//Abbiamo un elenco utenti (nome, cognome, età). Trovare i minorenni e gli over 65

//scrivo array oggetti
const elencoUtenti = [
  { nome: "Marco", cognome: "Rossi", eta: 71 },
  { nome: "Flavio", cognome: "Bianchi", eta: 13 },
  { nome: "Giuseppe", cognome: "Verdi", eta: 45 },
  { nome: "Anna", cognome: "Neri", eta: 19 },
  { nome: "Simone", cognome: "Gialli", eta: 86 },
  { nome: "Gaia", cognome: "Marrone", eta: 16 },
  { nome: "Luca", cognome: "Viola", eta: 36 },
  { nome: "Maria", cognome: "Arancione", eta: 41 }
];

//trova gli utenti sotto i 18 anni
const under18 = elencoUtenti.filter((utente) => utente.eta < 18);

//trova gli utenti sopra i 65 anni
const over65 = elencoUtenti.filter((utente) => utente.eta > 65);

//creo una stringa con i nomi degli utenti trovati
let utentiSelezionati = "<h2>Under 18:</h2>";

//creo ciclo for of per selezionare gli utenti e stamparli
for (let utente of under18) {
  utentiSelezionati += `<p>${utente.nome} ${utente.cognome}</p>`;
}

utentiSelezionati += "<h2>Over 65:</h2>";
for (let utente of over65) {
  utentiSelezionati += `<p>${utente.nome} ${utente.cognome}</p>`;
}

//stampo il risultato
document.write(utentiSelezionati);

