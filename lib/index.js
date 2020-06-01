const Client = require('./client');

function initialize({
  baseUrl,
  apiVersion,
}) {
  return new Client(baseUrl, apiVersion);
}

module.exports = {
  initialize,
};
