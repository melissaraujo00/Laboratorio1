let oracion = prompt("Ingrese una oracion"); //En la variable oracion se guardara la frase que se introduzca

if (oracion !== "") { //Si el valor ingresado no es vacio
    if (!isNaN(parseFloat(oracion)) && isFinite(oracion)) { //Si el valor ingresado es un numero, valido o punto flotante o infinito mostrara un error
        alert("El valor introducido no es una cadena"); 
    } else {
        let frase = oracion.replace(/[eiouEIOU]/g, 'a'); //Si el valor ingresado es string. replazara eiouEIOU que encuentre
        //g se utiliza para realizar el reemplazo en toda la cadena, no solo en la primera aparición
        alert(frase);
        
    }
} else {
    alert("No se proporcionó ninguna entrada"); //Si el valor es vacio mostrara error
}