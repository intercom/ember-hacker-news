import DS from 'ember-data';
import { underscore } from '@ember/string';

export default DS.JSONSerializer.extend(DS.EmbeddedRecordsMixin, {
  attrs: {
    comments: {
      embedded: 'always'
    }
  },
  keyForAttribute: function(attr) {
    return underscore(attr);
  },
  keyForRelationship: function(rawKey) {
    return underscore(rawKey);
  },
});
