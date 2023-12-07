

function Saludo() {
    alert("BIENVENIDO USUARIO -SIN PALABRAS")
}

function suma(){
    //DECLARAMOS LAS VARIABLES

    let A = 0;
    let B = 0;
    let SUMA = 0;


    //SOLICITAR LOS VALORES

    alert("Este algoritmo realiza la suma de dos valores ingresados por usted ");
    A = parseInt(prompt("ingrese el primer numero"));
    B = parseInt(prompt("Ingrese el segundo numero"));

    //REALIZAMOS LAS OPERAIOCNES
    SUMA = A + B;

        //MOSTRAMOS LOS RESULTADOS
    alert("el resultado es " + SUMA + ", las mejoras");
}

function operacionesBasicas() {
    let A = 0;
    let B = 0; 
    let SUMA = 0;
    let RESTA = 0;
    let MULTIPLICACION = 0; 
    let DIVISION = 0;

    alert("En este algoritmo se va a hacer las operaciones basicas con los dos numeros que usted ingrese, para ver los resultados de cada uno de enter")

    A = parseInt(prompt("Ingrese el primer numero"))
    B = parseInt(prompt("Ingrese el segundo numero"))

    SUMA = A + B;
    RESTA = A - B;
    MULTIPLICACION = A * B;
    DIVISION = A / B;

    alert("La suma es " + SUMA);
    alert("La restas es " + RESTA);
    alert("La multiplicacion es " + MULTIPLICACION);
    alert("La division es " + DIVISION);

}

function cuadradoNumero() {

    let valor = 0;

    valor = parseInt(prompt("Ingrese un numero"));

    cuadrado = valor * valor;

    alert("El cuadrado del valor ingresado es " + cuadrado);

}

function areaTriangulo(){
    let base = 0;
    let altura = 0;

    alert("Este algoritmo le va a mostrar el area del triangulo");

    base = parseInt(prompt("Ingrese la base del triangulo"));
    altura = parseInt(prompt("Ingrese la altura del triangulo"));

    area = (base * altura) / 2;
    
    alert("El area del triangulo es " + area);

}


function numeroMayor() {
    let A,B = 0;

    alert("en este algoritmo");

    A = parseInt(prompt("ingrese el primer numero "));
    B = parseInt(prompt("Ingrese el segundo nummero"));

    if (A == B) {
        alert("Los valores ingresados son iguales");
    } 
    else if (A > B){
        alert(A + " Es mayor que " + B);
    }
    else {
        alert(B + " Es mayor que " + A); 
    }
}

function conversionMedidad(){

    let metros = 0;

    alert("Este algritmo medidas")

    metros = parseInt(prompt("Ingrese el valor en metros"));

    pulgadas = metros * 39.37;
    pies = metros * 3.28;
    km = metros / 1000;



    alert("Pulgadas" + pulgadas);
    alert("Pies" + pies);
    alert("Kilometro" + km);

}

function conversionTemperatura() {
    let centigrados = 0;


    alert("Este algoritmo va a hacer la conversion de unidades de medida de Centigrados a  Fahrenheit Y Celsius ");

    centigrados = parseInt(prompt("Ingrese el valor del Grado Centigrado"));

    fahrenheit = (centigrados *  9/5) + 32;
    celsius = (fahrenheit - 32) * 5 / 9;

    alert("fahrenheit: " + fahrenheit);
    alert("celsius: " + celsius);
}

function promedioEstudiante(){
    let nombre;
    let materia;
    let notas;
    let SUMA = 0;

    alert("da el promedio de 10 notas");

    nombre = prompt("Ingrese el nombre del estudiante");
    materia = prompt("Ingrese la materia ");
    nota1 = parseInt(prompt("Ingrese la 1 nota"));
    nota2 = parseInt(prompt("Ingrese la 2 nota"));
    nota3 = parseInt(prompt("Ingrese la 3 nota"));
    nota4 = parseInt(prompt("Ingrese la 4 nota"));
    nota5 = parseInt(prompt("Ingrese la 5 nota"));
    nota6 = parseInt(prompt("Ingrese la 6 nota"));
    nota7= parseInt(prompt("Ingrese la 3 nota"));
    nota8 = parseInt(prompt("Ingrese la 4 nota"));
    nota9 = parseInt(prompt("Ingrese la 5 nota"));
    nota10 = parseInt(prompt("Ingrese la 6 nota"));
   

    SUMA = nota1 + nota2 + nota3 + nota4 + nota5 + nota6 + nota7 + nota8 + nota9 + nota10;
    promedio = SUMA / 10;

    alert("promedio " + promedio)
    
}

function descuentoCompra(){
    
let kilosManzanas = parseFloat(prompt("Ingrese la cantidad en kilos de manzanas:"));

let precioPorKilo = 4500;
let descuento = 0;

if (kilosManzanas >= 3 && kilosManzanas <= 5) {
    descuento = 0.10;
} else if (kilosManzanas >= 6 && kilosManzanas <= 10) {
    descuento = 0.15;
} else if (kilosManzanas > 10) {
    descuento = 0.20;
}

let montoTotal = kilosManzanas * precioPorKilo;
let montoConDescuento = montoTotal - (montoTotal * descuento);

alert("Cantidad de kilos de manzanas: " + kilosManzanas + " kg");
alert("Precio por kilo: $" + precioPorKilo);
alert("Descuento aplicado: " + (descuento * 100) + "%");
alert("Monto a pagar: $" + montoConDescuento);

}

function parImpar() {
let numero = parseInt(prompt("Ingrese un número:"));

if (numero % 2 == 0) {
    alert(numero + " es un número par.");
} else {
   alert(numero + " es un número impar.");
}

}


function salarioHora(){
let horasTrabajadas = parseInt(prompt("Ingrese las horas trabajadas en la semana:"));

let tarifaPorHora = 10000; 
let horasEstandar = 40;

let salarioSemanal;

if (horasTrabajadas <= horasEstandar) {
    salarioSemanal = horasTrabajadas * tarifaPorHora;
} else {
    let horasExtras = horasTrabajadas - horasEstandar;
    salarioSemanal = (horasEstandar * tarifaPorHora) + (horasExtras * 20000); 
}

alert("El salario semanal es: $" + salarioSemanal);

}

function menorde3(){

    let numero1 = parseFloat(prompt("Ingrese el primer número:"));
let numero2 = parseFloat(prompt("Ingrese el segundo número:"));
let numero3 = parseFloat(prompt("Ingrese el tercer número:"));

let menorNumero;

if (numero1 < numero2 && numero1 < numero3) {
    menorNumero = numero1;
} else if (numero2 < numero1 && numero2 < numero3) {
    menorNumero = numero2;
} else {
    menorNumero = numero3;
}

alert("El número menor es: " + menorNumero);

}

function convertirCmaM() {
    let centimetros = 0;

    alert("Este algoritmo va a convertir centímetros a metros.");

    centimetros = parseFloat(prompt("Ingrese el valor en centímetros"));

    let metros = centimetros / 100;

    alert("El valor en metros es: " + metros + " m");
}

function CMaM() {
    convertirCmaM();
}
 
function YearBirth() {
    let edad = 0;

    alert("Este algoritmo calculará el año de nacimiento basándose en la edad ingresada.");

    edad = parseInt(prompt("Ingrese su edad"));

    let anoActual = new Date().getFullYear();

    let anoNacimiento = anoActual - edad;

    alert("Usted nació aproximadamente en el año: " + anoNacimiento);
}


function Interes() {
    let capital = 0;
    let numeroYears = 0;

    alert("Este algoritmo calculará el dinero ganado después de N años con un interés del 2% mensual.");

    capital = parseFloat(prompt("Ingrese el capital a invertir"));

    numeroYears = parseInt(prompt("Ingrese el número de años"));

    let interesMensual = 0.02; 
    let totalCapital = capital;

    for (let i = 1; i <= numeroYears * 12; i++) {
        totalCapital *= (1 + interesMensual);
    }

    let ganancia = totalCapital - capital;

    alert("Después de " + numeroYears + " años, su capital será de: $" + totalCapital.toFixed(2) + "\nLa ganancia total será de: $" + ganancia.toFixed(2));
}

function PromedioIngles() {
    let calificaciones = [];
    let sumCalificaciones = 0;

    alert("Este algoritmo calculará el promedio de 5 calificaciones en Inglés y determinará si el alumno aprueba o reprueba.");

    for (let i = 1; i <= 5; i++) {
        let calificacion = parseFloat(prompt("Ingrese la calificación " + i + " (en escala de 1 a 5)"));
        
        if (calificacion < 1 || calificacion > 5 || isNaN(calificacion)) {
            alert("Por favor, ingrese una calificación válida entre 1 y 5.");
            return;
        }

        calificaciones.push(calificacion);
        sumCalificaciones += calificacion;
    }

    let promedio = sumCalificaciones / 5;

    let mensaje = "El promedio es: " + promedio.toFixed(2) + "\n";

    if (promedio >= 3) {
        mensaje += "¡Felicidades! El alumno ha aprobado.";
    } else {
        mensaje += "El alumno ha reprobado.";
    }

    alert(mensaje);
}

function realizarSuma() {
    let limite = parseInt(prompt("Ingrese el límite de entradas"));
    
    if (isNaN(limite) || limite <= 0) { 
        alert("Por favor, ingrese un límite válido mayor a cero.");
        return; 
    }

    let suma = 0;

    for (let i = 1; i <= limite; i++) {
        let valor = parseFloat(prompt("Ingrese el valor " + i));

        if (isNaN(valor)) {
            alert("Por favor, ingrese un valor válido.");
            return; 
        }
        suma += valor;
    }

    alert("La suma de los valores es: " + suma.toFixed(2));
}


function CostoMatricula() {
    let numeroMaterias = parseInt(prompt("Ingrese el número de materias que cursa"));
    let promedio = parseFloat(prompt("Ingrese el promedio del último periodo DE 0 a 5"));

    if (isNaN(numeroMaterias) || numeroMaterias <= 0) {
        alert("Por favor, ingrese un número de materias válido mayor a cero.");
        return;
    }

    if (isNaN(promedio) || promedio < 0 || promedio > 5) {
        alert("Por favor, ingrese un promedio válido entre 0 y 5.");
        return;
    }

    let costoMatricula = 1200000; // Costo en pesos colombianos

    if (promedio >= 4.5) {
        costoMatricula *= 0.7;
        var mensaje = "El aprendiz obtuvo un descuento del 30% y no se le cobró IVA.\n";
    } else {
        costoMatricula *= 1.1;
        var mensaje = "El aprendiz deberá pagar la matrícula completa con el 10% de IVA.\n";
    }

    let costoTotal = costoMatricula * numeroMaterias;

    mensaje += "El aprendiz debe pagar un total de: $" + costoTotal.toLocaleString(); // Formatear a moneda colombiana

    alert(mensaje);
}



function esPrimo(numero) {
    if (numero <= 1) return false;
    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
            return false;
        }
    }
    return true;
}

function listarNumerosPrimos() {
    let inicioRango = parseInt(prompt("Ingrese el valor inicial del rango"));
    let finRango = parseInt(prompt("Ingrese el valor final del rango"));

    if (isNaN(inicioRango) || isNaN(finRango) || inicioRango < 0 || finRango < 0) {
        alert("Por favor, ingrese valores válidos y positivos.");
        return; 
    }

    if (inicioRango > finRango) {
        [inicioRango, finRango] = [finRango, inicioRango];
    }

    let numerosPrimos = [];

    for (let i = inicioRango; i <= finRango; i++) {
        if (esPrimo(i)) {
            numerosPrimos.push(i);
        }
    }

    if (numerosPrimos.length === 0) {
        alert("No hay números primos en el rango especificado.");
    } else {
        alert("Números primos en el rango " + inicioRango + " a " + finRango + ": " + numerosPrimos.join(', '));
    }
}




function Nomina() {
    let numEmpleados = parseInt(prompt("Ingrese el número de empleados"));
    
    for (let i = 0; i < numEmpleados; i++) {
        let nombre = prompt("Ingrese el nombre del empleado " + (i + 1));
        let valorDevengado = parseFloat(prompt("Ingrese el valor devengado del empleado " + (i + 1)));
        let salarioMinimo = parseFloat(prompt("Ingrese el valor actual del salario mínimo"));
        
        if (isNaN(valorDevengado) || isNaN(salarioMinimo) || valorDevengado < 0 || salarioMinimo <= 0) {
            alert("Por favor, ingrese valores válidos.");
            return;
        }
        
        let descuentoSalud, descuentoPension, descuentoSeguridadSocial, descuentoImpuesto;

        if (valorDevengado <= 3 * salarioMinimo) {
            descuentoSalud = 0.05;
            descuentoPension = 0.118;
            descuentoSeguridadSocial = 0.03;
        } else if (valorDevengado > 3 * salarioMinimo && valorDevengado <= 8 * salarioMinimo) {
            descuentoSalud = 0.10;
            descuentoPension = 0.15;
            descuentoSeguridadSocial = 0.05;
        } else if (valorDevengado > 8 * salarioMinimo && valorDevengado <= 20 * salarioMinimo) {
            descuentoSalud = 0.20;
            descuentoPension = 0.13;
            descuentoSeguridadSocial = 0.10;
            descuentoImpuesto = 0.05;
        } else {
            alert("El valor devengado ingresado no se encuentra en ninguna de las categorías especificadas.");
            return;
        }

        let descuentoSaludValor = valorDevengado * descuentoSalud;
        let descuentoPensionValor = valorDevengado * descuentoPension;
        let descuentoSeguridadSocialValor = valorDevengado * descuentoSeguridadSocial;
        let descuentoImpuestoValor = descuentoImpuesto ? valorDevengado * descuentoImpuesto : 0;

        let salarioNeto = valorDevengado - descuentoSaludValor - descuentoPensionValor - descuentoSeguridadSocialValor - descuentoImpuestoValor;

        alert("Nombre: " + nombre +
              "\nValor Devengado: $" + valorDevengado.toFixed(2) +
              "\nDescuento Salud: $" + descuentoSaludValor.toFixed(2) +
              "\nDescuento Pension: $" + descuentoPensionValor.toFixed(2) +
              "\nDescuento Seguridad Social: $" + descuentoSeguridadSocialValor.toFixed(2) +
              (descuentoImpuesto ? "\nDescuento Impuesto de Guerra: $" + descuentoImpuestoValor.toFixed(2) : "") +
              "\nSalario Neto: $" + salarioNeto.toFixed(2));
    }
}
