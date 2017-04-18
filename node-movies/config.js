module.exports = {
  "emptyString": "",
  "mongoDB": {
      "protocol": "mongodb://",
      "url": process.env.MongoDBurl | "localhost",
      "port": "27017",
      "dbName": "Movies"
  },
  "setting": {

  }
};
