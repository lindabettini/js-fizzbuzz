console.log('JS OK');

/*   
// 1. Scrivi un programma che stampi i numeri da 1 a 100,
// 2. Per i multipli di 3 stampi Fizz al posto del numero.
// 3. Per i multipli di 5 stampi Buzz al posto del numero.
// 4. Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.
Prima di partire a scrivere codice poniamoci qualche domanda
Come faccio a sapere se un numero è divisibile per?
Abbiamo visto qualcosa di particolare che possiamo usare?
% 3 ==0
% 5 ==0 */


let toPrint = document.getElementById('result');

let numbers = '';

// // Scrivi un programma che stampi i numeri da 1 a 100
for (let i = 1; i <= 100; i++) {
    console.log(i);    
    numbers = numbers + i;
}

toPrint.innerHTML = numbers;