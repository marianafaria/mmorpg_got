const { body, validationResult } = require('express-validator');

module.exports = function (application) {
    application.get('/cadastro', function (req, res) {
        application.app.controllers.cadastro.cadastro(application, req, res);
    });

    application.post('/cadastrar',
        body('nome', 'Nome é obrigatório').notEmpty(),
        body('usuario', 'Usuário é obrigatório').notEmpty(),
        body('senha', 'Senha é obrigatório').notEmpty(),
        body('casa', 'Casa é obrigatório').notEmpty(),
        function (req, res) {
            application.app.controllers.cadastro.cadastrar(application, req, res);
        });
}