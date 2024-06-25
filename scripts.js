function mostrarFormulario(tarea) {
    const formularioDiv = document.getElementById('formulario');
    formularioDiv.innerHTML = '';

    let htmlFormulario = '';
    
    switch(tarea) {
        case 'invertirCadena':
            htmlFormulario = `
                <div class="formulario">
                    <label for="cadena">Ingrese una cadena:</label>
                    <input type="text" id="cadena">
                    <input type="button" value="Invertir" onclick="invertirCadena()">
                </div>
            `;
            break;
        case 'esPrimo':
            htmlFormulario = `
                <div class="formulario">
                    <label for="numeroPrimo">Ingrese un número:</label>
                    <input type="number" id="numeroPrimo">
                    <input type="button" value="Verificar" onclick="esPrimo()">
                </div>
            `;
            break;
        case 'eliminarDuplicados':
            htmlFormulario = `
                <div class="formulario">
                    <label for="arregloDuplicados">Ingrese un arreglo de números separados por comas:</label>
                    <input type="text" id="arregloDuplicados">
                    <input type="button" value="Eliminar Duplicados" onclick="eliminarDuplicados()">
                </div>
            `;
            break;
        case 'calcularFactorial':
            htmlFormulario = `
                <div class="formulario">
                    <label for="numeroFactorial">Ingrese un número:</label>
                    <input type="number" id="numeroFactorial">
                    <input type="button" value="Calcular Factorial" onclick="calcularFactorial()">
                </div>
            `;
            break;
        case 'contarVocales':
            htmlFormulario = `
                <div class="formulario">
                    <label for="cadenaVocales">Ingrese una cadena:</label>
                    <input type="text" id="cadenaVocales">
                    <input type="button" value="Contar Vocales" onclick="contarVocales()">
                </div>
            `;
            break;
        case 'sumarNumeros':
            htmlFormulario = `
                <div class="formulario">
                    <label for="arregloSumar">Ingrese un arreglo de números separados por comas:</label>
                    <input type="text" id="arregloSumar">
                    <input type="button" value="Sumar Números" onclick="sumarNumeros()">
                </div>
            `;
            break;
        case 'encontrarMaximo':
            htmlFormulario = `
                <div class="formulario">
                    <label for="arregloMaximo">Ingrese un arreglo de números separados por comas:</label>
                    <input type="text" id="arregloMaximo">
                    <input type="button" value="Encontrar Máximo" onclick="encontrarMaximo()">
                </div>
            `;
            break;
    }

    formularioDiv.innerHTML = htmlFormulario;
}

function invertirCadena() {
    const cadena = document.getElementById('cadena').value;
    const cadenaInvertida = cadena.split('').reverse().join('');
    document.getElementById('output').innerText = `Cadena invertida: ${cadenaInvertida}`;
}

function esPrimo() {
    const numero = parseInt(document.getElementById('numeroPrimo').value);
    if (numero <= 1) {
        document.getElementById('output').innerText = `${numero} no es un número primo`;
        return;
    }
    for (let i = 2; i < numero; i++) {
        if (numero % i === 0) {
            document.getElementById('output').innerText = `${numero} no es un número primo`;
            return;
        }
    }
    document.getElementById('output').innerText = `${numero} es un número primo`;
}

function eliminarDuplicados() {
    const arreglo = document.getElementById('arregloDuplicados').value.split(',').map(Number);
    const arregloSinDuplicados = [...new Set(arreglo)];
    document.getElementById('output').innerText = `Arreglo sin duplicados: ${arregloSinDuplicados}`;
}

function calcularFactorial() {
    const numero = parseInt(document.getElementById('numeroFactorial').value);
    let factorial = 1;
    for (let i = 2; i <= numero; i++) {
        factorial *= i;
    }
    document.getElementById('output').innerText = `Factorial de ${numero} es: ${factorial}`;
}

function contarVocales() {
    const cadena = document.getElementById('cadenaVocales').value;
    let conteo = 0;
    const vocales = ['a', 'e', 'i', 'o', 'u'];
    for (let char of cadena.toLowerCase()) {
        if (vocales.includes(char)) {
            conteo++;
        }
    }
    document.getElementById('output').innerText = `Número de vocales: ${conteo}`;
}

function sumarNumeros() {
    const arreglo = document.getElementById('arregloSumar').value.split(',').map(Number);
    const suma = arreglo.reduce((acc, num) => acc + num, 0);
    document.getElementById('output').innerText = `Suma total: ${suma}`;
}

function encontrarMaximo() {
    const arreglo = document.getElementById('arregloMaximo').value.split(',').map(Number);
    const maximo = Math.max(...arreglo);
    document.getElementById('output').innerText = `Número máximo: ${maximo}`;
}
