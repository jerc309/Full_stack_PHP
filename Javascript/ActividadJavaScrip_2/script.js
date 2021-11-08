
/* Ejercicios JavaScript Nivel 2
Ejercicio 1.
Crear un programa que defina tres variables llamadas “variable_a”, “variable_b” y
“variable_resultado”. Cargar las primeras dos con los valores numéricos 33 y 77. Sumar ambas
variables y guardar el resultado en la variable “variable_resultado”. Imprimir el resultado por consola. */
console.log('Ejercicio 1')
var variable_a=33
var variable_b=77
var variable_resultado= variable_a+variable_b

console.log(variable_resultado)


/* Ejercicio 2.
Crear un programa que defina 5 variables llamadas “a”,“b”...“e” y una sexta variable llamada
“promedio”. Cargar las 5 variables con valores y calcular el promedio de los mismos. Imprimir el resultado por consola. */
console.log('Ejercicio 2')

var a=2
var b=3
var c=4
var d=4
var e=5

var promedio= (a+b+c+d+e)/5



/* Ejercicio 3.
Crear un programa que defina las variables “nota1” y “nota2”. Asignarle valores a ambas.
Comparar si “nota1” es mayor a “nota2” e imprimir el resultado de la comparación.*/
console.log('Ejercicio 3')
var nota1=22
var nota2=33

if (nota1>nota2) {
    console.log('Nota1 es > que nota 2')
}
if (nota1<nota2) {
    console.log('Nota1 es < que nota 2')
}
if (nota1==nota2) {
    console.log('Nota1 es igual que nota 2')
}

/* Ejercicio 4.
Una farmacia hace el 15% de descuento a sus clientes si la compra es mayor a 100 pesos. Escribir
un programa que, dado el monto de una compra como valor numérico, diga cuanto debe abonar
el cliente aplicando el descuento si es necesario. */
console.log('Ejercicio 4')

var monto= Number(prompt('Ingrese el monto'))
montoTotal=0
if (monto>=100){
    montoTotal=(monto*0.15)+monto
    console.log('El monto a pagar es de: '+montoTotal)
}
else {
    console.log('El monto a pagar es de: '+monto)

}

/* Ejercicio 5.
Crear un programa que calcule el pago que hacen un grupo de personas para ver una película
teniendo en cuenta que si el grupo es menor de 8 personas el pago es de 1.5 pesos por persona y
para grupos de 8 personas o más el pago es 0.5 pesos por persona. */
console.log('Ejercicio 5')
var personas= Number(prompt('Ingrese la cantidad de personas'))

if (personas<8){
    montoTotal=(personas*1.5)
    console.log('El monto a pagar por '+personas+' prsonas es de: '+montoTotal)
}
else if (personas>=8) {
    montoTotal=(personas*0.5)
    console.log('El monto a pagar por '+personas+' prsonas es de: '+montoTotal)

}


/* Ejercicio 6.
Crear un programa que defina las variables “nota1” y “nota2”. Asignarle valores a ambas.
Comparar si “nota1” es mayor a “nota2” imprimir el mensaje “Nota1 es mayor” o “Nota2 es
mayor” según el resultado de la comparación. */

console.log('Ejercicio 6')
var nota1=22
var nota2=33

if (nota1>nota2) {
    console.log('Nota1 es > que nota 2')

}
if (nota1<nota2) {
    console.log('Nota1 es < que nota 2')
}
if (nota1==nota2) {
    console.log('Nota1 es igual que nota 2')
}


/* Ejercicio 7.
Las puntuaciones de las películas se clasifican en:
0: mala, 1: regular, 2: buena,3: muy buena, 4: excelente
Crear un programa donde se pide al usuario que ingrese un valor entre 0 a 4. Imprimir la
clasificación de la película según el valor numérico. */

console.log('Ejercicio 7')
var puntuacion= Number(prompt('Ingrese la puntucaion de la pelicula'))
var calificaion=["mala", "regular","buena","muy buena","excelente"]
alert('la puntuacion de la pelicula es '+calificaion[puntuacion])


/* Ejercicio 8.
Crear un programa que imprima una cuenta regresiva de 59 a 0. */
console.log('Ejercicio 8')
for (var i = 59; i>=0; i--) {
    console.log(i)
}


/* Ejercicio 9.
Crear un programa que imprima los números pares de 0 a 100. */
console.log('Ejercicio 9')
for (var i = 0; i<=101; i += 2) {
    console.log(i)
}


/* Ejercicio 10.Curso Codo a Codo 4.0 – FullsStack
Crear un programa para imprimir todos los números de 100 a 0 inclusive, en */
console.log('Ejercicio 10')
for (var i = 0; i<=101; i++) {
    console.log(i)
}


/* Ejercicio 11.
Crear un programa en donde el usuario ingresa números y se guardan en un array. Al ingresar “-1”
se imprimirán los números ingresado junto con sus posiciones dentro del array. */
console.log('Ejercicio 11')



var numeros=[]
var numero=0

while (numero!==-1) {
    numero= Number(prompt('Ingrese un numero'))
    numeros.push(numero)


}
numeros.pop()
console.log(numeros.length)

for (var i = (numeros.length)-1 ; i >= 0; i--) {
    console.log('El nuemro de la posicion '+i+' es: '+numeros[i])
    
}




/* Ejercicio 12.
Crear un programa en donde el usuario ingresa números hasta que ingresa “-1”, en dicho caso el
programa termina e imprime el promedio de los números ingresados. */

console.log('Ejercicio 12')



var numeros=[]
var numero=0

while (numero!==-1) {
    numero= Number(prompt('Ingrese un numero'))
    numeros.push(numero)


}
numeros.pop()

var promedio=0
for (var i = (numeros.length)-1 ; i >= 0; i--) {
    console.log('El nuemro de la posicion '+i+' es: '+numeros[i])
    promedio=promedio+numeros[i]
    
}
var calculoPromedio=(promedio/numeros.length)
console.log('el promedio es :'+calculoPromedio)

/* Ejercicio 13.
Crear un programa en donde el usuario ingrese el nombre y el precio de 5 productos, al finalizar,
se listarán en pantalla el nombre y el precio de los productos. */



console.log('Ejercicio 13')
var mapa= new Map();
for (var i = 1; i<=5; i++) {
    console.log(i)
    producto= prompt('Nombre del Producto'+i+':')
    precio= Number(prompt('Precio:'))
    mapa.set(producto,precio);

}
for (var i = 1; i<=6; i++) {
    console.log(`El producto :${producto} tinen un valor de ${precio}`);

}




/* Ejercicio 14.
Se ingresan un conjunto de n alturas de personas por teclado. Mostrar la altura promedio de las personas. */

console.log('Ejercicio 14')



var numeros=[]
var numero=0
var personas= Number(prompt('Ingrese cantidad de personas'))
var personasCon=0
while (personasCon!==personas) {
    numero= Number(prompt('Ingrese un la altura'))
    numeros.push(numero)
    personasCon++
}
numeros.pop()

var promedio=0
for (var i = (numeros.length)-1 ; i >= 0; i--) {
    /*console.log('El nuemro de la posicion '+i+' es: '+numeros[i])*/
    promedio=promedio+numeros[i]
    
}
var calculoPromedio=(promedio/personas)
console.log('El promedio de la altura es :'+calculoPromedio)


/* Ejercicio 15.
Crear un Programa que pida al usuario un número entre 0 y 25, deberá mostrar por pantalla su
significado en el bingo. Ej: 14 = "Borracho" */

console.log('Ejercicio 7')
var puntuacion= Number(prompt('Ingrese un número entre 0 y 25'))
var calificaion=["Agua","Niño","Bingo.es","La cama","Gato","Perro","Revólver","Incendio","Arroyo","Cañón","Minero","Soldado","La mala suerte","Borracho","Niña bonita","Anillo","Desgracia","Sangre","Pescado","La Fiesta","Mujer","Loco","Cocinero","Caballo","Gallina"]
alert('El significado en el bingo '+calificaion[puntuacion+1])



/* Ejercicio 16.
Crear 2 Vectores, uno corresponderá a los nombres y otro a los apellidos de 10 compañeros del
curso de Fullstack de codo a codo */

var nombre=["juan","pedro","ramon","Jose"]
var apellidos=["Reyes","carodna","madera","Guerrero"]