for (let i = 2; i <= 100; i++) { //i seran todos los numeros del 2 al 100, ya que el 1 es neutro
    //empeza de 2, hasta sea menor o igual a 100 y ira de uno en uno
    numDivisores = 0; //cuenta la veces que tiene un divisor

    for (j = 1; j <=i; j++) { // j sera la variable que divida a i
        //comezara por 1, sea menor o igual a i, se ira de uno en uno
        if (i % j == 0) { //si la division de i y j, da como residuo 0 contara como un division
            numDivisores++;
        }     
    }
    if (numDivisores == 2) { //si el numero de divisiones que da 0, son 2 entonces determinamos que es primo
        alert(`El numero es primo ${i}`)   
    }
}





