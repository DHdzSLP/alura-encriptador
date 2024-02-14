function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}


function encriptar() {
    //obtener el texto ingresado
    let texto = document.getElementById("text-input").value.toLowerCase();
    
    //proceso  de encriptación
    texto = texto.replaceAll('e','enter');
    texto = texto.replaceAll('i','imes');
    texto = texto.replaceAll('a','ai');
    texto = texto.replaceAll('o','ober');
    texto = texto.replaceAll('u','ufat');

    //ajustes visuales
    asignarTextoElemento('h2','')
    asignarTextoElemento('.message',texto);
    
    document.getElementById('img-no-text').remove();
    
}

function desencriptar() {
    //obtener el texto ingresado
    let texto = document.getElementById("text-input").value.toLowerCase();

    texto = texto.replaceAll('enter','e');
    texto = texto.replaceAll('imes','i');
    texto = texto.replaceAll('ai','a');
    texto = texto.replaceAll('ober','o');
    texto = texto.replaceAll('ufat','u');

    asignarTextoElemento('h2','')
    asignarTextoElemento('.message',texto);
    
    document.getElementById('img-no-text').remove();
        
    return;
}


const copiarContenido = async () => {
    let texto = document.getElementById('message').innerHTML;
    try {
      await navigator.clipboard.writeText(texto);
      //console.log('Contenido copiado al portapapeles');
    } catch (err) {
      //console.error('Error al copiar: ', err);
    }
}

