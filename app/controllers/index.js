const { body, validationResult } = require('express-validator');

module.exports.index = function (application, req, res) {
    res.render('index', { validacao: {}, dadosForm: {} });
}

module.exports.autenticar = function (application, req, res) {

    var dadosForm = req.body;

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        res.render("index", { validacao: errors.array(), dadosForm: dadosForm });
        return;
    }

    var connection = application.config.database;
    var UsuariosDAO = new application.app.models.UsuariosDAO(connection);

    UsuariosDAO.autenticar(dadosForm, req, res);
}