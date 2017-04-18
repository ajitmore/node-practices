module.exports = {
  "emptyString": "",
  "mongoDB": {
      "protocol": "mongodb://",
      "url": process.env.MongoDBurl || "127.0.0.1",
      "port": "27017",
      "dbName": "Movies"
  },
  "setting": {

  }
};
