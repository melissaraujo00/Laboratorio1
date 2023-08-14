//Crear un programa que permita obtener la sumatoria, el promedio, el número mayor y menor de un arrays de números.

let numeros = [100, 200, 300, 100, -10];
//inicializan las variables
let suma = 0;
let Mayor = numeros[0];
let Menor = numeros[0];

//inicio del bucle for
for (let i = 0; i < numeros.length; i++)
{   
    //se inicializa la variable Mayor en la posición 0, luego va comparando con cada posición del arreglo. 
    //Si es mayor la variable cambia su valor y sigue comparando, hasta que concluye con el número mayor que todos los datos del arreglo.
    if(Mayor > numeros[i]){
        Mayor = numeros[i]
    }
    //lo mismo pero el objetivo es descubrir el número menor del arreglo
    else if(Menor < numeros[i]){
        Menor = numeros[i]
    }
    //sumatoria, en la primera iteración suma el número, la variable "suma" cambia de valor y así hasta que se suma cada número del arreglo.
    suma += numeros[i];
}
//promedio, divide la sumatoria entre el largo del arreglo, es decir, entre 5.
promedio = suma / numeros.length;

//imprime el resultado
console.log(`La sumatoria del arreglo es: ${suma}`);
console.log(`El promedio del arreglo es: ${promedio}`);
console.log(`El numero menor del arreglo es: ${Menor}`);
console.log(`El numero mayor del arreglo es: ${Mayor}`);
