import web3 from 'web3';
const createResponse = require('./createResponse');

module.exports.hello = (event, context, callback) => {
  const response = createResponse({ body: { message: 'Success!' } });
  console.log({ response });
  console.log(web3);
  callback(null, response);
};
