const axios = require('axios');
const apiKey = 'cfabff6b238a93bdfd76f12d7027d6d8';
const instance = axios.create({
    baseURL: `https://api.openweathermap.org/data/2.5`
});

const getWeather = async(city) => {

    try {
        let respuesta = await instance.get(`/weather?q=${encodeURI(city)}&APPID=${apiKey}&units=metric&lang=es`);

        if (respuesta.data.length === 0) {
            throw new Error(`No hay resultados para ${city}`)
        }

        const data = respuesta.data;

        const temperature = data.main.temp;
        const name = data.name;
        return {
            temperature,
            name
        }
    } catch (error) {
        throw new Error(`No hay resultados para ${city}`)
    }
}

module.exports = {
    getWeather
}