import DS from 'ember-data';
import { inject as service } from '@ember/service';

export default DS.RESTAdapter.extend({
  ajax: service(),
  host: 'http://node-hnapi.herokuapp.com',
  namespace: '/item',
  findAll(store, type) {
    return this.query(store, type);
  },
  async findQuery(store, type, query = {}) {
    let response = await this.request('GET', query);
    return response ? response[0] : {};
  },
  findRecord(store, type, id) {
    let url = this.buildUrl(`item/${id}`);
    return this.get('ajax').request(
      url,
      { method: 'GET' }
    );
  },
  query(store, type, query) {
    return this.request('GET', query);
  },
  urlForQuery({ filter, page }) {
    filter = filter || 'front-page';
    page = page || 1;
    const FILTER_MAP = {
      'front-page': 'news',
      new: 'newest',
      active: 'active',
      show: 'show',
      ask: 'ask',
      jobs: 'jobs',
    };
    let section = FILTER_MAP[filter];
    let url = `${section}?page=${page}`
    return this.buildUrl(url);
  },
  buildUrl(path) {
    let parts = [];
    if (this.get("proxy")) {
      parts.push(this.get("proxy"));
    }
    if (this.get("host")) {
      parts.push( this.get("host"));
    }
    parts.push(path);
    return parts.join("/");
  },
  request(verb, query) {
    return this.get('ajax').request(
      this.urlForQuery(query),
      { method: verb }
    );
  }
});
