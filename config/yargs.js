const argv = require('yargs')
    .option({
        direccion: {
            alias: 'd',
            demand: true,
            desc: 'Direccion de la cuidad para obtener el clima'
        }
    })
    .help()
    .argv;

module.exports = {
    argv
}