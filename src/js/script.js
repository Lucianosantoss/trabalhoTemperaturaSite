let celsiusInput = document.querySelector('#celsius > input');
let fahrenheitInput = document.querySelector('#fahrenheit > input');
let kelvinInput = document.querySelector('#kelvin > input');
let RankineInput = document.querySelector(`#Rankine > input`);

let botao = document.querySelector('.button button')


function roundNumber(number) {
    return Math.round(number * 100) / 100
};

celsiusInput.addEventListener('input', function () {
    let cTemp = parseFloat(celsiusInput.value)
    let fTemp = (cTemp * (9 / 5)) + 32
    let kTemp = cTemp + 273.15
    let rTemp = (cTemp * (9 / 5)) + 491.67

    fahrenheitInput.value = roundNumber(fTemp)
    kelvinInput.value = roundNumber(kTemp)
    RankineInput.value = roundNumber(rTemp)
});


fahrenheitInput.addEventListener('input', function () {
    let fTemp = parseFloat(fahrenheitInput.value)
    let cTemp = (fTemp - 32) * (5 / 9)
    let kTemp = (fTemp - 32) * (5 / 9) + 273.15
    let rTemp = fTemp + 459.67

    celsiusInput.value = roundNumber(cTemp)
    kelvinInput.value = roundNumber(kTemp)
    RankineInput.value = roundNumber(rTemp)
});

kelvinInput.addEventListener('input', function () {
    let kTemp = parseFloat(kelvinInput.value)
    let cTemp = kTemp - 273.15
    let fTemp = (kTemp - 273.15) * (9 / 5) + 32
    let rTemp = kTemp * 1.8

    celsiusInput.value = roundNumber(cTemp)
    fahrenheitInput.value = roundNumber(fTemp)
    RankineInput.value = roundNumber(rTemp)
});

RankineInput.addEventListener(`input`, function () {
    let rTemp = parseFloat(RankineInput.value)
    let fTemp = rTemp - 459.67
    let cTemp = (rTemp - 491.67) * 5 / 9
    let kTemp = rTemp * 5 / 9
    celsiusInput.value = roundNumber(cTemp)
    kelvinInput.value = roundNumber(kTemp)
    fahrenheitInput.value = roundNumber(fTemp)

});

botao.addEventListener('click', () => {
    celsiusInput.value = ""
    fahrenheitInput.value = ""
    kelvinInput.value = ""
    RankineInput.value = ""
});
