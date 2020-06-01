const {
  validateVersion,
} = require('../utils');

const objectPath = require('object-path');

class AuthenticationAPI {
  constructor({ apiVersion, http }) {
    this.http = http;
    this.apiVersion = apiVersion;
  }

  urlPart = 'auth';

  apiVersions = {
    signin: 1.0,
  };

  async signin({
    username,
    password,
    // personalAccessTokenName,
    // userId,
  }) {
    validateVersion(this.apiVersion, this.apiVersions.signin, true);
    const method = 'POST';
    const urlPart = `${this.apiVersion}/${this.urlPart}/signin`;
    const body = {
      credentials: {
        name: username,
        password,
        site: {
          contentUrl: '',
        },
      },
    };

    const result = await this.http.request(method, urlPart, body);

    const token = objectPath.get(result, 'body.credentials.token');
    const siteId = objectPath.get(result, 'body.credentials.site.id');
    const userId = objectPath.get(result, 'body.credentials.user.id');

    this.http.setParams({
      token,
      siteId,
      userId,
    });

    return result;
  }
}
module.exports = AuthenticationAPI;
