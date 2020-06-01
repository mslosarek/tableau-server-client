const { URL } = require('url');
const needle = require('needle');
const { template } = require('underscore');

const logger = require('./logger');

class Http {
  constructor(baseUrl, apiVersion) {
    this.baseUrl = baseUrl;
    this.apiVersion = apiVersion;
    this.params = {
      apiVersion,
    };
  }

  setParam(prop, val) {
    this.params[prop] = val;
  }

  getParam(prop) {
    return this.params[prop];
  }

  setParams(params) {
    this.params = {
      ...this.params,
      ...params,
    };

  }

  async request(method, urlPart, data = null) {
    // https://underscorejs.org/#template
    const urlPath = template(`/api/${urlPart}`)(this.params);

    const url = new URL(urlPath, this.baseUrl);
    logger.info({url: url.href});

    const options = {
      json: true,
      headers: {
        Accept: 'application/json',
      },
    };

    if (this.params.token) {
      options.headers['X-Tableau-Auth'] = this.params.token;
    }

    return needle(method, url.href, data, options);
  }
}
module.exports = Http;
