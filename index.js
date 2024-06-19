// Calculadora de factoriales

function convFactorial() {

    let num = parseInt(prompt("Ingrese un número"))
    let resultado = num

    if (isNaN(num)) {
        console.log("El valor ingresado no es un numero, ingrese un valor valido");
        return convFactorial();

    }

    else if (num == 0 || num == 1) {
        console.log(`El factorial del numero ${num} es = ` + 1);
    }

    else {
        while (num > 1) {
            num--
            let total = resultado * num
            resultado = total  
        }
        console.log(`El factorial del numero ingresado es = ` + resultado);
    }
}

convFactorial()

// Velenni De La Hoz.
