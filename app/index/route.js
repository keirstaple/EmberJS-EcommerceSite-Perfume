import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('perfume');
  },

  actions: {
    signOut: function() {
      this.get("session").close();
    }
  }
});
