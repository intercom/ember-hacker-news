import Pretender from 'pretender';
import ItemData from 'ember-hacker-news/models/data/item';
import ItemsData from 'ember-hacker-news/models/data/items';

export function initialize() {
  let server = new Pretender(function() {
    this.get('http://node-hnapi.herokuapp.com/news', () => {
      return [200, {"Content-Type": "application/json"}, JSON.stringify(ItemsData)]
    });

    this.get('http://node-hnapi.herokuapp.com/item/:id', (request) => {
      return [200, {"Content-Type": "application/json"}, JSON.stringify(Object.assign(ItemData, request.params.id))]
    });
  });
}

export default {
  initialize
};
