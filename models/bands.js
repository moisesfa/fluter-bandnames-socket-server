const Band = require("./band");

class Bands {

    constructor() {
        this.bands = [];
    }

    // Añadir una nueva banda
    addBand(band = new Band()) {
        this.bands.push(band);
    }

    // Para obtener las bandas
    getBands() {
        return this.bands;
    }

    // Borrar una band, devuelvo el resto que no tienen ese id 
    deleteBand(id = '') {
        this.bands = this.bands.filter(band => band.id !== id);
        return this.bands;
    }

    // Votar por una banda
    voteBand(id = '') {
        this.bands = this.bands.map(band => {
            if (band.id === id) {
                band.votes++;
                return band;
            } else {
                return band;
            }
        });
    }

}

module.exports = Bands;