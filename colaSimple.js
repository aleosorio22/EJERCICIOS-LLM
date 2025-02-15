class Cola {
    constructor(){
        this.items = [];
    }

    enqueue(element){
        this.items.push(element);
    }

    dequeue(){
        if(this.isEmpty()){
            return "Underflow";
        }
        return this.items.shift();
    }

    front(){
        if(this.isEmpty()){
            return "No elements in Queue";
        }
        return this.items[0];
    }

    isEmpty(){
        return this.items.length === 0;
    }

    view(){
        console.log(this.items);
    }
}

//prueba de la cola
let cola = new Cola();

cola.enqueue("Cliente 1");
cola.enqueue("Cliente 2");
cola.enqueue("Cliente 3");
cola.view(); // ["Cliente 1", "Cliente 2", "Cliente 3"]
console.log("Atendiendo a: " + cola.dequeue()); // Cliente 1
console.log("Siguiente en la fila: " + cola.front()); // Cliente 2

