const num_containerElement = document.querySelector('.num_container')

const resultElement = document.getElementById('result')


const pcNumArray = [];
let count = 0
let userNumbers = [];

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
    inputEl.classList.add('text-center');
    num_containerElement.append(inputEl);

    const buttonEl = document.createElement('button');
    buttonEl.innerText = 'play';
    buttonEl.addEventListener('click', function () {
        const userEntry = inputEl.value;

        userNumbers.push(userEntry)
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
        input
        //inputEl.value = '' 
        //sto coso non va perché ?
        


    } else {
        console.log('nope');
        num_containerElement.insertAdjacentHTML('beforeend', `hai sbagliato il numero`);
        document.querySelector('input').innerText = ''
    };
}

//TODO fare il confronto parallelamente

// for (let i = 0; i < pcNumArray.length; i++) {
//     const element = pcNumArray[i];
//     console.log(pcNumArray[i], "-", userNumbers);
//     //confronto i numeri parallaelalemtne tra i due array
    
// }

