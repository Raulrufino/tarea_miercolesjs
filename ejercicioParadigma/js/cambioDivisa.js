// creamos las variables

let euro = document.getElementById('valor01'),
    divisaExtranjera = 0.82,
    btn_cambio = document.getElementById('cambio'),
    verResultado = document.getElementById('resultado')


// creamos la funcion para el cambio

btn_cambio.addEventListener('click', () => {
    let total = Number(euro.value) * Number(divisaExtranjera)
    verResultado.innerHTML = total 
})



























    /* console.log(dolar + " dolares son " + " " + NombreDivisa
 + " . ")

 document.write (resultado) */