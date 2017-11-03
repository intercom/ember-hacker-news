import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  points: DS.attr('number'),
  time: DS.attr('unix-date'),
  timeAgo: DS.attr('string'),
  url: DS.attr('string'),
  domain: DS.attr('string')
});
