const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');
// CONFIGURAR ARGUMENTOS DIRECTAMENTE DE LA RAIZ O COMANDO
const argv = require('yargs').options({
    direccion: {
        demand: true,
        alias: 'd',
        desc: 'Nombre de la ciudad a obtener el clima'
    }
}).argv;

//CREAMOS UNA FUNCION PARA UNIR EL CLIMA Y LA UBICACION
const getInfo = async(direccion) => {

        try {
            const coords = await lugar.getLugarLatLng(direccion);
            const temp = await clima.getClima(coords.lat, coords.lng)
            return `El clima de ${coords.direccion} es de ${temp}`
        } catch (e) {
            return `No se pudo determinar el clima de ${direccion}`
        }

    }
    //IMPRIMIMOS EN CONSOLA
getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);