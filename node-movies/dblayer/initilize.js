(function(initilizeDB) {
    'use strict';

    initilizeDB.init = function(app) {
        var mongoose = app.get('mongoose');
        if (mongoose) {
            var db = mongoose.connection;
            if (db) {
                db.on('error', console.error.bind(console, 'connection error:'));
                db.once('open', function() {
                    console.log('Connected to DB sever...');
                });
            }
        }

    }
})(module.exports);
