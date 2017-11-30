'use strict';

const hello = (event, context, callback) => {
  console.log('Launching Provisioning Services');
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Launching Provisioning Services in Serverless!',
      input: event,
    }),
  };

  callback(null, response);

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // callback(null, { message: 'Go Serverless v1.0! Your function executed successfully!', event });
};

const echo = function (event, context, callback) {
	console.log(event, context);
	return callback(null, {
		statusCode: 200,
		body: JSON.stringify(event.body),
		headers: {
			'Access-Control-Allow-Origin': '*'
		}
	});
};

module.exports.echo = echo;
module.exports.hello = hello;