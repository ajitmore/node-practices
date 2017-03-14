var express =  require('express'),
    app = module.exports = express(),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser'),
    index = require('./index'),
    config = require('./config.json'),
    movies = require('./controllers/movies'),
    dbLayer = require('./dblayer/initilize');

global.basePath = __dirname + '/';
global.dbBasePath = __dirname + '/dblayer/';

mongoose.connect(config.mongoDB.url + ':' + config.mongoDB.port + '/' + config.mongoDB.dbName);
app.set('mongoose', mongoose)
dbLayer.init(app);

app.set('config', config);

app.get('/', function(req, res) {
  res.send('The server is running on port 1333');
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

index.init(app);

app.listen('1333', function() {
  console.log('The server is running on port 1333');
});