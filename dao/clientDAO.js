const database = require('../database/database');

class clientDAO {
    getClientByEmail(params) {
        const { email } = params;
        return database('clientes').where('email', email);
    }

    async addClient(body) {
        const now = new Date();
        const cliente = {...body, created_at: now}
        return await database('clientes').returning('id').insert(cliente);
    }
}

module.exports = new clientDAO();