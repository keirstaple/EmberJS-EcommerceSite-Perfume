import DS from 'ember-data';

export default DS.Model.extend({
  email: DS.attr(),
  carts: DS.hasMany('cart', {async: true})
});
