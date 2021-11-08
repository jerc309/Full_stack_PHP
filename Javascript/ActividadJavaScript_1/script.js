
/*         Ejercicios JavaScript Nivel 1
Ejercicio 1
Mostrar por consola, tu nombre, apellido, comisión y hobbies */


console.log('Ejercicio 1');
console.log(' Nombre: Johann ; Apellido: Reyes');
console.log(' Comision: 115');


/* Ejercicio 2
Escribe un programa que le pida al usuario ingresar una frase y la imprima en la consola.
Recuerda que para pedirle al usuario que escriba una frase debes utilizar el método prompt() y para escribir
en la consola debes utilizar el método console.log(). */

console.log('Ejercicio 2')

var frase= prompt(' Escribe Una Frase')
console.log(' '+frase)

/* 
Ejercicio 4
Escribe un programa que le pida al usuario su nombre y apellido y lo imprima por consola */

console.log('Ejercicio 3')
var nombre= prompt(' Ingrese Nombre:')
var apellido= prompt(' Ingrese apellido:')

console.log(' Nombre: '+nombre)
console.log(' Apeñllido: '+apellido)


/* Ejercicio 5
Escribe un programa que le pida al usuario su año de nacimiento e imprima su edad actual en la consola
con la frase "Tienes X años". */

console.log('Ejercicio 5')
var fechaNacimiento = Number(prompt(' Ingrese Fecha de Nacimiento:'))
var edad= 2021-fechaNacimiento
console.log(' Tienes '+edad+' años')


/* Ejercicio 6
El índice de masa corporal (IMC), o BMI por sus siglas en inglés, es un valor que determina la cantidad de
grasa de una persona.
El BMI se calcula con la siguiente formula:
peso / altura^2
Escribe un programa que le pida al usuario su peso y su altura para calcular su BMI e imprima la frase "Tu
BMI es X". */

console.log('Ejercicio 6')

var peso= Number(prompt(' Ingrese su peso:'))
var altura= Number(prompt(' Ingrese su altura:'))
var indice= peso/Math.pow(altura,2)
console.log(' Tu BMI es '+indice)


/* Ejercicio 7
Declarar una variable de nombre cantidadDeVentanas y asignarle la cantidad de ventanas que hay en
tu casa. Mostrar el valor de la variable por la consola. */

console.log('Ejercicio 7')

const cantidadDeVentanas= 4
console.log(' cantidadDeVentanas: '+cantidadDeVentanas)


/* Ejercicio 8
Declarar una variable de nombre soyHumano y asignarle el valor true (verdadero). Mostrar el valor de
la variable por la consola. */
console.log('Ejercicio 8')
var soyHumano= true
console.log(' soyHumano: '+soyHumano)

/* Ejercicio 9
Declarar una variable de nombre miGustoDePizza y asignarle la variedad de pizza que más te guste
usando un String (cadena de caracteres). Mostrar el valor de la variable por la consola. */
console.log('Ejercicio 9')
var miGustoDePizza= 'Margarita'
console.log(' miGustoDePizza: '+miGustoDePizza)



/* Ejercicio 10
Mostrar por la consola los siguientes valores false, 'Hola', 0 y 'Minions' usando la misma variable. */
console.log('Ejercicio 10')


var iterable = [false, 'hola', 0];

for (const value of iterable) {
  console.log(value);
}



/* Ejercicios 11
Crear un programa que dado la base y la altura de un triangulo calcule la superficie y el perímetro.Curso codo a codo 4.0 – Fullstack */
console.log('Ejercicio 11')

var base= prompt(' Ingrese la Base del triangulo:')
var altura=prompt(' Ingrese la altura de un tringulo')

var area=(base*altura)/2

var hipotenusa= Number(Math.sqrt(Math.pow(base,2)+Math.pow(altura,2)))

var perimetro= hipotenusa+base+altura

console.log(' El area del trianguro es: '+area)
console.log(' El perimetro del triangulo es: '+perimetro)









/* Ejercicio 12
Crear un programa que, al pasar los datos del peso de una persona en libras, haga la conversión a
kilogramos */
console.log('Ejercicio 12')

var pesoLibras= prompt(' Ingrese su peso en Libras')
const librasConstamte= 2.2046
var kilogramos= Number(pesoLibras/librasConstamte)
console.log(' Su peso en Kilogramos es: '+kilogramos)





/* Ejercicio 13
Crear un programa que al ingresar el sueldo de un trabajador, aplique el 15% de aumento y lo muestre
en la consola. */
console.log('Ejercicio 13')

var sueldo= Number(prompt(' Ingrese su sueldo'))
var sueldoAjuste = (sueldo*0.15)+sueldo
console.log(' Su suseldo con el ajuste del 15% es de:'+sueldoAjuste)

/* Ejercicio 14
Crear un programa que al ingresar una nota de un alumno, muestre con un alert() si el alumno esta
“aprobado” (se aprueba con una nota mayor a 7) y “reprobado” en caso contrario */
console.log('Ejercicio 14')
var nota= Number(prompt('Ingrese su nota:'))
if (nota<=7) {
     alert('Reprobado')
     }
else {
    alert('Aprobado')
}


/* Ejercicio 15
Crear un programa tal que dado como datos la categoría y el sueldo de un trabajador, calcule el
aumento correspondiente teniendo en cuenta la siguiente tabla. Mostrar con un Alert() la categoría y
el nuevo sueldo */
console.log('Ejercicio 15')
var categoria = prompt('Ingrese Categoria(DEV,Sysadmin):')
var sueldo= Number(prompt('ingrese Sueldo:'))
if (categoria=='DEV'){
    let sueldoAjuste = (sueldo*0.20)+sueldo
    console.log(' Su suseldo con el ajuste del 20% por categoria DEV es de:'+sueldoAjuste)
}
else if (categoria=='Sysadmin') {
    let sueldoAjuste = (sueldo*0.15)+sueldo
    console.log(' Su suseldo con el ajuste del 15% por Categoria Sysadmin es de:'+sueldoAjuste)
}
else {
    alert('No existe la categoria '+categoria)
}
console.log(categoria)


/* Ejercicio 16
Crear un programa tal que dado como datos la matrícula y 5 calificaciones de un alumno; imprima la
matricula, el promedio y la palabra “aprobado” si el alumno tiene un promedio mayor o igual que 7, y
la palabra “no aprobado” en caso contrario */
console.log('Ejercicio 16')
var matricula = prompt('Ingrese matricula:')
var promedio=0  

for (var i = 1; i < 6; i++) {
    var nota = Number(prompt('Ingrese nota-'+i+':'))
    promedio=(promedio+nota)
    if (i==5){
        promedio=(promedio/5)
        if (promedio>=7){
            alert('Alumno con matricula '+matricula+' Aprobado con un promedio de: '+promedio)
            
        }
        else {
            alert('Alumno con matricula '+matricula+' Reprobado con un promedio de: '+promedio)

        }
    }
    
    
}


/* Ejercicio 17
Dado 3 números enteros, determinar cual de ellos es el mayor, tenga en cuenta que los números
pueden ser iguales. */
console.log('Ejercicio 17')
var numeros=[]
var numero=0
for (var i = 1; i < 4; i++) {
    numero= prompt('Ingrese Numero '+i)
    numeros.push(numero)
    if (i==3) {
        numeros.sort()
        
        alert('El nuemro mayor es '+numeros[2])
    }

}
