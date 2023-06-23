const num_containerElement = document.querySelector('.num_container')

const resultElement = document.getElementById('result')


const pcNumArray = [];
let count = 0

for (let i = 0; i < 5; i++) {
    pcNumArray.push(getRndInteger(1, 5));
}
console.log(pcNumArray);

num_containerElement.innerHTML = `<div id="" class="">${pcNumArray.join(' ')}</div>`;

const myTimeOut = setTimeout(function () {
    num_containerElement.innerHTML = '<div id="" class="">Scrivi il tuo numero qui</div>';
    console.log('svuotato html');

    const inputEl = document.createElement('input');
    inputEl.type = 'text';
    num_containerElement.append(inputEl);

    const buttonEl = document.createElement('button');
    buttonEl.innerText = 'play';
    buttonEl.addEventListener('click', function () {
        const userEntry = inputEl.value;
        comparer(pcNumArray, userEntry);


    })
    num_containerElement.append(buttonEl);

}, 3 * 1000)


//🔽 FUNCTIONS --------------------

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function comparer(arr, entry) {
    if (arr.includes(Number(entry))) {
        count++
        console.log(`indovinato il ${count} numero che è ${entry}`);
        num_containerElement.insertAdjacentHTML('beforeend', `indovinato il ${count} numero che è ${entry}`);


    } else {
        console.log('nope');
        num_containerElement.insertAdjacentHTML('beforeend', `hai sbagliato il numero`);
    };
}


