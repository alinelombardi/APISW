var axios = require('axios');

const localizaPlaneta = async (nomePlaneta) => {

    const result = await axios.get(`https://swapi.dev/api/planets/?search=${nomePlaneta}`)
    .catch((error) => {
      return error;    
    });
    return result.data;
};

module.exports = localizaPlaneta;
