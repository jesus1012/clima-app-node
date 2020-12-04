const axios = require('axios');

//CREAMOS UNA FUNCION PARA OBTENER EL CLIMA MEDIANTE LAT Y LNG
const getClima = async(lat, lng) => {
    //MEDIANTE LA API HACEMOS LA SOLICITUD Y LA GUARDAMOS EN LAVARIABLE RESP
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=00f82ad67a127d9216dbd1a75fec7624&units=metric`)

    return resp.data.main.temp;

}

module.exports = {
    getClima
}