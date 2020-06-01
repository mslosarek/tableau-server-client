const Http = require('./http');
const Api = require('./api');

class Client {
  constructor(baseUrl, apiVersion) {
    this.apiVersion = apiVersion;
    this.http = new Http(baseUrl, apiVersion);
    this.initializeApis();
  }

  initializeApis() {
    const dependencies = {
      apiVersion: this.apiVersion,
      http: this.http,
    };

    Object.keys(Api).forEach(apiName => {
      this[apiName] = new Api[apiName](dependencies);
    });
  }
}
module.exports = Client;
