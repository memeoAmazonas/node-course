const axios = require('axios');

class Busquedas {
    historial = [];

    constructor() {
        //TODO leer bd si existe
    }
    cargarHistory(data){
        data.forEach((it)=> this.historial.unshift(it));
    }

    get params() {
        return {
            access_token: process.env.MAPBOX_KEY,
            limit: 5,
            language: "es"
        }
    }

    async ciudad(lugar = "") {
        try {
            const instance = axios.create({
                baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/${lugar}.json`,
                params: this.params,
            })
            const response = await instance.get();
            return response.data.features.map((c) => ({
                id: c.id,
                name: c.place_name,
                lng: c.center[0],
                lat: c.center[1],
            }));
        } catch (e) {
            return [];
        }

    }

    get paramsClima() {
        return {
            appid: process.env.OPENWEATHER_KEY,
            units: 'metric',
            lang: 'es'
        }
    }

    async getClima(lat, lon) {
        try {
            const instance = axios.create({
                baseURL: "https://api.openweathermap.org/data/2.5/weather",
                params: { ...this.paramsClima, lat, lon }
            })
            const result = await instance.get();
            const desc = result.data.weather[0].description;
            const { temp, temp_min:min, temp_max:max} = result.data.main;
            return { temp, desc, min, max };
        } catch (e) {
            return null;
        }

    }
    agregarHistory(lugar){
        console.log("process.env.MAX_SIZE_HISTORY", process.env.MAX_SIZE_HISTORY);
        if (this.historial.length === process.env.MAX_SIZE_HISTORY){
            this.historial.pop();
        }
        if(!this.historial.includes(lugar)){
            this.historial.unshift(lugar)
        }
    }
}

module.exports = Busquedas;
