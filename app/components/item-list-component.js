import Component from '@ember/component';
import Ember from 'ember';
import { computed } from '@ember/object';

export default Component.extend({
  readItems: Ember.A(),
  init() {
    this._super(...arguments);
    this.readItems = [];
  },
  filteredItems: computed('items.[]', 'readItems.[]', function() {
    return this.get('items').filter(item =>  !this.get('readItems').includes(item.get('id')));
  }),
  actions: {
    markAsRead(itemId) {
      this.get('readItems').pushObject(itemId)
    }
  }
});
