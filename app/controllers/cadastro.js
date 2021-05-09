const { body, validationResult } = require('express-validator');

module.exports.cadastro = function (application, req, res) {
    res.render('cadastro', { validacao: {}, dadosForm: {} });
}

module.exports.cadastrar = function (application, req, res) {

    var dadosForm = req.body;

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        res.render("cadastro", { validacao: errors.array(), dadosForm: dadosForm });
        return;
    }

    var connection = application.config.database;
    var UsuariosDAO = new application.app.models.UsuariosDAO(connection);
    UsuariosDAO.inserirUsuario(dadosForm);

    var JogoDAO = new application.app.models.JogoDAO(connection);
    JogoDAO.gerarParametros(dadosForm.usuario)

    res.redirect("jogo");
}