import DS from 'ember-data';

export default DS.Model.extend({
  value: DS.attr(),
  perfume: DS.belongsTo('perfume', {async: true})
});
