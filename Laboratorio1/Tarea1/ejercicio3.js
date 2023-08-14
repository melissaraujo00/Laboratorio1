//Crear un programa que permita determinar si un número ingresado 
//por el usuario es múltiplo de 2 y 13 simultáneamente.

//parseInt transforma de string a número
const num= parseInt(prompt("Ingrese un número entero positivo:"));

//Luego verifica si el dato ingresado es numérico
if (!isNaN(num)) {
    // si cumple el programa empieza a ejecutarse y poner más condiciones. Si es mayor que cero entonces:
    if (num > 0) {
        //Si el residuo es igual a 0 entonces es múltiplo de 2 y de 13
        if(num % 2 === 0 && num % 13 === 0){ 
            console.log(`${num} Es múltiplo de 2 y 13`)
        }
        else{
            console.log(`${num} No es múltiplo de 2 y 13`)
        }
    }
    else{
        console.log("Error: ingrese un numero positivo");
    }
}
else{
    console.log("Error: debe ingresar un número válido");
}