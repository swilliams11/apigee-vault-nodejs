var http = require('http');
var apigee = require('apigee-access');

http.createServer(function(req, res) {

	 var orgVault = apigee.getVault('vaulttest', 'organization');
   		orgVault.get('key1', function(err, secretValue) {     
   			// use the secret value here
   			res.end(secretValue);
		});
	//res.end('Hello World');
}).listen(8888, '127.0.0.1');

console.log('Server running at http://127.0.0.1:888/');
