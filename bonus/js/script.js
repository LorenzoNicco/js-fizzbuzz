/*
    1. INIZIO
    2. usare il ciclo per creare tante iterazioni quante ne abbiamo bisogno
    3. usare if per modificare i multipli di 3
    4. Usare if per modificare i multipli di 5
    5. Usare if per modificare i numeri di 3 e 5 insieme

    BONUS
*/

console.log('Debug prima del ciclo ok');

for (let i = 1; i <= 100; i++) {
    let div = document.createElement('div');

    document.getElementById('container').append(div);

    if ((i % 3 === 0) && (i % 5 === 0)) {
        div.innerHTML = 'FizzBuzz';

        div = div.style.cssText = `
            width: calc(1200px / 7);
            height: calc(1200px / 7);
            border: 1px solid black;
            padding: 10px;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: red;
            
        `;
    }
    else if (i % 3 === 0) {
        div.innerHTML = 'Fizz';

        div = div.style.cssText = `
            width: calc(1200px / 7);
            height: calc(1200px / 7);
            border: 1px solid black;
            padding: 10px;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: green;
        `;
    }
    else if (i % 5 === 0) {
        div.innerHTML = 'Buzz';

        div = div.style.cssText = `
            width: calc(1200px / 7);
            height: calc(1200px / 7);
            border: 1px solid black;
            padding: 10px;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: orange;
        `;
    }
    else {
        div.innerHTML = i;

        div = div.style.cssText = `
            width: calc(1200px / 7);
            height: calc(1200px / 7);
            border: 1px solid black;
            padding: 10px;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: blue;
        `;
    }
}

console.log('Debug dopo il ciclo ok');
