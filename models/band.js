// Usamos el paquete de nodo uuid - npm i uuid

const { v4: uuidV4 } = require('uuid');


class Band {

    constructor(name = 'no-name') {
        this.id = uuidV4(); //Identificador unico 
        this.name = name;
        this.votes = 0;
    }
}

// Exportación por defecto
module.exports = Band;