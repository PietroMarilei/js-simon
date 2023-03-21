const num_containerElement = document.querySelector('.num_container')

const resultElement = document.getElementById('result')
console.log(resultElement);

const pcNumArray = [];

function rndNumGen_inPage(min, max) {
    let rnd_num

    for (let i = 0; i < max; i++) {

        rnd_num = Math.floor(Math.random() * (max - min + 1)) + min;

        num_containerElement.append(rnd_num);

        pcNumArray.push(rnd_num)


    }

    return rnd_num
}





rndNumGen_inPage(1, 5);
// i num appaiono in pagina con la funz sopra e li aggiungo ad array
console.log(pcNumArray);




setTimeout(function () {
    num_containerElement.innerHTML = `<label for="">scrivi i tuoi numeri qui </label>
    <input type="text" name="" id="user_input">
    <button>submit</button>
`
}, 3000)
// pulisco la pagina e metto la possibilitá all'utente di scrivere

addEventListener("click", function (e) {
    const inputElement = document.getElementById('user_input')

    const userInputNums = inputElement.value.split('');

    const userSingleDigits = userInputNums.map(Number)

    console.log(userSingleDigits);

    // ho un array usersingleDigits che contine i numeri inserti dal giocatore

    for (let i = 0; i < userSingleDigits.length; i++) {
        const thisDigit = userSingleDigits[i];

        if (thisDigit == pcNumArray[i]) {

            const newDiv = document.createElement("div")

            newDiv.innerHTML = `${thisDigit}"questo numero é corretto"`

            resultElement.append(newDiv)



        }

    }



})




