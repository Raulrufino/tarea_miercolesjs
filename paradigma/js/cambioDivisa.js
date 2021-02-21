// creamos las variables

let euro = document.getElementById('valor01'),
    divisaExtranjera = 0.82,
    btn_cambio = document.getElementById('cambio'),
    verResultado = document.getElementById('resultado')
    
let dolar = document.getElementById('valor02'),
        divisaExtranjera01 = 1.21,
        btn_cambio02 = document.getElementById('cambio02'),
        verResultado02 = document.getElementById('resultado02')


// creamos la funcion para el cambio

btn_cambio.addEventListener('click', () => {
    let total = Number(euro.value) * Number(divisaExtranjera)
    verResultado.innerHTML = total 
})


// creamos la funcion para el cambio

btn_cambio02.addEventListener('click', () => {
    let total = Number(dolar.value) * Number(divisaExtranjera01)
    verResultado02.innerHTML = total 
})




























    /* console.log(dolar + " dolares son " + " " + NombreDivisa
 + " . ")

 document.write (resultado) */