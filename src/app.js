/* Sample Node.js PHP web server */
try {
	var PATH = require('path');
	var debug = require('nor-debug');
	debug.setProjectRoot(PATH.dirname(__dirname));
	var php = require('nodephp');
	var http = require('http');
	http.createServer(function (req, res) {
		try {
			debug.log('URL = ', req.url);
			php.createHandler({
				'fcgi': {	
					'port': 9000,	
					'host': 'localhost', // This can be a socket.
				},
				'script_dir': __dirname,
				'script_file': __dirname + '/phpinfo.php'
			})(req, res);
		} catch(e) {
			debug.error(e);
		}
	}).listen(3050);
	debug.log('Server running at port 3050');
} catch(e) {
	debug.error(e);
}
