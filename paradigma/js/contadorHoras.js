window.onload = init;
function init(){
    document.getElementById("start").addEventListener("click",cronometrar);
    document.getElementById("stop").addEventListener("click",parar);
    document.getElementById("reiniciar").addEventListener("click",reiniciar);
    h = 0;
    m = 0;
    s = 0;
    document.getElementById("horasminutossegundos").innerHTML="00:00:00";
}         
function cronometrar(){
    escribir();
    id = setInterval(escribir,1000);
    document.getElementById("start").removeEventListener("click",cronometrar);
}
function escribir(){
    let hAux, mAux, sAux;
    s++;
    if (s>59){m++;s=0;}
    if (m>59){h++;m=0;}
    if (h>24){h=0;}

    if (s<10){sAux="0"+s;}else{sAux=s;}
    if (m<10){mAux="0"+m;}else{mAux=m;}
    if (h<10){hAux="0"+h;}else{hAux=h;}

    document.getElementById("horasminutossegundos").innerHTML = hAux + ":" + mAux + ":" + sAux; 
}
function parar(){
    clearInterval(id);
    document.getElementById("start").addEventListener("click",cronometrar);

}
function reiniciar(){
    clearInterval(id);
    document.getElementById("horasminutossegundos").innerHTML="00:00:00";
    h=0;m=0;s=0;
    document.getElementById("start").addEventListener("click",cronometrar);
}