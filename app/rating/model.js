import DS from 'ember-data';

export default DS.Model.extend({
  value: DS.belongsTo('perfume', {async: true})
});
