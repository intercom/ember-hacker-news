import DS from 'ember-data';

export default DS.Model.extend({
  content: DS.attr('string'),
  user: DS.attr('string'),
  timeAgo: DS.attr('string'),
  comments: DS.hasMany('comments', { inverse: null })
});
