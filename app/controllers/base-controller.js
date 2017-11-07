import Controller from '@ember/controller';

export default Controller.extend({

  actions: {
    markAsRead(item) {
      this.get('store').unloadRecord(item);
    }
  }
});
