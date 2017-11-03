import Route from '@ember/routing/route';

export default Route.extend({
  model () {
    return this.get('store').query('item', {
      page: 1,
      filter: 'show'
    });
  }
});
