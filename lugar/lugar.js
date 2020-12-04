const axios = require('axios');

//CREAMOS LA FUNCION QUE NOS PERMITE OBTENER LAT, LNG Y DIRECCION
const getLugarLatLng = async(dir) => {

    //PREPARAMOS LA DIRECCION PARA MANDARLA AL URL, LA CONVIERTE A FORMATO LEGIBLE PARA LA URL
    const encodeurl = encodeURI(dir);

    //OBTENEMOS LOS DATOS MEDIANTE UNA PROMESA, INSERTANDO LA URL Y LA KEY PARA USAR LA API
    const resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeurl}?&key=AIzaSyAw7pmW4JMqU0_2fmQOCpiei0RnpuiUkeY`)

    //SI NO ENCUENTRA LA UBICACION MANDAMOS EL SIGUIENTE ERROR
    if (resp.data.results.length === 0) {
        throw new Error(`No hay resultados para ${ dir}`);
    }

    //CREAMOS LAS SIGUIENTES VARIABLES PARA GUARDAR LOS DATOS CORRESPONDIENTES
    //EN DATA GUARDAMOS EL OBEJTO
    const data = resp.data.results[0];
    const direccion = data.formatted_address;
    const lat = data.geometry.location.lat;
    const lng = data.geometry.location.lng;

    //RETORNAMOS LAS VARIABLES CON LOS DATOS YA GUARDADOS
    return {
        direccion,
        lat,
        lng
    }
}

//EXPORTAMOS NUESTRA FUNCION
module.exports = {
    getLugarLatLng
}