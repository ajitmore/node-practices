var express = require('express'),
    app = module.exports = express(),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser'),
    index = require('./index'),
    config = require('./config.js'),
    movies = require('./controllers/movies'),
    dbLayer = require('./dblayer/initilize'),
    router = express.Router(),
    authorization = require('./routerAuth/authorization'),
    nonAuthorization = require('./routerAuth/nonAuthorization'),
    cors = require('cors'),
    mongoDBUrl = config.mongoDB.protocol + config.mongoDB.url + ':' + config.mongoDB.port + '/' + config.mongoDB.dbName;

global.basePath = __dirname + '/';
global.dbBasePath = __dirname + '/dblayer/';

mongoose.connect(mongoDBUrl, function(error) {
    if (error) {
        console.error(error);
        process.exit();
    }
});
app.set('mongoose', mongoose)
dbLayer.init(app);

app.set('config', config);

app.use(cors());

router.use('/api/', authorization.authorize);
router.use('/content/', nonAuthorization.common);
app.set('router', router)
app.use(router);

app.get('/', function(req, res) {
    res.send('The server is running on port 1333');
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

index.init(app);

app.listen('1333', function() {
    console.log('The server is running on port 1333');
});
