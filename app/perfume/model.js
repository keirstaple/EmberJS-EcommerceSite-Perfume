import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  price: DS.attr(),
  size: DS.attr(),
  description: DS.attr(),
  image: DS.attr(),
  details: DS.attr()
});
