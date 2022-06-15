const config = require('../config');
const axios = require('axios').default;

module.exports =  getClienInfoFromToken = async (req) => {
    const token = req.headers.authorization.split(' ')[1];
        
    const header = {
        headers: {
            authorization: `Bearer ${token}`,
        },
    };
    const response = await axios.get(config.AUTH0_ISSUER+"userinfo", header);
    
    return response.data;
}