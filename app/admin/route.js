import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('perfume');
  },
  actions: {
    saveItem(params) {
      var newItem = this.store.createRecord('perfume', params);
      newItem.save();
    },

    updateItem(perfume, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key] !== undefined) {
          perfume.set(key, params[key]);
        }
      });
      perfume.save();
    },

    destroyPerfume(perfume) {
      perfume.destroyRecord();
      this.transitionTo('admin');
    }
  }
});
