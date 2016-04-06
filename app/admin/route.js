import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('perfume');
  },
  actions: {
    saveItem(params) {
      var newItem = this.store.createRecord('perfume', params);
      newItem.save();
    }
  }
});
