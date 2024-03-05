// crazione di un generatore di Password

// steps:

// chiedere all'utente il nome
const userName = prompt('Benvenuto nel generatore di password, come ti chiami? ')
console.log(userName)

// chiedere all'utente il cognome
const userSurname = prompt('Perfetto, qual è il tuo cognome invece? ')
console.log(userSurname)

// chiedere all'utente il colore preferito
const userFavouriteColor = prompt('Ottimo, colore preferito? ')
console.log(userFavouriteColor)

// chiedere all'utente iun numero
const userNumber = prompt('Ottimo, ora ultima domanda scegli un numero? ')
const userNumberAsNumeric = parseInt(userNumber)

//default number
const defaultNumber = 23
console.log(userNumber)

// calcolare numero
const finalNumber = defaultNumber + userNumberAsNumeric

// generare una password
const password = userName + userSurname + userFavouriteColor + finalNumber
console.log(password)

// generare un messaggio
const userMessage = `Complimenti ${userName} la password generata per te è: ${password}`
console.log(userMessage)

//stampare messaggio
document.getElementById('message').innerHTML = userMessage
