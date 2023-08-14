let radio = Number(prompt("Introduzca el radio del circulo en cm: ")); //Crearmos una variable numero para almacenar el dato que el usuario introduzca

if (radio >0) { //Si el numero ingresado esmayor a 0 se hara la operacion
    area = Math.PI* (Math.pow(radio,2)); //valor de pi por el radio al cuadrado
    perimetro = 2*Math.PI*radio // dos por el valor de pi por el radio 
    alert("El area del ciculo es: " + area.toFixed(2)); //el are.tofixed se utiliza para redondiar un numero
    alert("El perimetro del circulo es: " + perimetro.toFixed(2));
}else{
    alert("Valor invalido") //si el valor es menor a 0 se tomara  como valor invalido
}


