let celsiusInput = document.querySelector('#celsius>input');
let fahrenheitInput = document.querySelector('#fahrenheit>input');  
let kelvinInput = document.querySelector('#kelvin>input');
let btn = document.querySelector('.button button');

function roundNumber(number) {
    return Math.round(number * 100) / 100;
}

celsiusInput.addEventListener('input', function () {
    let cTemp = parseFloat(celsiusInput.value);
    if (!isNaN(cTemp)) {
        let fTemp = (cTemp * (9 / 5)) + 32;
        let kTemp = cTemp + 273.15;
        fahrenheitInput.value = roundNumber(fTemp);
        kelvinInput.value = roundNumber(kTemp);
    } else {
        fahrenheitInput.value = '';
        kelvinInput.value = '';
    }
});

fahrenheitInput.addEventListener('input', function () {
    let fTemp = parseFloat(fahrenheitInput.value);
    if (!isNaN(fTemp)) {
        let cTemp = (fTemp - 32) * (5 / 9);
        let kTemp = (fTemp - 32) * (5 / 9) + 273.15;
        celsiusInput.value = roundNumber(cTemp);
        kelvinInput.value = roundNumber(kTemp);
    } else {
        celsiusInput.value = '';
        kelvinInput.value = '';
    }
});

kelvinInput.addEventListener('input', function () {
    let kTemp = parseFloat(kelvinInput.value);
    if (!isNaN(kTemp)) {
        let cTemp = kTemp - 273.15;
        let fTemp = (kTemp - 273.15) * (9 / 5) + 32;
        celsiusInput.value = roundNumber(cTemp);
        fahrenheitInput.value = roundNumber(fTemp);
    } else {
        celsiusInput.value = '';
        fahrenheitInput.value = '';
    }
});

btn.addEventListener('click', () => {
    celsiusInput.value = "";
    fahrenheitInput.value = "";
    kelvinInput.value = "";
});




// let celsiusInput= document.querySelector('#celsius>input')
// let fahrenheit= document.querySelector('#fahrenheit>input')
// let kelvinInput= document.querySelector('#kelvin>input')
// let btn= document.querySelector('.button button')

// function roundNumber(number){
//     return Math.round(number*100)/100
// }
// celsiusInput.addEventListener('input',function(){
//     let cTemp= parseFloat(celsiusInput.value)
//     let fTemp= (cTemp*(9/5))+32
//     let kTemp= cTemp+273.15
//     fahrenheitInput.value= roundNumber(fTemp)
//     kelvinInput.value= roundNumber(kTemp)
// }) 
// /* f to c and k*/

// fahrenheitInput.addEventListener('input',function(){
//     let fTemp= parseFloat(fahrenheitInput.value)
//     let cTemp= (fTemp-32)*(5/9)
//     let kTemp= (fTemp-32)*(5/9)+273.15
//     celsiusInput.value= roundNumber(cTemp)
//     kelvinInput.value= roundNumber(kTemp)
// }) 
// kelvinInput.addEventListener('input',function(){
//     let kTemp= parseFloat(kelvinInput.value)
//     let cTemp= kTemp-273.15
//     let fTemp= (kTemp-273.15)*(9/5)+32
//     celsiusInput.value= roundNumber(cTemp)
//     fahrenheitInput.value= roundNumber(fTemp)
// }) 

// btn.addEventListener('click',()=>{
//     celsiusInput.value=""
//     fahrenheitInput.value=""
//     kelvinInput.value=""
// })