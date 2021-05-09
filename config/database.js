var mongo = require('mongodb');

var connMongoDB = function () {
    var db = new mongo.Db(
        'got',
        new mongo.Server(
            'localhost', //endereço
            27017, //porta
            {}
        ),
        {}
    );

    return db;
}

module.exports = function () {
    return connMongoDB;
}