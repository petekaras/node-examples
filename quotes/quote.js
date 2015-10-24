var https = require("https");

getTestPersonaLoginCredentials(function (data){
	console.log(data.quote + '(' +data.author + ')');
})

function getTestPersonaLoginCredentials(callback) {

    return https.get({
        host: 'andruxnet-random-famous-quotes.p.mashape.com',
        path: '/cat=movies',
        headers: {
    	'X-Mashape-Key': 'cgVgLxV0tWmshbMBUvWYUDEEscFhp11mzBYjsnsQsAjh0X24je',
    	'Accept': 'text/plain',
    	'Content-Type': 'application/x-www-form-urlencoded'
  	}
    }, function(response) {
        // Continuously update stream with data
        var body = '';
        response.on('data', function(d) {
            body += d;
        });
        response.on('end', function() {

            // Data reception is done, do whatever with it!
            var parsed = JSON.parse(body);
     
            callback({
                quote: parsed.quote,
               	author: parsed.author
            });
        });
    });

}