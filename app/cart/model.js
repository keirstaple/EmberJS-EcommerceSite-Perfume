import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  user: DS.belongsTo('user', {async: true}),
  perfumes: DS.hasMany('perfume', {async: true}),
  total: DS.attr()
});
