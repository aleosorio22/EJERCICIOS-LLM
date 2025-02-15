# 🚀 Ejercicios en Clase: Implementación de una Cola en JavaScript  
**Autores:** Karen Jiménez y René Alejandro  

---

## 📝 Descripción del Proyecto  
En este proyecto, trabajamos en la implementación de una **cola** en JavaScript, una estructura de datos fundamental. A partir de una clase base (`ColaSimple`), se mejoró la funcionalidad para crear una cola más avanzada, con características como:  
- Definición del **tipo de dato** que almacena la cola.  
- Control del **tamaño máximo** de la cola.  
- Operaciones básicas y avanzadas para manipular la cola.  

---

## 🛠️ Funcionalidades Implementadas  
La clase `Cola` ahora incluye las siguientes operaciones:  

### Operaciones Básicas  
- **`crearCola()`**: Inicializa la cola como vacía, pero con un tamaño máximo definido.  
- **`insertar(elemento)`**: Añade un elemento al final de la cola, siempre que no esté llena y el tipo de dato sea válido.  
- **`quitar()`**: Retira el elemento del frente de la cola.  
- **`frente()`**: Obtiene el elemento del frente sin retirarlo.  

### Verificaciones  
- **`colaVacia()`**: Comprueba si la cola no tiene elementos.  
- **`colaLlena()`**: Comprueba si la cola ha alcanzado su tamaño máximo.  

### Visualización  
- **`ver()`**: Muestra los elementos actuales de la cola en la consola.  

---

## 📄 Código Base y Mejoras  

### Código Base (Cola Simple)  
```javascript
class Cola {
    constructor() {
        this.items = [];
    }

    enqueue(element) {
        this.items.push(element);
    }

    dequeue() {
        if (this.isEmpty()) {
            return "Underflow";
        }
        return this.items.shift();
    }

    front() {
        if (this.isEmpty()) {
            return "No elements in Queue";
        }
        return this.items[0];
    }

    isEmpty() {
        return this.items.length === 0;
    }

    view() {
        console.log(this.items);
    }
}

//Codigo mejorado (Cola avanzada)
class Cola {
    constructor() {
        this.items = [];
    }

    enqueue(element) {
        this.items.push(element);
    }

    dequeue() {
        if (this.isEmpty()) {
            return "Underflow";
        }
        return this.items.shift();
    }

    front() {
        if (this.isEmpty()) {
            return "No elements in Queue";
        }
        return this.items[0];
    }

    isEmpty() {
        return this.items.length === 0;
    }

    view() {
        console.log(this.items);
    }
}

## Análisis de los Prompts
Prompt de René (DeepSeek)
Objetivo: Adaptar la clase Cola para que sea más avanzada, permitiendo definir el tipo de dato y el tamaño máximo de la cola.

Resultado: Se implementó una cola con validación de tipo de dato y control de tamaño, lo que la hace más robusta y flexible.

Prompt de Karen (Copilot)
Objetivo: Modificar la clase ColaSimple para que sea más eficiente, definiendo un tamaño fijo de 50.

Resultado: Se creó una cola con un tamaño máximo predefinido, pero sin validación de tipo de dato.

Conclusión
Ambos prompts lograron mejorar la funcionalidad de la cola, pero el de René fue más específico y permitió una implementación más completa. La diferencia en los resultados se debe principalmente a la claridad y detalle de los prompts.

🎯 Ejemplo de Uso
javascript
Copy
// Crear una cola de números con un tamaño máximo de 5
const colaNumeros = new Cola("number", 5);

colaNumeros.crearCola(); // Inicializar la cola
colaNumeros.insertar(10); // Insertar 10
colaNumeros.insertar(20); // Insertar 20
colaNumeros.insertar(30); // Insertar 30
colaNumeros.ver(); // [10, 20, 30]

console.log(colaNumeros.insertar(40)); // Overflow: La cola está llena
console.log(colaNumeros.frente()); // 10
console.log(colaNumeros.quitar()); // 10
colaNumeros.ver(); // [20, 30]
console.log(colaNumeros.colaVacia()); // false
console.log(colaNumeros.colaLlena()); // false
🚧 Próximos Pasos
Implementar iteradores para recorrer la cola.

Agregar métodos para buscar elementos o verificar su existencia.

Mejorar la eficiencia del código para colas muy grandes.

📌 Notas Finales
Este proyecto es un excelente ejemplo de cómo mejorar una implementación básica para hacerla más robusta y funcional. ¡Sigue practicando y explorando nuevas funcionalidades! 🚀

Copy

### Instrucciones para usar el archivo:
1. Crea un archivo en tu repositorio llamado `README.md`.
2. Copia y pega el contenido anterior en el archivo.
3. ¡Listo! Ahora tu repositorio tendrá un `README.md` bien estructurado y detallado.

Si necesitas más ajustes o quieres agregar algo adicional, ¡avísame! 😊
