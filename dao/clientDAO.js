const database = require('../database/database');

class clientDAO {
    getClientByEmail(params) {
        const { email } = params;
        return database('clientes').where('email', email);
    }

    async addClient(body) {
        return await database('clientes').returning('id').insert(body);
    }
}

module.exports = new clientDAO();