const clientDAO = require('../dao/clientDAO');

class ClientController {
    async getClientByEmail(req, res) {
        clientDAO.getClientByEmail(req.params)
            .then(client => {
                if (client.length > 0) {
                    res.status(200).json(client)
                } else {
                    res.status(404).json(client)
                }                
            })
            .catch(error => {
                res.status(500).json({ message: 'No se pudo recuperar el cliente' })
            })
    }

    async addClient(req, res) {
        clientDAO.addClient(req.body)
            .then(client => {
                res.status(201).json(client)
            })
            .catch(error => {
                res.status(500).json({ message: 'No se pudo añadir el cliente' })
            })
    }
}

module.exports = new ClientController();