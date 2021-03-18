//chiedere il nome
var nome = prompt('what is your name?');
console.log(nome);
//chiedere il cognome
var cognome = prompt('what is your surname?');
console.log(cognome);
//chiedere il colore preferito
var colore = prompt('what is your favorite color?');
console.log(colore);
//scrivere sulla pagna
document.getElementById('saluto').innerHTML = nome +' '+ cognome +' ' + colore + ' 21';
