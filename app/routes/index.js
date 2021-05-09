const { body, validationResult } = require('express-validator');

module.exports = function (application) {
	application.get('/', function (req, res) {
		application.app.controllers.index.index(application, req, res);
	});

	application.post('/autenticar',
		body('usuario', 'Usuário é obrigatório').notEmpty(),
		body('senha', 'Senha é obrigatório').notEmpty(),
		function (req, res) {
			application.app.controllers.index.autenticar(application, req, res);
		});
}