// declaramos todas las variables, tanto de la suma, la resta, la division y la multiplicacion


    //variables para los inputs
let suma01 = document.getElementById('sum01'),
    suma02 = document.getElementById('suma02'),
    resta01 = document.getElementById('resta01'),
    resta02 = document.getElementById('resta02'),
    mult01 = document.getElementById('mult01'),
    mult02 = document.getElementById('mult02'),
    division01 = document.getElementById('division01'),
    division02 = document.getElementById('division02'),

    //zona botones submit
    btn_submit = document.getElementById('submit'),
    btn_submitResta = document.getElementById('submitResta'),
    btn_submitMultiplicar = document.getElementById('submitMultiplicar'),
    btn_submitDivision = document.getElementById('submitDivision')

    //zona variables para los resultados totales
    resultadoSuma = document.getElementById('resultado'),
    resultadoResta = document.getElementById('resultadoResta'),
    resultadoMultiplicar = document.getElementById('resultadoMultiplicar'),
    resultadoDivision = document.getElementById('resultadoDivision')

// funcion para hacer las sumas
btn_submit.addEventListener('click', () => {
    let total = Number(sum01.value) + Number(sum02.value)
    resultadoSuma.innerHTML = total
})

//funcion para hacer las restas
btn_submitResta.addEventListener('click', () =>{
    let total = Number(resta01.value) - Number(resta02.value)
    resultadoResta.innerHTML = total
})

//funcion para multiplicar
btn_submitMultiplicar.addEventListener('click', () =>{
    let total = Number(mult01.value) * Number(mult02.value)
    resultadoMultiplicar.innerHTML = total
})

//funcion para dividir
btn_submitDivision.addEventListener('click', ()=>
{
    let total = Number(division01.value) / Number(division02.value)
    resultadoDivision.innerHTML = total
})