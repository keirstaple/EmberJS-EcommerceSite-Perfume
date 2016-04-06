import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    updateItem(perfume, params) {
      this.sendAction('updateItem', perfume, params);
    }
  }
});
