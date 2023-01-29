
const h1 = document.querySelector('h1');
const form = document.querySelector('#form');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#result');

//btn.addEventListener('click',btnOnClick);

form.addEventListener('submit',sumarImpurtValues);

function sumarImpurtValues(event){
    event.preventDefault();
    console.log(input1.value + input2.value);
    pResult.innerHTML = input1.value + input2.value;
}