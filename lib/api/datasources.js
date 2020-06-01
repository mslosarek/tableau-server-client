const {
  validateVersion,
} = require('../utils');

const objectPath = require('object-path');

class DatasourcesAPI {
  constructor({ apiVersion, http }) {
    this.http = http;
    this.apiVersion = apiVersion;
  }

  urlPart = 'datasources';

  apiVersions = {
    updateDataSource: 2.8,
  };

  async updateDataSource(datasourceId) {
    validateVersion(this.apiVersion, this.apiVersions.updateDataSource, true);
    const method = 'POST';
    const urlPart = `${this.apiVersion}/sites/${this.http.getParam('siteId')}/${this.urlPart}/${datasourceId}/refresh`;

    return this.http.request(method, urlPart, {});
  }
}
module.exports = DatasourcesAPI;
