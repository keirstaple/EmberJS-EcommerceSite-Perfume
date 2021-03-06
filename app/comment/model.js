import DS from 'ember-data';

export default DS.Model.extend({
  rating: DS.attr(),
  title: DS.attr(),
  name: DS.attr(),
  date: DS.attr(),
  body: DS.attr(),
  perfume: DS.belongsTo('perfume', {async: true})
});
