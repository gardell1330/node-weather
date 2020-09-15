const { argv } = require('./config/yargs');
const { getWeather } = require('./weather/weather');

getWeather(argv.direccion)
    .then(res => console.log(`El clima de ${res.name} es de ${res.temperature}°C`))
    .catch(console.log);