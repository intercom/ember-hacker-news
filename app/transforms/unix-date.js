import DS from 'ember-data';

export default DS.Transform.extend({
  deserialize(serialized) {
    // Timestamp comes back in seconds so need to convert to milliseconds.
    return new Date(serialized*1000);
  },

  serialize(deserialized) {
    return deserialized.to;
  }
});
