import Ember from 'ember';

export default Ember.Service.extend({
  perfumes: [],
  add(perfume) {
    this.get('perfumes').pushObject(perfume);
  }
});
