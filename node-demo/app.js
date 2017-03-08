const http = require('http');
const roomDetails = require('./room-details.json');

const server = http.createServer((req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Request-Method', '*');
	res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET');
	res.setHeader('Access-Control-Allow-Headers', '*');

  res.writeHead(200,{'Content-Type':'application/json'});
  res.write(JSON.stringify(roomDetails));
//   var method = req.method;
//   var headers = req.headers;
//   var url = req.url;
//   var body = [];
//   //To handler error
//   req.on('error', function(err){
//     console.error(err);
//   }).on('data', function(chunk){ //On data for POST n PUT
//     body.push(chunk);
//   }).on('end', function(){ // Concate data chunk while ending request
//     body = Buffer.concat(body).toString();
//
//     res.on('error', function(err) {
//       console.error(err);
//     });
//
//     // Ok response code
//     res.statusCode = 200;
//     res.setHeader('Content-Type','application/json');
//
//     var resBody = {
//       headers: headers,
//       method: method,
//       url: url,
//       body: body
//     };
//
//     res.write(JSON.stringify(resBody));
//     res.end();
//   })
})
server.listen(1337);

console.log('Server is running on 1337');
