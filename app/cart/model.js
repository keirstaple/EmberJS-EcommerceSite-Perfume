import DS from 'ember-data';

export default DS.Model.extend({
  perfumes: DS.hasMany('perfume', {async: true}),
  total: DS.attr()
});
