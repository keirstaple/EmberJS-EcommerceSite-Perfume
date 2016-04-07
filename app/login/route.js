import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel: function() {
    return this.get("session").fetch().catch(function() {});
  },
  actions: {
    signIn: function(params) {
      this.get("session").open("firebase", {
        provider: "password",
        email: params.email,
        password: params.password
    }).then(function(data) {
      this.transitionTo('index');
      });
    }
  }
});
