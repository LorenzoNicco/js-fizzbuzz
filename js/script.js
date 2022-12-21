/*
    1. INIZIO
    2. usare il ciclo per creare tante iterazioni quante ne abbiamo bisogno
    3. usare if per modificare i multipli di 3
    4. Usare if per modificare i multipli di 5
    5. Usare if per modificare i numeri di 3 e 5 insieme
*/

console.log('Debug prima del ciclo ok');

for (let i = 1; i <= 100; i++) {
    if ((i % 3 === 0) && (i % 5 === 0)) {
        console.log('FizzBuzz');
    }
    else if (i % 3 === 0) {
        console.log('Fizz');
    }
    else if (i % 5 === 0) {
        console.log('Buzz');
    }
    else {
        console.log(i);
    }
}

console.log('Debug dopo il ciclo ok');
