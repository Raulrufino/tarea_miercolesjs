/**
 * Ejercicio entrada al cine OCIMAX
 */
let autorizacion = prompt('Ocimax no permite la entrada a personas que no esten vacunadas ¿Está usted vacunado?')

if(autorizacion === 'si') {
    console.log('Puede usted pasar')
}else if (autorizacion === 'no') {
    console.log('Lo sentimos no podemos dejarle pasar sin la vacuna puesta')
}else{
    console.log(`disculpe no le oido bien, SI o NO`)
}