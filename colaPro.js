//codigo de rene
class Cola {
    constructor(tipoDato, tamañoMaximo) {
        this.tipoDato = tipoDato; // Tipo de dato que se almacenará en la cola
        this.tamañoMaximo = tamañoMaximo; // Tamaño máximo de la cola
        this.items = []; // Array para almacenar los elementos de la cola
    }

    // Inicia la cola como vacía (pero con un tamaño definido)
    crearCola() {
        this.items = [];
    }

    // Añade un elemento al final de la cola
    insertar(elemento) {
        if (this.colaLlena()) {
            return "Overflow: La cola está llena";
        }
        if (typeof elemento !== this.tipoDato) {
            return `Error: El elemento no es del tipo ${this.tipoDato}`;
        }
        this.items.push(elemento);
    }

    // Retira el elemento del frente de la cola
    quitar() {
        if (this.colaVacia()) {
            return "Underflow: La cola está vacía";
        }
        return this.items.shift();
    }

    // Verifica si la cola está vacía
    colaVacia() {
        return this.items.length === 0;
    }

    // Verifica si la cola está llena
    colaLlena() {
        return this.items.length === this.tamañoMaximo;
    }

    // Obtiene el elemento del frente de la cola
    frente() {
        if (this.colaVacia()) {
            return "No hay elementos en la cola";
        }
        return this.items[0];
    }

    // Muestra los elementos de la cola
    ver() {
        console.log(this.items);
    }
}

// Creamos una cola de números con un tamaño máximo de 3
const colaNumeros = new Cola("number", 3);

colaNumeros.crearCola(); // Inicializamos la cola
colaNumeros.insertar(10); // Insertamos 10
colaNumeros.insertar(20); // Insertamos 20
colaNumeros.insertar(30); // Insertamos 30
colaNumeros.ver(); // [10, 20, 30]

console.log(colaNumeros.insertar(40)); // Overflow: La cola está llena
console.log(colaNumeros.frente()); // 10
console.log(colaNumeros.quitar()); // 10
colaNumeros.ver(); // [20, 30]
console.log(colaNumeros.colaVacia()); // false
console.log(colaNumeros.colaLlena()); // false

//codigo de karen
class Cola {
    constructor(maxSize = 50) {
        this.items = [];
        this.maxSize = maxSize;
    }

    enqueue(elemento) {
        if (typeof elemento !== 'number') {
            throw new Error("Solo se pueden almacenar números en la cola");
        }
        if (this.isFull()) {
            return "La cola está llena";
        }
        this.items.push(elemento);
    }

    dequeue() {
        if (this.isEmpty()) {
            return "La cola está vacía";
        }
        return this.items.shift(); // Elimina y devuelve el primer elemento de la cola
    }

    frente() {
        if (this.isEmpty()) {
            return "La cola está vacía";
        }
        return this.items[0];
    }

    isEmpty() {
        return this.items.length === 0;
    }

    isFull() {
        return this.items.length >= this.maxSize;
    }

    size() {
        return this.items.length;
    }

    mostrar() {
        console.log(this.items);
    }
}

// Prueba de la cola
const miCola = new Cola(); // Crear una cola con tamaño máximo de 50
miCola.enqueue(1);
miCola.enqueue(2);
miCola.enqueue(3);
miCola.mostrar();

console.log("Atendiendo: ", miCola.dequeue());
console.log("Siguiente en la fila: ", miCola.frente());
console.log("La cola está vacía: ", miCola.isEmpty());
console.log("La cola está llena: ", miCola.isFull());
console.log("Tamaño de la cola: ", miCola.size());