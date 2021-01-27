/**
 * EJEMPLO DE VARIABLES VAR PROHIBIDO LET 
 */

// DECLARACION

let color_deFuente;

// asignacion
color_deFuente = 'Marron';

let amigo = 'sergio';

//asignacion por referencia

let carne = 'pollo';
let pollo = 'ave';


//¿Toni como haces para que en chrome se te desplegue la ventanita de arriba cuando haces las variables?

carne = 'ternera';

console.log(carne)
console.log(pollo)

//VALOR TIPO BOLEANOS en variable

let mi_padre_juega_a_fubol = false
let hace_falta_arroz = true

//valor tipo objeto en variable

let colores = [ //ejemplo de variable con Array
    amarillo,
    azul,
    negro,
    blanco
]

let objeto = {  //ejemplo de variable con objeto
    tipo : 'arabica',
    lugar : 'colombia',
    fecha_de_recogida: 'enero'
}

//CONSTANTES

const OFICIO = 'albañil';
const NUMERO_SSOCIAL = '45454545454';

// STRINGS caracteres especiales

let texto = 'El lee "el camino sera lagor" '; //para poner comillas "" y que no interfiera
console.log(texto);

let paginaWeb = 'www:\\casarufino.es';

console.log(paginaWeb);


let parrafo = ' un dia fui a caminar \
y el otro no pude \
por que me rompi una pierna';
console.log(parrafo);


//PROMPT , es como un imput en html , en este caso utilizamos la variable let para darle valor al prompt

let plato;

console.log(typeof plato);
plato = prompt('escriba su plato preferido');
console.log(plato);


//en este caso utilizamos la variables que es igual a un numero con pregunta y con prompt, si no escribimos numero o string donde toca da error

let colores = Number(prompt('cuantos colores ves:'));
let trabajo = String(prompt('Profesion:'));
console.log(typeof colores)

/**
 * OPERADORES
 */

let numero01 = 5;
let numero02 = 7;

let calcular = numero01 + numero02 -5;
let calculovarios = (5 + numero02) * 10;