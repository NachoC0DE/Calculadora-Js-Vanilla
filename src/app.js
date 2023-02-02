'use strict'
import html from "./app.html?raw"





export const App = (elementId) => {

    
    (() => {
        const app = document.createElement('div');
        app.innerHTML = html
        document.querySelector(elementId).append(app)
        
    })()

    // Variables traidas del HTML Input y Contador
    const contenedorNumero = document.getElementById('numeros')
    const conteoNumero = document.querySelector('#numeroConteo')
    
    // Variables Numeros HTML
    const numeroUno = document.querySelector('#uno')
    const numeroDos = document.querySelector('#dos')
    const numeroTres = document.querySelector('#tres')
    const numeroCuatro = document.querySelector('#cuatro')
    const numeroCinco = document.querySelector('#cinco')
    const numeroSeis = document.querySelector('#seis')
    const numeroSiete = document.querySelector('#siete')
    const numeroOcho = document.querySelector('#ocho')
    const numeroNueve = document.querySelector('#nueve')
    const numeroCero = document.querySelector('#cero')
    
    
    // Variables Operadores HTML
    const sumaNum = document.querySelector('#suma')
    const restaNum = document.querySelector('#resta')
    const divisionNum = document.querySelector('#division')
    const multiNum = document.querySelector('#multiplicacion')
    const enviar = document.querySelector('#enviar')
    const eliminar = document.querySelector('#borrar')
    
    // Variable Array Y Objeto
    let contenedorNumbers = []
    let contenedorDeOperadores = []
    
    // objeto con los eventos
    const operadores = {
        resta: 'NumpadSubtract',
        suma: 'NumpadAdd',
        multiplicacion: 'NumpadMultiply',
        division: 'NumpadDivide',
        enter: 'Enter',
        salir: 'Escape'
    }
    
    
    // variable total
    let total = 0;
    let aumento = 0;
    let decremento = 0;
    let multi = 0;
    let division = 0;
    
    
    // Funciones
const deleteCaracterNumber = (param) => {
    let numberStr = param
    let numberOne = parseInt(numberStr.substring(0, numberStr.length - 1))
    return numberOne
}

const sumaNumbers = (arreglo) => {
    arreglo.forEach(function (numbers) { total += numbers })
    return total
}
const restaNumbers = (arreglo) => {
    arreglo.forEach(function (numbers) { total -= numbers })
    return total
}
const multiNumbers = (arreglo) => {
    arreglo.forEach(function (numbers) { total *= numbers })
    return total
}
const diviNumbers = (arreglo) => {
    arreglo.forEach(function (numbers) { total /= numbers })
    return total
}
const determinarOperador = (operador) => {
    operador === operadores.suma ? contenedorDeOperadores.push(operador) :
        operador === operadores.resta ? contenedorDeOperadores.push(operador) :
            operador === operadores.multiplicacion ? contenedorDeOperadores.push(operador) :
                operador === operadores.division ? contenedorDeOperadores.push(operador) : new Error(`Error al ejecutar esta accion: ${operador}`)
    return operador
}
const operaTion = () => {

    let totalOperator = contenedorDeOperadores[contenedorDeOperadores.length - 1];

    switch (totalOperator) {
        case operadores.suma:
            console.log(contenedorNumbers)
            aumento = sumaNumbers(contenedorNumbers)
            conteoNumero.textContent = aumento
            break;

        case operadores.resta:
            decremento = restaNumbers(contenedorNumbers)
            conteoNumero.textContent = decremento
            break;

        case operadores.multiplicacion:
            multi = multiNumbers(contenedorNumbers)
            conteoNumero.textContent = multi
            break;

        case operadores.division:
            division = diviNumbers(contenedorNumbers)
            conteoNumero.textContent = division
        default:
            break;
    }

}
const validacioNaN = (numeros) => {
    if (!isNaN(numeros)) {
        contenedorNumbers.push(numeros)
        conteoNumero.textContent = contenedorNumbers
        contenedorNumero.value = ''
    }
}
const clickOperation = (valorClick) => {
    switch (valorClick) {
        case operadores.suma:
            aumento = sumaNumbers(contenedorNumbers)
            conteoNumero.textContent = aumento
            break;
        case operadores.resta:
            decremento = restaNumbers(contenedorNumbers)
            conteoNumero.textContent = decremento
            break;

        case operadores.multiplicacion:
            multi = multiNumbers(contenedorNumbers)
            conteoNumero.textContent = multi
            break;

        case operadores.division:
            division = diviNumbers(contenedorNumbers)
            conteoNumero.textContent = division
        default:
            break;
    }

}
const aumentarNumClick = (numero) => {
    aumento = numero
    contenedorNumero.value += aumento
}

// Click de las op
sumaNum.addEventListener('click', () => {

    let valorEvent = operadores.suma
    let numInput = parseInt(contenedorNumero.value)
    validacioNaN(numInput)

    if (contenedorNumbers.length >= 1) {
        clickOperation(valorEvent)
    }

    contenedorNumbers = []
})

restaNum.addEventListener('click', () =>{
    let valorEvent = operadores.resta
    let numInput = parseInt(contenedorNumero.value)
    validacioNaN(numInput)
    if (contenedorNumbers.length >= 1) {
        clickOperation(valorEvent)
    }
    contenedorNumbers = []
})


divisionNum.addEventListener('click', () => {
    let valorEvent = operadores.division
    let numInput = parseInt(contenedorNumero.value)
    validacioNaN(numInput)
    if (contenedorNumbers.length >= 1) {
        clickOperation(valorEvent)
    }
    contenedorNumbers = []
})

multiNum.addEventListener('click', () =>{
    let valorEvent = operadores.multiplicacion
    let numInput = parseInt(contenedorNumero.value)
    validacioNaN(numInput)
    if (contenedorNumbers.length >= 1) {
        clickOperation(valorEvent)
    }
    contenedorNumbers = []
})


// Click botones numeros
numeroCero.addEventListener('click', () => {
    const numCer = parseInt(numeroCero.value)
    aumentarNumClick(numCer)
})
numeroUno.addEventListener('click', () => {
    const numUno = parseInt(numeroUno.value)
    aumentarNumClick(numUno)
})
numeroDos.addEventListener('click', () => {
    const numDos = parseInt(numeroDos.value)
    aumentarNumClick(numDos)
})
numeroTres.addEventListener('click', () => {
    const numTre = parseInt(numeroTres.value)
    aumentarNumClick(numTre)
})
numeroCuatro.addEventListener('click', () => {
    const numCua = parseInt(numeroCuatro.value)
    aumentarNumClick(numCua)
})
numeroCinco.addEventListener('click', () => {
    const numCi = parseInt(numeroCinco.value)
    aumentarNumClick(numCi)
})
numeroSeis.addEventListener('click', () => {
    const numSei = parseInt(numeroSeis.value)
    aumentarNumClick(numSei)
})
numeroSiete.addEventListener('click', () => {
    const numSie = parseInt(numeroSiete.value)
    aumentarNumClick(numSie)
})
numeroOcho.addEventListener('click', () => {
    const numOch = parseInt(numeroOcho.value)
    aumentarNumClick(numOch)
})
numeroNueve.addEventListener('click', () => {
    const numNue = parseInt(numeroNueve.value)
    aumentarNumClick(numNue)
})


// Eventos 
contenedorNumero.addEventListener('keyup', (event) => {

    let evento = event.code

    if (evento === operadores.resta || evento === operadores.suma || evento === operadores.multiplicacion || evento === operadores.division) {
        determinarOperador(evento)
        let numeros = deleteCaracterNumber(contenedorNumero.value)
        validacioNaN(numeros)
    }

    if (contenedorNumbers.length >= 1) {
        operaTion()
    }

    if (event.code === operadores.enter) {
        contenedorNumero.value = total
    }

    if (event.code === operadores.salir) {
        conteoNumero.textContent = 0
        contenedorNumero.value = ''
        total = 0
    }

    contenedorNumbers = []
})


enviar.addEventListener('click', () => {
    contenedorNumero.value = total
})

eliminar.addEventListener('click', () => {
    conteoNumero.textContent = 0
    contenedorNumero.value = ''
    total = 0
})











    
}