//Estas variables almacenaran los numeros que el usuario ingrese
const primerNum = Number(prompt("Ingrese el primer numero: ")); 
const segundoNum = Number(prompt("Ingrese el segundo numero: "));
const tercerNum = Number(prompt("Ingrese el tercer numero: "));

if(!isNaN(primerNum) && !isNaN(segundoNum) && !isNaN(tercerNum)){ // !isNaN es para verificar si los valores ingresados son números válidos.
    const option = Number( //En la variable opciones debe ingresar un numero del 1 al 4
        prompt("Seleccione una opcion: "
            + "\n 1. Sumar"
            + "\n 2. Restar"
            + "\n 3. Multiplicar"
            + "\n 4. Salir")
            
    );
    //en tal caso que ingrese un numero del 1 al 4, se realizara la operacion respectiva
    switch (option) {
        case 1:
            suma = primerNum + segundoNum  + tercerNum;
            alert("La suma es: " + suma);
            break;
        case 2:
            resta =primerNum - segundoNum  - tercerNum;
            alert("La resta es: " + resta);
            break;
        case 3:
            multiplicacion = primerNum * segundoNum  * tercerNum;
            alert("La multiplicacion es: " + multiplicacion);
            break;
        case 4:
            alert("Muchas Gracias!!");
            break;
        //Si introduzco una opcion diferente de 1 y 4, le mostrara error 
        default:
            console.log("Error: Opcion incorrecta");
            break;
    }
} else{ //si el valor de los 3 numeros son string le anunciara
    alert("El valor introducido no es un numero")
}



