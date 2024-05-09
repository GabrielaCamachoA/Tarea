/* Calcular el pago neto de un trabajador conociendo el numero de horas trabajadas, la tarifa horaria y la tasa de impuestos */
// crear tres variables: horas tarifa, tasa
// calculo de pago= horas por tarifa
// caculo de impuestos= pago total - 22%

// let horas= 30;
// let tarifa= 10000;
// let tasa= 0.22;

// function pago (horas,tarifa,tasa) {
//     let pagoTotal= horas * tarifa;
//     let impuestos= pagoTotal * tasa;
//     let pagoBruto= pagoTotal - impuestos;

//     console.log("Pago Bruto", pagoTotal);
//     console.log("Impuestos", impuestos);
//     console.log("pagoBruto", pagoBruto);
// }

// pago(30,10000,0.22);


// /* calcular el valor de la suma: 1+2+3.. hasta 100
// se utiliza una variable contador que genere los sucesivos numeros enteros
// otra variable llamada suma para almacenar las sumas parciales 

// pas 1: establecer un contador= 1
// paso 2: establecer la variable suma que = 0

// mientras que contador sea <= 100 hacer, sumar(contador + suma)
// incrementar a contador ++
// saber el valor de la suma*/

// let contador = 1;
// let suma = 0;

// do {
//     suma= contador + suma;
//     contador++;
// } while (contador <= 100);

// console.log(suma);


// Tarea 

// Hallar el factorial de un numero (1)
function factorial(n) {
    if (n === 0) {
      return 1;
    } else {
      return n * factorial(n - 1);
    }
  }
  console.log(factorial(8)); 

  //Convertir en grados Celsius a Fahrenheit (2)
  function gradosConvertidos(celsius) {
    return celsius *  9/5 + 32;
  }
  console.log(gradosConvertidos(5));

  // Determinar si un numero es negativo o positivo (3)
function signoNumero(numero) {
    if (numero < 0) {
       return "Es un numero negativo"; 
    }else if (numero > 0) {
        return "Es un numero positivo";
    }
}
console.log(signoNumero(-23));

/* En un tramo de un rally los conductores no deben ir ni demasiado rápido ni demasiado lentos. 
Este ejercicio debe tomar la longitud del tramo en kilometros y el tiempo empleado, si la velocidad está entre 40 y 60 km/h 
el conductor pasa la prueba en caso contrario es descalificado.  (4) */ 

function medirVelocidad(velocidad) {
    if (velocidad >= 40 && velocidad <= 60) {
        return "Has pasado la prueba";
    }else {
        return "Has descalificado";
    }
}
console.log(medirVelocidad(40));



