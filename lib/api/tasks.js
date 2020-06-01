const {
  validateVersion,
} = require('../utils');

const objectPath = require('object-path');

class TasksAPI {
  constructor({ apiVersion, http }) {
    this.http = http;
    this.apiVersion = apiVersion;
  }

  urlPart = 'tasks';

  apiVersions = {
    getExtractRefreshes: 2.6,
    runExtractRefresh: 2.6,
  };

  async getExtractRefreshes() {
    validateVersion(this.apiVersion, this.apiVersions.getExtractRefreshes, true);
    const method = 'GET';
    const urlPart = `${this.apiVersion}/sites/${this.http.getParam('siteId')}/${this.urlPart}/extractRefreshes`;

    return this.http.request(method, urlPart);
  }

  async runExtractRefresh(taskId) {
    validateVersion(this.apiVersion, this.apiVersions.runExtractRefresh, true);
    const method = 'POST';
    const urlPart = `${this.apiVersion}/sites/${this.http.getParam('siteId')}/${this.urlPart}/extractRefreshes/${taskId}/runNow`;

    return this.http.request(method, urlPart, {});
  }
}
module.exports = TasksAPI;
