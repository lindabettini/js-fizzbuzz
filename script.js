console.log('JS OK');

/*   
1. Scrivi un programma che stampi i numeri da 1 a 100,
2. Per i multipli di 3 stampi Fizz al posto del numero.
3. Per i multipli di 5 stampi Buzz al posto del numero.
4. Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.
*/


let list = document.getElementById('my-list');

let listItems = '';

for (let i = 1; i <= 100; i++) {
    if ((i % 3 ==0) && (i % 5 ==0)) {
        listItems += `<li class="fizzbuzz">FizzBuzz</li>`;
    } else if (i % 3 ==0) {
        listItems += `<li class="fizz">Fizz</li>`;
    } else if (i % 5 ==0) {
        listItems += `<li class="buzz">Buzz</li>`;
    } else {
        listItems += `<li>${i}</li>`;
    }
}

list.innerHTML = listItems;

