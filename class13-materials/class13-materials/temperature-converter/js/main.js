//Write your pseduo code first! 
document.querySelector('#enterTemp').addEventListener('click', Convert)

function Convert() {
    const Celcius = document.querySelector('#celcius').value
    let Farenheit = (Celcius * 9/5) + 32
    document.querySelector('#fahrenheitReturn').innerText = Farenheit
}
