const config = require('./../config');
const axios = require('axios').default;

module.exports =  getClientEmailFromToken = async (req) => {
    const token = req.headers.authorization.split(' ')[1];
        
    const header = {
        headers: {
            authorization: `Bearer ${token}`,
        },
    };
    const userinfo = await axios.get(config.AUTH0_ISSUER+"userinfo", header);
    
    return userinfo.data.email;
}