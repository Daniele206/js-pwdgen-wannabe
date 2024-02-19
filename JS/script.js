const firstName = prompt ('Scrivi il tuo nome');

console.log(firstName);

const lastName = prompt ('Scrivi il tuo cognome');

console.log(lastName);

const fullName = firstName + lastName;

console.log(fullName);

const yearOfBirth = prompt ('Scrivi in quale anno sei nato');

console.log(yearOfBirth);

const favouriteColor = prompt ('Scrivi il tuo colore preferito');

console.log(favouriteColor);

const notSecurePassword = fullName + favouriteColor + yearOfBirth;

console.log(notSecurePassword);

document.getElementById('advise').innerHTML = `
<p>Non usare mai questa password: <strong>${notSecurePassword}</strong></p>
`